'use strict';

var createFolderGlobs = require('./createFolderGlobs.js');

module.exports.tasks = {

    watch: {
        main: {
            options: {
                livereload: true,
                livereloadOnError: false,
                spawn: false
            },
            files: [createFolderGlobs(['*.js','*.less','*.html']),'!_SpecRunner.html','!.grunt'],
            tasks: [] //all the tasks are run dynamically during the watch event handler
        }
    }

};
