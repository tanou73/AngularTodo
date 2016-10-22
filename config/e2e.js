'use strict';

module.exports.tasks = {

  webdriver: {
    options: {},
  },

  protractor: {
    options: {
      keepAlive: true,
      configFile: 'e2e/_conf.js'
    },
    run: {}
  }
};
