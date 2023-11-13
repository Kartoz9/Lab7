function toCamelCase(input) {
    return input.replace(/_([a-z])/g, function (match, group1) {
      return group1.toUpperCase();
    });
  }