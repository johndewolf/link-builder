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
          open: true,
          livereload: {
            options: {
              middleware: function (connect) {
                var middlewares = [
                    //Enable CORS
                    connect().use(function (req, res, next) {
                      res.setHeader('Access-Control-Allow-Origin', '*');
                      res.setHeader('Access-Control-Allow-Methods', '*');
                      next();
                    })
                  ];
                return middlewares;
              }
            }
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.registerTask('default', ['wiredep']);
};
