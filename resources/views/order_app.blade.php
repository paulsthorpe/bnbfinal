<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>

        <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">
        <!-- <script src="js/util_scripts.js" type="text/javascript"></script> -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" charset="utf-8">
        <base href="/">
        <meta property="csrf-token" name="csrf-token" content="{{ csrf_token() }}">
        {{ Html::style('css/app.css') }}
        <!-- Load libraries -->
        <!-- IE required polyfills, in this exact order -->
        {{ Html::script('es6-shim/es6-shim.min.js') }}
        {{ Html::script('zone.js/dist/zone.js') }}
        {{ Html::script('reflect-metadata/Reflect.js') }}
        {{ Html::script('systemjs/dist/system.src.js') }}
        {{ Html::script('systemjs.config.js') }}
        {{ Html::script('angular2/bundles/angular2.dev.js') }}
        {{ Html::script('angular2/bundles/router.dev.js') }}
        {{ Html::script('angular2/bundles/http.dev.js') }}

    <script>
    System.config({
            "defaultJSExtensions": true,
            packages: {
                app: {
                    format: 'register',
                    defaultExtension: 'js'
                }
            }
        });
    System.import('js/boot')
                .then(null, console.error.bind(console));
    </script>

    </head>
    <body>

      <order-app>Loading...</order-app>

    </body>
</html>
