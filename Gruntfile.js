module.exports = function(grunt) {
  grunt.initConfig({
    /**
     * Use connect middleware to set up a local web server
     */
    connect: {
      server: {
        options: {
          port: 1060,
          hostname: 'localhost',
          open: true
        }
      }
    },
    /**
     * Watch files for changes and refresh page with LiveReload
     */
    watch: {
      livereload: {
        options: { livereload: true },
        files: ['index.html']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['connect', 'watch']);
};