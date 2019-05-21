import Vue from 'vue';

export type Directive<T = any, S = any> = (context: {
  value: T;
  prevValue: T;
  scope: S;
  fullPath: string;
  fullPosition: number[];
}) => T;

export type Validator<T = any, S = any> = (context: {
  value: T;
  scope: S;
  fullPath: string;
  fullPosition: number[];
}) => string[];

export interface Directives {
  [path: string]: Directive[];
}

export interface Validators {
  [path: string]: Validator[];
}

export interface GetSetValue<T = any> {
  setValue(value: T, directives: Directive[], scope);
  value: T | undefined;
}

export function validate<S = any>(
  data: S,
  path: string,
  position: number[] = [],
  validators: Validator[],
): string[] {
  const { value } = getParseValue(data, path, position);
  let errors: string[] = [];
  validators.forEach((validator) => {
    errors = [
      ...errors,
      ...validator({
        value,
        scope: data,
        fullPath: path,
        fullPosition: position,
      }) || [],
    ];
  });
  return errors;
}

export const IS_ARRAY_DELIMITER_REGEXP = /^(\$|[0-9]{1,})$/gi;
export const IS_ARRAY_DIGIT_REGEXP = /^(\[0-9]{1,})$/gi;

export function applyDirectives(directives: Directives, data) {
  for (const fullPath of Object.keys(directives)) {
    const { setValue, value } = getParseValue(data, fullPath, []);
    setValue(value, directives[fullPath], data);
  }
}

export function getParseValue<T = any>(data, path: string, position: number[] = []): GetSetValue<T> {
  return getValue(data, path.split('.'), position, path);
}

export function checkUndefinedValue(data, path: string) {
  if (data[path] === undefined) {
    Vue.set(data, path, null);
  }
}

export function checkEmptyValue(data, path: string | number, nextPath: string) {
  if (!data[path]) {
    Vue.set(data, path, IS_ARRAY_DELIMITER_REGEXP.test(nextPath) ? [] : {});
  }
}

export function getNonUndefinedValue<T = any>(value: T, nonUndefinedValue: T) {
  if (value === undefined) {
    return nonUndefinedValue;
  }
  return value;
}

export function runDirectivesForValue<T = any>(
  directives: Array<Directive<T>> = [],
  newValue: T,
  path: string,
  data,
  scope,
  fullPath: string,
  fullPosition: number[],
) {
  directives.forEach((directive) => {
    newValue = directive({
      value: newValue,
      prevValue: data[path],
      scope,
      fullPath,
      fullPosition,
    });
  });
  return newValue;
}

export function getSetValue<T = any>(
  data,
  path: string,
  fullPath: string,
  fullPosition: number[],
) {
  return (newValue: T, directives: Directive[] = [], scope) => {
    newValue = getNonUndefinedValue<T>(newValue, data[path]);
    newValue = runDirectivesForValue<T>(
      directives,
      newValue,
      path,
      data,
      scope,
      fullPath,
      fullPosition,
    );
    data[path] = newValue;
  };
}

export function getArrayGetSetValue<T = any>(
  data,
  path: string[],
  fullPath: string,
  position: number[],
) {
  return {
    setValue(value: T, directives: Directive[], scope) {
      data.forEach((row, index) => {
        const { setValue } = getValue<T>(
          row,
          path,
          position,
          fullPath,
          [index, ...position],
        );
        setValue(value, directives, scope);
      });
    },
    value: undefined,
  };
}

export function getGetSetValue<T = any>(
  data,
  path: string,
  fullPath: string,
  fullPosition: number[],
) {
  return {
    setValue: getSetValue<T>(data, path, fullPath, fullPosition),
    value: data[path],
  };
}

export function getFirstSecondPath(path: string[]) {
  return {
    firstPath: path[0],
    secondPath: path[1],
  };
}

export function parsePosition(firstPath: string, value: number) {
  return IS_ARRAY_DIGIT_REGEXP.test(firstPath)
    ? Number.parseInt(firstPath, 10)
    : value;
}

export function getValue<T = any>(
  data,
  path: string[],
  position: number[],
  fullPath: string,
  fullPosition?: number[],
): GetSetValue<T> {
  fullPosition = fullPosition || position;
  const { firstPath, secondPath } = getFirstSecondPath(path);
  if (path.length === 1) {
    checkUndefinedValue(data, firstPath);
    return getGetSetValue<T>(data, firstPath, fullPath, fullPosition);
  } else if (IS_ARRAY_DELIMITER_REGEXP.test(firstPath)) {
    const index = parsePosition(firstPath, position[0]);
    if (index == null) {
      checkEmptyValue(data, index, secondPath);
      return getArrayGetSetValue<T>(data, path.slice(1), fullPath, position);
    } else {
      checkEmptyValue(data, index, secondPath);
      return getValue<T>(data[index], path.slice(1), position.slice(1), fullPath, fullPosition);
    }
  } else {
    checkEmptyValue(data, firstPath, secondPath);
    return getValue<T>(data[firstPath], path.slice(1), position, fullPath);
  }
}
