module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // load protractor runner
    grunt.loadNpmTasks('grunt-shell-spawn');
    grunt.loadNpmTasks('grunt-wait');
    grunt.loadNpmTasks('grunt-protractor-runner');

    var options = {
        pkg: require('./package.json')
    };

    // Load grunt configurations automatically
    var configs = require('load-grunt-configs')(grunt, options);

    // Define the configuration for all the tasks
    grunt.initConfig(configs);

    grunt.registerTask('build', [
        'jshint',
        'clean:before',
        'less',
        'dom_munger',
        'ngtemplates',
        'cssmin',
        'concat',
        'ngAnnotate',
        'copy',
        'htmlmin',
        'clean:after'
    ]);

    grunt.registerTask('serve', [
        'dom_munger:read',
        'jshint',
        'connect',
        'watch'
    ]);

    grunt.registerTask('test', [
        'dom_munger:read',
        'karma:phantom'
    ]);

    grunt.registerTask('e2e', [
        'shell:updateserver',
        'shell:startserver',
        'wait',
        'protractor',
        'shell:startserver:kill'
    ]);

    // WATCH HANDLING
    grunt.event.on('watch', function(action, filepath) {
        var tasksToRun = [];

        if (filepath.lastIndexOf('.js') !== -1 && filepath.lastIndexOf('.js') === filepath.length - 3) {

            //lint the changed js file
            grunt.config('jshint.main.src', filepath);
            tasksToRun.push('jshint');

            //find the appropriate unit test for the changed file
            var spec = filepath;
            if (filepath.lastIndexOf('.spec.js') === -1 || filepath.lastIndexOf('.spec.js') !== filepath.length - 8) {
                spec = filepath.substring(0, filepath.length - 3) + '.spec.js';
            }

            //if the spec exists then lets run it
            if (grunt.file.exists(spec)) {
                var files = [].concat(grunt.config('dom_munger.data.appjs'));
                files.push('bower_components/angular-mocks/angular-mocks.js');
                files.push(spec);
                grunt.config('karma.options.files', files);
                tasksToRun.push('karma:phantom');
            }
        }

        //if index.html changed, we need to reread the <script> tags so our next run of karma
        //will have the correct environment
        if (filepath === 'index.html') {
            tasksToRun.push('dom_munger:read');
        }

        grunt.config('watch.main.tasks', tasksToRun);
    });
};
