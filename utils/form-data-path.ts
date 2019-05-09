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
      parent: data,
      value: data[firstPath],
      path: firstPath,
    };
  } else if (firstPath === '$') {
    const position = arrPosition[0];
    checkEmptyValue(data, position, nextPath);
    return getValue(data[position], path.slice(1), arrPosition.slice(1));
  } else {
    checkEmptyValue(data, firstPath, nextPath);
    return getValue(data[firstPath], path.slice(1), arrPosition);
  }
}
