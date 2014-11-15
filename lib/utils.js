Utils = {

  /**
   * Log a meteor error to the console in a human-readable form.
   */
  logError: function(err) {
    if (err) return console.error(err.reason);
  }

};