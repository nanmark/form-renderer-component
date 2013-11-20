// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
        'demo/bower_components/jquery/jquery.js',
        'demo/bower_components/angular/angular.js',
        'demo/bower_components/angular-resource/angular-resource.js',
        'demo/bower_components/angular-route/angular-route.js',
        'demo/bower_components/angular-mocks/angular-mocks.js',
        'demo/bower_components/tinymce/tinymce.min.js',
        'demo/bower_components/angular-ui-tinymce/src/tinymce.js',
        'demo/bower_components/lodash/dist/lodash.js',

        'demo/scripts/*.js',
        'demo/scripts/**/*.js',
        'test/mock/**/*.js',
        'test/spec/**/*.js',
        
        //template files for directives
        'demo/scripts/directives/partials/form/formGenerator.html',
        'demo/scripts/directives/partials/form/formSingleColumn.html',
        'demo/scripts/directives/partials/form/formTwoColumn.html'//,
        
        
        //'app/scripts/directives/partials/field/textfield.html'
    ],

        // generate js files from html templates to expose them during testing.
    preprocessors : {
      'demo/scripts/directives/partials/**/*.html': 'ng-html2js'
    },
    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8000,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
        //'Chrome',
        //'Firefox', 
        'IE'//,
      //  'Safari'
      
    ],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
