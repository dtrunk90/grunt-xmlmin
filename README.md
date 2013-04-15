# grunt-xmlmin

> Minify XML

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-xmlmin --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-xmlmin');
```

## The "xmlmin" task

### Overview
In your project's Gruntfile, add a section named `xmlmin` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  xmlmin: {
    your_target: {
      // Target-specific file lists go here.
    },
  },
})
```

### Usage Example

```js
grunt.initConfig({
  xmlmin: {
    files: {
      'dest/books.xml': ['src/books.xml'],
    },
  },
});

grunt.registerTask('default', ['xmlmin']);
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

 * 2013-04-15   v0.1.0   Initial release.
