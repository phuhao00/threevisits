
const StringifyWithCircularHandling = (value) => {
  return new Promise((resolve, reject) => {
    try {
      const cache = new Set();
      const result = JSON.stringify(value, (_, v) => {
        if (typeof v === 'object' && v !== null) {
          if (cache.has(v)) {
            return '[Circular]';
          }
          cache.add(v);
        }
        return v;
      });
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

export default StringifyWithCircularHandling;

