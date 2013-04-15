/*global module */

/*
 * grunt-xmlmin
 * https://github.com/dtrunk90/grunt-xmlmin
 *
 * Copyright (c) 2013 Danny Trunk
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        clean: {
            tests: ['tmp']
        },
        xmlmin: {
            compile: {
                files: {
                    'tmp/test.xml': ['test/fixtures/test.xml']
                }
            },
            multiple: {
                files: {
                    'tmp/multiple.xml': ['test/fixtures/multiple*.xml']
                }
            },
            empty: {
                files: {
                    'tmp/idontexist.xml': ['test/fixtures/idontexist.xml']
                }
            }
        },
        nodeunit: {
            tests: ['test/*_test.js']
        }
    });

    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-internal');

    grunt.registerTask('test', ['clean', 'xmlmin', 'nodeunit']);
    grunt.registerTask('default', ['jshint', 'test', 'build-contrib']);
};
