'use strict';

module.exports = function (grunt) {
  var path = require('path');

  return {
    tasks: {
      wait: {
        options: {
            delay: 2000
        },
        pause: {
            options: {}
        }
      },
      shell: {
        updateserver: {
          options: {
            stdout: true
          },
          command: "node " + path.resolve('node_modules/protractor/bin/webdriver-manager') + ' update --standalone --chrome'
        },
        startserver: {
          options: {
            stdout:false,
            stdin: false,
            stderr: false,
            async:true
          },
          command:  'node ' + path.resolve('node_modules/protractor/bin/webdriver-manager') + ' start --standalone'
        },
      },

      protractor: {
        options: {
          keepAlive: true,
          configFile: 'e2e/_conf.js'
        },
        run: {}
      }
    }

  }
}

  // shell: {
  //   webdriverStart: {
  //     command: 'node_modules/protractor/node_modules/webdriver-manager/bin/webdriver-manager start',
  //     options: {
  //         async: true,
  //         stdout: true,
  //         stderr: true,
  //         failOnError: true
  //     }
  //   }
  // },
