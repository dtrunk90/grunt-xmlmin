## Example

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
