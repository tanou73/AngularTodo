'use strict';

var createFolderGlobs = require('./createFolderGlobs.js');

module.exports.tasks = {

    concat: {/**/
        main: {
            src: ['<%= dom_munger.data.appjs %>','<%= ngtemplates.main.dest %>'],
            dest: 'temp/app.full.js'
        }
    },

    uglify: {
        main: {
            src: 'temp/app.full.js',
            dest:'dist/app.full.min.js'
        }
    },

    htmlmin: {
        main: {
            options: {
                collapseBooleanAttributes: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                removeComments: true,
                removeEmptyAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true
            },
            files: {
                'dist/index.html': 'dist/index.html'
            }
        }
    }

};
