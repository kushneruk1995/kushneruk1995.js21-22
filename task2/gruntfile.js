module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt); 
  grunt.initConfig({
  babel: {
    options: {
      sourceMap: false,
      presets: ['es2015']
    },
    dist: {
      files: [{
        expand: true,
        cwd: 'script/src',
        src: ['task.js'],
        dest: 'script/dist',
        ext: '.js',
        extDot: 'first'
      }]
    }
  }, 

  watch: {
    babel: {
      files: 'script/src/task.js',
      tasks: ['babel']
    },
  }
});

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['babel']);


};