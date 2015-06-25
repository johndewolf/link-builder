module.exports = function(grunt) {
  // Load grunt tasks automatically

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist'
  };

  grunt.initConfig({
    wiredep: {
      task: {
        src: ['app/index.html']
      }
    },

    connect: {
      server: {
        options: {
        	keepalive: true,
          port: 9001,
          base: 'app',
          open: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.registerTask('default', ['wiredep']);
};