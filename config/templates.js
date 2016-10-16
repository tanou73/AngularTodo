'use strict';

var createFolderGlobs = require('./createFolderGlobs.js');

module.exports.tasks = {

    ngtemplates: {
        main: {
            options: {
                module: '<%= pkg.name %>',
                htmlmin:'<%= htmlmin.main.options %>'
            },
            src: [createFolderGlobs('*.html'),'!index.html','!_SpecRunner.html'],
            dest: 'temp/templates.js'
        }
    }

};
