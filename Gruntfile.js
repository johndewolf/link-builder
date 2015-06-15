module.exports = function(grunt) {

grunt.initConfig({
  connect: {
    server: {
      options: {
      	keepalive: true,
        port: 9001,
        base: '.',
        open: true
      }
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-connect');

};