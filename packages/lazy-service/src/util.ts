/**
 * axios 的 forEach 方法，用来通用地遍历数组或对象结构
 * @param {被遍历的对象或数组或值} obj
 * @param {回调} fn
 */
const forEach = (obj: any, fn: (item: any, key: string | number, self: any) => void) => {
  if (obj === null || typeof obj === 'undefined') {
    return;
  }
  if (typeof obj !== 'object') {
    obj = [obj];
  }
  if (Array.isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
};


/**
 * axios 的 merge 方法，用来深度合并两个对象
 * @param {要合并的对象} 任意数量的对象
 */
const merge = (...params: object[]) => {
  var result = {};
  function assignValue(val: any, key: string | number) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }
  for (var i = 0, l = params.length; i < l; i++) {
    forEach(params[i], assignValue);
  }
  return result;
};

/**
 * 将普通对象转换成 FormData
 * @param {普通对象} object
 */
const createFormData = (object: Record<string, string | Blob>) => {
  const formData = new FormData();
  Object.keys(object).forEach(key => {
    formData.append(key, object[key]);
  });
  return formData;
};

export default {
  merge,
  createFormData,
}