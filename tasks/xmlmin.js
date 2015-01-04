/*
 * grunt-xmlmin
 * https://github.com/dtrunk90/grunt-xmlmin
 *
 * Copyright (c) 2013 Danny Trunk
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
    'use strict';

    var pd = require('pretty-data').pd,
        maxmin = require('maxmin');

    grunt.registerMultiTask('xmlmin', 'Minify XML', function() {
        var options = this.options({
			preserveComments: false
		});

        this.files.forEach(function (file) {
            var min,
                max = file.src.filter(function(filepath) {
                    // Warn on and remove invalid source files (if nonull was set).
                    if (!grunt.file.exists(filepath)) {
                        grunt.log.warn('Source file "' + filepath + '" not found.');
                        return false;
                    }

                    return true;
                })
                    .map(grunt.file.read)
                    .join(grunt.util.normalizelf(grunt.util.linefeed));

            try {
                min = pd.xmlmin(max, options.preserveComments);
            } catch (err) {
                grunt.warn(file.src + '\n' + err);
            }

            if (min.length < 1) {
                grunt.log.warn('Destination not written because minified XML was empty.');
            } else {
                grunt.file.write(file.dest, min);
                grunt.log.writeln('File "' + file.dest + '" created.');
                console.log(maxmin(max, min, false));
            }
        });
    });
};
