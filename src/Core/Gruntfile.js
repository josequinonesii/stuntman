'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        css_selectors: {
            options: {
                mutations: [
                    { search: /\.pure/g, replace: '.stuntman' },
                    { search: /"pure-u"/g, replace: '"stuntman-u"' }
                ]
            },
            default: {
                files: {
                    'resources/stuntman.pure.css': ['assets/pure/pure.css'],
                }
            }
        },
        less: {
            default: {
                files: {
                    "resources/stuntman.css": "assets/stuntman/stuntman.less"
                }
            }
        },
        watch: {
            styles: {
                files: ['assets/stuntman/*.less'],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-css-selectors');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['css_selectors', 'less']);
};
