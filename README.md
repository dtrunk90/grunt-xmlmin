# grunt-xmlmin v0.1.3 [![Build Status: Linux](https://travis-ci.org/dtrunk90/grunt-xmlmin.svg?branch=master)](https://travis-ci.org/dtrunk90/grunt-xmlmin)

> Minify XML



## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-xmlmin --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-xmlmin');
```




## Xmlmin task
_Run this task with the `grunt xmlmin` command._

Minifies XML using [pretty-data](https://github.com/vkiryukhin/pretty-data). Bugs regarding the output should be reported [here](https://github.com/vkiryukhin/pretty-data/issues/new).

### Options

See the [pretty-data docs](http://www.eslinstructor.net/pretty-data/) for more in-depth explanation of the options and caveats.

#### preserveComments

Type: `Boolean`  
Default: `false`

Preserve XML comments.

#### Example

```javascript
grunt.initConfig({
    xmlmin: {                                            // Task
        dist: {                                          // Target
            options: {                                   // Target options
                preserveComments: true
            },
            files: {                                     // Dictionary of files
                'dist/books.xml': 'src/books.xml',       // 'destination': 'source'
            }
        }
    }
});

grunt.registerTask('default', ['xmlmin']);
```


## Release History

 * 2014-09-27   v0.1.3   Fixed CHANGELOG syntax and updated README.md
 * 2014-09-23   v0.1.2   Fixes Issue 1 Updated dependency versions
 * 2013-04-15   v0.1.1   Initial release.

---

Task submitted by [Danny Trunk](http://github.com/dtrunk90)

*This file was generated on Sun Jan 04 2015 22:54:35.*
