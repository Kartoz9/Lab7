function findDates(text) {
    const datePattern = /\d{4}-\d{2}-\d{2}/g; 
    const dates = text.match(datePattern);
  
    return dates || [];
  }