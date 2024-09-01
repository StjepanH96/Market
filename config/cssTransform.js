module.exports = {
    process() {
      return 'module.exports = {};';
    },
    getCacheKey() {
      // Cache key function
      return 'cssTransform';
    },
  };