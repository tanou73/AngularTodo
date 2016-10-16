'use strict';

var createFolderGlobs = require('./createFolderGlobs.js');

module.exports.tasks = {

    karma: {
        options: {
            frameworks: ['jasmine'],
            files: [  //this files data is also updated in the watch handler, if updated change there too
                '<%= dom_munger.data.appjs %>',
                'bower_components/angular-mocks/angular-mocks.js',
                createFolderGlobs('*.spec.js')
            ],
            logLevel:'ERROR',
            reporters:['mocha'],
            autoWatch: false, //watching is handled by grunt-contrib-watch
            singleRun: true
        },
        phantom: {
            browsers: ['PhantomJS']
        },
        chrome: {
            browsers: ['Chrome']
        }
    }

};
