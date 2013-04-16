## Example

```javascript
grunt.initConfig({
    xmlmin: {                                            // Task
        dist: {                                          // Target
            options: {                                   // Target options
                preserveComments: true
            },
            files: {                                     // Dictionary of files
                'dist/index.html': 'src/index.html',     // 'destination': 'source'
                'dist/contact.html': 'src/contact.html'
            }
        },
        dev: {                                           // Another target
            files: {
                'dist/index.html': 'src/index.html',
                'dist/contact.html': 'src/contact.html'
            }
        }
    }
});

grunt.registerTask('default', ['htmlmin']);
```
