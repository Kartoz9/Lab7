function findHexColor(text) {
    const hexColorPattern = /#([0-9A-Fa-f]{3}){1,2}\b/g;
    const matches = text.match(hexColorPattern);
  
    if (matches && matches.length > 0) {
      return matches;
    } else {
      return null;
    }
  }