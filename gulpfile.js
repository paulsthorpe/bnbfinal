var gulp = require("gulp");
var bower = require("gulp-bower");
var elixir = require("laravel-elixir");
var elixirTypscript = require('elixir-typescript');

gulp.task('bower', function () {
    return bower();
});

var vendors = '../../assets/vendors/';

var paths = {
    'jquery': vendors + 'jquery/dist',
    'jqueryUi': vendors + 'jquery-ui',
    'bootstrap': vendors + 'bootstrap/dist',
    'fontawesome': vendors + 'font-awesome',
    'tether' : vendors + 'tether/dist',
    'pusher' : vendors + 'pusher-websocket-iso/dist/web'
};


elixir(function (mix) {

    mix.copy('node_modules/@angular', 'public/@angular')
       .copy('node_modules/rxjs', 'public/rxjs')
       .copy('node_modules/systemjs', 'public/systemjs')
       .copy('node_modules/es6-promise', 'public/es6-promise')
       .copy('node_modules/es6-shim', 'public/es6-shim')
       .copy('node_modules/zone.js', 'public/zone.js')
       .copy('node_modules/satellizer', 'public/satellizer')
       .copy('node_modules/platform', 'public/platform')
       .copy('node_modules/reflect-metadata', 'public/reflect-metadata')
       .copy('resources/assets/vendors/jquery-ui/themes/base/images', 'public/images')
       .copy('resources/assets/vendors/c3/c3.min.css', 'public/css')
       .copy('resources/assets/vendors/c3/c3.min.js', 'public/js')
       .copy('resources/assets/vendors/d3/d3.min.js', 'public/js')
       .copy('resources/assets/vendors/font-awesome/fonts', 'public/fonts')
       .sass('app.scss')
       .scripts('scripts.js')
    //CSS Libraries
       .styles([paths.fontawesome + "/css/font-awesome.min.css",
        paths.jqueryUi + "/themes/base/core.css",
        paths.jqueryUi + "/themes/base/datepicker.css",
        paths.bootstrap + "/css/bootstrap.min.css"
        // paths.tether + '/css/tether.css',
    ], 'public/css/util_styles.css')


    //JS Libraries
       .scripts([paths.jquery + "/jquery.js",
        paths.jqueryUi + "/jquery-ui.min.js",
        paths.tether + '/js/tether.js',
        paths.bootstrap + "/js/bootstrap.min.js",
        paths.pusher + "/pusher.js"
    ], 'public/js/util_scripts.js');


    mix.typescript(
        '/**/*.ts',
        'public/js',
        {
            "target": "es5",
            "module": "system",
            "moduleResolution": "node",
            "sourceMap": true,
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "removeComments": false,
            "noImplicitAny": false
        }
    );

});
