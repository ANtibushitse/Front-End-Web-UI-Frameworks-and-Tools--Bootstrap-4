"use strict";
const sass = require("node-sass");
module.exports = function (grunt) {
  // Time how long tasks take. Can help when optimizing build times
  require("time-grunt")(grunt);

  // Automatically load required Grunt tasks
  require("jit-grunt")(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          "css/styles.css": "css/styles.scss",
        },
      },
      options: {
        implementation: sass,
        sourceMap: true,
      },
    },
  });

  grunt.registerTask("css", ["sass"]);
};
