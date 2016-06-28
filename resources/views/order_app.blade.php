<!DOCTYPE html>
<html>
    <head>
        <title>Order Best-N-Burgers!</title>

        <link href="https://fonts.googleapis.com/css?family=Lato:100,400" rel="stylesheet" type="text/css">
        <!-- <link rel="stylesheet" href="/css/util_styles.css"> -->
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



    </head>
    <body>

      <order-app>
        <div class="loader">
          <i class="fa fa-spinner fa-pulse"></i>
          <p class="loading">
            <span>L</span>
            <span>o</span>
            <span>a</span>
            <span>d</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </p>
        </div>

      </order-app>

    </body>
    <style media="screen">
      body {
        background-color: red;
      }
      .loader {
        position: absolute;
        top: 45%;
        left: 45%;
        text-align: center;
      }
      .fa-spinner{
        font-size: 6em;
        margin-bottom: 30px;
        color: white;
      }
      .loading {
        font-family: 'Lato', sans-serif;
        font-size: 2em;
        color: white;
      }
      .loading span {
        opacity: 0;
        transition: all .05s;
      }
      .loading span:nth-child(1) {
        transition-delay: 0.08s;
      }
      .loading span:nth-child(2) {
        transition-delay: 0.16s;
      }
      .loading span:nth-child(3) {
        transition-delay: 0.24s;
      }
      .loading span:nth-child(4) {
        transition-delay: 0.32s;
      }
      .loading span:nth-child(5) {
        transition-delay: 0.4s;
      }
      .loading span:nth-child(6) {
        transition-delay: 0.48s;
      }
      .loading span:nth-child(7) {
        transition-delay: 0.56s;
      }
      .loading span:nth-child(8) {
        transition-delay: 0.64s;
      }
      .loading span:nth-child(9) {
        transition-delay: 0.72s;
      }
      .loading span:nth-child(10) {
        transition-delay: 0.80s;
      }
      .loading span:nth-child(11) {
        transition-delay: .88s;
      }
      .loading.active span {
        opacity: 1;
      }




    </style>
</html>
<script>

$(document).ready(function(){
  $('.loading').addClass('active');
});

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
