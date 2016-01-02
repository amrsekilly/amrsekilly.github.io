module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      production: {
        options: {
          cleancss: true,
          compress: true,
          relativeUrls: true,
        },
        files: {
          'css/bootstrap.css': 'bower_components/bootstrap/less/bootstrap.less',
        },
      },
    },
    cssmin: {
      target: {
        files: {
          'css/main.min.css': ['css/bootstrap.css', 'css/main.css'],
        },
      },
    },
    watch: {
      scripts: {
        files: ['less/main.less', 'less/mixins.less', 'css/bootstrap.css', 'bower_components/components-bootstrap/less/bootstrap.less'],
        tasks: ['less', 'cssmin'],
        options: {
          spawn: false,
        },
      },
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);
};
