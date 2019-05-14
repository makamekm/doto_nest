import Vue from 'vue';

export function getParseValue(data, path: string, arrPosition: number[] = []) {
  return getValue(data, path.split('.'), arrPosition);
}

export function checkUndefinedValue(data, path: string) {
  if (data[path] === undefined) {
    Vue.set(data, path, null);
  }
}

export function checkEmptyValue(data, path: string | number, nextPath: string) {
  if (!data[path]) {
    if (nextPath === '$') {
      Vue.set(data, path, []);
    } else {
      Vue.set(data, path, {});
    }
  }
}

export function getValue(data, path: string[], arrPosition: number[]) {
  const firstPath = path[0];
  const nextPath = path[1];
  if (path.length === 1) {
    checkUndefinedValue(data, firstPath);
    return {
      setValue(newValue, directives, scope) {
        if (newValue === undefined) {
          newValue = data[firstPath];
        }
        (directives || []).forEach((directive) => {
          newValue = directive(newValue, data[firstPath], scope);
        });
        data[firstPath] = newValue;
      },
      value: data[firstPath],
    };
  } else if (firstPath === '$') {
    const position = arrPosition[0];
    if (position == null) {
      checkEmptyValue(data, position, nextPath);
      return {
        setValue(value, directives, scope) {
          data.forEach((row, index) => {
            const { setValue } = getValue(row, path.slice(1), arrPosition);
            setValue(value, directives, scope);
          });
        },
        value: undefined,
      };
    } else {
      checkEmptyValue(data, position, nextPath);
      return getValue(data[position], path.slice(1), arrPosition.slice(1));
    }
  } else {
    checkEmptyValue(data, firstPath, nextPath);
    return getValue(data[firstPath], path.slice(1), arrPosition);
  }
}
