'use strict';

var createFolderGlobs = require('./createFolderGlobs.js');

module.exports.tasks = {

    clean: {
        before:{
            src:['dist','temp']
        },
        after: {
            src:['temp']
        }
    },

    copy: {
        main: {
            files: [
                {src: ['img/**'], dest: 'dist/'},
                {src: ['bower_components/font-awesome/fonts/**'], dest: 'dist/',filter:'isFile',expand:true},
                {src: ['bower_components/bootstrap/fonts/**'], dest: 'dist/',filter:'isFile',expand:true}
                //{src: ['bower_components/angular-ui-utils/ui-utils-ieshiv.min.js'], dest: 'dist/'},
                //{src: ['bower_components/select2/*.png','bower_components/select2/*.gif'], dest:'dist/css/',flatten:true,expand:true},
                //{src: ['bower_components/angular-mocks/angular-mocks.js'], dest: 'dist/'}
            ]
        }
    },

    dom_munger:{
        read: {
            options: {
                read:[
                    {selector:'script[data-concat!="false"]',attribute:'src',writeto:'appjs'},
                    {selector:'link[rel="stylesheet"][data-concat!="false"]',attribute:'href',writeto:'appcss'}
                ]
            },
            src: 'index.html'
        },
        update: {
            options: {
                remove: ['script[data-remove!="false"]','link[data-remove!="false"]'],
                append: [
                    {selector:'body',html:'<script src="app.full.min.js"></script>'},
                    {selector:'head',html:'<link rel="stylesheet" href="app.full.min.css">'}
                ]
            },
            src:'index.html',
            dest: 'dist/index.html'
        }
    },

    ngAnnotate: {
        main: {
            src:'temp/app.full.js',
            dest: 'temp/app.full.js'
        }
    }

};
