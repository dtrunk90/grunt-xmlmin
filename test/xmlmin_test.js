/*global require, exports */

var grunt = require('grunt');

exports.xmlmin = {
    compile: function (test) {
        'use strict';

        test.expect(1);

        var actual = grunt.file.read('tmp/test.xml'),
            expected = grunt.file.read('test/expected/test.xml');
        test.equal(actual, expected, 'should minify XML');

        test.done();
    },
    multiple: function (test) {
        'use strict';

        test.expect(1);

        var actual = grunt.file.read('tmp/multiple.xml'),
            expected = grunt.file.read('test/expected/test.xml');
        test.equal(actual, expected, 'should minify multiple XML files');

        test.done();
    },
    empty: function (test) {
        'use strict';

        test.expect(1);

        test.ok(!grunt.file.exists('tmp/idontexist.xml'), 'Empty minified file should not exist');

        test.done();
    }
};
