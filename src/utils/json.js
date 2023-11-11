function StringifyWithCircularHandling(obj) {
  const cache = new Set();

  return JSON.stringify(obj, (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (cache.has(value)) {
        // 处理循环引用
        return '[Circular]';
      }
      cache.add(value);
    }
    return value;
  });
}

export default StringifyWithCircularHandling;

