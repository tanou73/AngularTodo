'use strict';

var createFolderGlobs = require('./createFolderGlobs.js');

module.exports.tasks = {

    less: {
        production: {
            options: {
            },
            files: {
                'temp/app.css': 'app.less'
            }
        }
    },

    cssmin: {
        main: {
            src:['temp/app.css','<%= dom_munger.data.appcss %>'],
            dest:'dist/app.full.min.css'
        }
    }

};
