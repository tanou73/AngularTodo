'use strict';

var createFolderGlobs = require('./createFolderGlobs.js');

module.exports.tasks = {

    jshint: {
        main: {
            options: {
                jshintrc: '.jshintrc'
            },
            src: createFolderGlobs('todoList/**/*.js')
        }
    }

};
