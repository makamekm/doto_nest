import Vue from 'vue';

export type Directive<T = any> = (value: T, prevValue: T, data) => T;

export interface Directives {
  [path: string]: Directive[];
}

export interface GetSetValue<T = any> {
  setValue(value: T, directives: Directive[], scope);
  value: T | undefined;
}

export const ARRAY_DELIMITER = '$';

export function applyDirectives(directives: Directives, data) {
  for (const fullPath of Object.keys(directives)) {
    const { setValue, value } = getParseValue(data, fullPath, []);
    setValue(value, directives[fullPath], data);
  }
}

export function getParseValue<T = any>(data, path: string, arrPosition: number[] = []): GetSetValue<T> {
  return getValue(data, path.split('.'), arrPosition);
}

export function checkUndefinedValue(data, path: string) {
  if (data[path] === undefined) {
    Vue.set(data, path, null);
  }
}

export function checkEmptyValue(data, path: string | number, nextPath: string) {
  if (!data[path]) {
    Vue.set(data, path, nextPath === ARRAY_DELIMITER ? [] : {});
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
) {
  directives.forEach((directive) => {
    newValue = directive(newValue, data[path], scope);
  });
  return newValue;
}

export function getSetValue<T = any>(data, path: string) {
  return (newValue: T, directives: Directive[] = [], scope) => {
    newValue = getNonUndefinedValue<T>(newValue, data[path]);
    newValue = runDirectivesForValue<T>(directives, newValue, path, data, scope);
    data[path] = newValue;
  };
}

export function getArrayGetSetValue<T = any>(data, path: string[], arrPosition: number[]) {
  return {
    setValue(value: T, directives: Directive[], scope) {
      data.forEach((row) => {
        const { setValue } = getValue<T>(row, path, arrPosition);
        setValue(value, directives, scope);
      });
    },
    value: undefined,
  };
}

export function getGetSetValue<T = any>(data, path: string) {
  return {
    setValue: getSetValue<T>(data, path),
    value: data[path],
  };
}

export function getFirstSecondPath(path: string[]) {
  return {
    firstPath: path[0],
    secondPath: path[1],
  };
}

export function getValue<T = any>(data, path: string[], arrPosition: number[]): GetSetValue<T> {
  const { firstPath, secondPath } = getFirstSecondPath(path);
  if (path.length === 1) {
    checkUndefinedValue(data, firstPath);
    return getGetSetValue<T>(data, firstPath);
  } else if (firstPath === ARRAY_DELIMITER) {
    const position = arrPosition[0];
    if (position == null) {
      checkEmptyValue(data, position, secondPath);
      return getArrayGetSetValue<T>(data, path.slice(1), arrPosition);
    } else {
      checkEmptyValue(data, position, secondPath);
      return getValue<T>(data[position], path.slice(1), arrPosition.slice(1));
    }
  } else {
    checkEmptyValue(data, firstPath, secondPath);
    return getValue<T>(data[firstPath], path.slice(1), arrPosition);
  }
}
