<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>@yield('title')</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <!-- Bootstrap 3.3.6 -->
  <link rel="stylesheet" href="/css/bootstrap.min.css">
  <!-- Font Awesome -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.3/jquery.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">
  <!-- Ionicons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
  <link rel="stylesheet" href="/css/AdminLTE.css">


  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->
</head>
<body>



<div style="position:absolute; left:140px;">
<p align="left"><img src="http://i42.tinypic.com/2czorcz.png"></p>
</div>
<div style="position:absolute; left:490px;">
<br>
<br>
<br>
<p><strong>Please fill in the form below and if you see any questions with a (*) it MUST be filled in.</strong></p>
<p><strong>If at any point you would like help or support with your application the contact us.</strong></p>
<p><strong>Details on how to contact us can be found on our website.</strong></p>

</div>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<div class="container">
    <div class="row">
        <div class="col-md-4">
            <div class="list-group wizard-menu">
                <a class="list-group-item active step-1-menu" data-for=".step-1">
                    <h4 class="list-group-item-heading">1. Basic Details</h4>
                    <br>
                </a>
                <a href="#" class="list-group-item step-2-menu" data-for=".step-2">
                    <h4 class="list-group-item-heading">2. Your Details.</h4>
                    <br>
                </a>
                <a href="" class="list-group-item step-3-menu" data-for=".step-3">
                    <h4 class="list-group-item-heading">3. Previous Job Details.</h4>
                    <br>

               <a href="" class="list-group-item step-4-menu" data-for=".step-2">
                   <h4 class="list-group-item-heading">4. Send</h4>
                   <br>
               </a>
                </a>
            </div>
        </div>
        <div class="col-md-8">
<!--                Load content in-->
            <div class="well wizard-content">

            </div>
<!--                Content to load-->
            <div class="hide">
                <div class="step-1">
                    <div class="row">
                        <div class="col-md-12">
                            <!-- add attribute data-action="" and data-method="" with path to file and form-method to submit form -->
                            <form method="post" action="#" data-action="index.php">
                                <div class="form-group">
                                    <label for="inputEx1">Job Applying For</label>
                                    <input id="inputEx1" type="text" class="form-control" placeholder="Teacher" required>
                                </div>
                                <div class="form-group">
                                   <label for="inputEx1">Were you recommended by a member of staff and if so - who?</label>
                                   <input id="inputEx1" type="text" class="form-control" placeholder="Yes - Joe Blogs" required>
                               </div>
                               <div class="form-group">
                                   <label for="inputEx1">Have you ever applied for a position at CastleCare before If so when?</label>
                                   <input id="inputEx1" type="text" class="form-control" placeholder="No this is my first time." required>
                               </div>
                               <div class="form-group">
                                   <label for="inputEx1">How did you hear of this vacancy? (include date)</label>
                                   <input id="inputEx1" type="text" class="form-control" placeholder="Google" required>
                               </div>
                               <div class="form-group">
                                   <label for="inputEx1">Date of Birth</label>
                                   <input id="inputEx1" type="text" class="form-control" placeholder="20/05/1990" required>
                               </div>
                               <div class="form-group">
                                   <label for="inputEx1">Age</label>
                                   <input id="inputEx1" type="text" class="form-control" placeholder="23" required>
                               </div>
                               <div class="form-group">
                                   <label for="inputEx1">Current Address</label>
                                   <input id="inputEx1" type="text" class="form-control" placeholder="5 swane lane" required>
                               </div>
                               <div class="form-group">
                                   <label for="inputEx1">N.I Number (if known)</label>
                                   <input id="inputEx1" type="text" class="form-control" placeholder="" required>
                               </div>
                               <div class="form-group">
                                   <label for="inputEx1">ISA Registration Number</label>
                                   <input id="inputEx1" type="text" class="form-control" placeholder="" required>
                               </div>
                               <hr>
                               <p>The question below is for Teachers <strong>ONLY</strong>.</p>
                               <hr>
                               <div class="form-group">
                                   <label for="inputEx1">D of E Number</label>
                                   <input id="inputEx1" type="text" class="form-control" placeholder="" required>
                               </div>
                               <div class="control-group">
                                   <label class="control-label" for="radios">Do you hold a driving licence</label>
                               <div class="controls">
                                   <label class="radio inline" for="radios-0">
                                   <input name="radios" id="radios-0" type="radio" checked="checked" value="Yes">
                                   Yes
                                   </label>
                                    <label class="radio inline" for="radios-1">
                                   <input name="radios" id="radios-1" type="radio" value="No">
                                    No
      </label>
  </div>
</div>


                                <hr>
                                <div class="pull-right wizard-nav">
                                    <button type="submit" class="btn btn-primary wizard-next" data-current-step="1">Next step</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="step-2">
                    <div class="row">
                        <div class="col-md-12">
                            <!-- add attribute data-action="" and data-method="" with path to file and form-method to submit form -->
                            <form method="post" action="#" data-action="path/to/action.php" data-method="POST">
                                <div class="form-group">
                                    <label for="inputEx1">Are you a Mr/Mrs/Ms/Miss</label>
                                    <input id="inputEx1" type="text" class="form-control" placeholder="Mr" required>
                                </div>
                                <div class="form-group">
                                    <label for="inputEx2">First Name</label>
                                    <input id="inputEx2" type="password" class="form-control" placeholder="Dean" required>
                                </div>
                                <div class="form-group">
                                   <label for="inputEx1">Last Name</label>
                                   <input id="inputEx1" type="text" class="form-control" placeholder="Sharp" required>
                               </div>
                               <div class="form-group">
                                   <label for="inputEx1">Maiden Name</label>
                                   <input id="inputEx1" type="text" class="form-control" placeholder="Gordan" required>
                               </div>
                               <div class="form-group">
                                   <label for="inputEx1">Marital Status</label>
                                   <input id="inputEx1" type="text" class="form-control" placeholder="Single" required>
                               </div>
                               <div class="form-group">
                                   <label for="inputEx1">Do you go by any other names?</label>
                                   <input id="inputEx1" type="text" class="form-control" placeholder="Dee" required>
                               </div>
                               <div class="form-group">
                                   <label for="inputEx1">Home Number</label>
                                   <input id="inputEx1" type="text" class="form-control" placeholder="01536 506295" required>
                               </div>
                               <div class="form-group">
                                   <label for="inputEx1">Mobie Number</label>
                                   <input id="inputEx1" type="text" class="form-control" placeholder="07985633386" required>
                               </div>
                               <div class="form-group">
                                   <label for="inputEx1">Work Number</label>
                                   <input id="inputEx1" type="text" class="form-control" placeholder="01536 832395" required>
                               </div>
                               <div class="form-group">
                                   <label for="inputEx1">Email Address</label>
                                   <input id="inputEx1" type="text" class="form-control" placeholder="DeeSharp@gmail.com" required>
                               </div>
                                <hr>
                                <div class="pull-right wizard-nav">
                                    <!-- data-current-step is for going back and forward in wizard -->
                                    <a class="btn btn-default wizard-prev" data-current-step="2">Previous step</a>
                                    <button type="submit" class="btn btn-primary wizard-next" data-current-step="2">Next step!</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
               <div class="step-3">
                   <div class="row">
                       <div class="col-md-12">
                           <!-- add attribute data-action="" and data-method="" with path to file and form-method to submit form -->
                           <form method="post" action="#" data-action="index.php">
                               <div class="form-group">
                                   <label for="inputEx1">Current/Last Employer</label>
                                   <input id="inputEx1" type="text" class="form-control" placeholder="E-Mail" required>
                               </div>
                               <div class="form-group">
                                   <label for="inputEx1">Nature of Employment</label>
                                   <input id="inputEx1" type="text" class="form-control" placeholder="E-Mail" required>
                               </div>
                               <div class="form-group">
                                   <label for="inputEx1">Current or Last Salary</label>
                                   <input id="inputEx1" type="text" class="form-control" placeholder="E-Mail" required>
                               </div>
                               <div class="form-group">
                                   <label for="inputEx1">Notice Required from Current Employer (if still working)</label>
                                   <input id="inputEx1" type="text" class="form-control" placeholder="E-Mail" required>
                               </div>
                               <hr>
                               <div class="pull-right wizard-nav">
                                   <a class="btn btn-default wizard-prev" data-current-step="3">Previous step</a>
                                   <button type="submit" class="btn btn-primary wizard-next" data-current-step="3">Next step!</button>
                               </div>
                           </form>
                       </div>
                   </div>
               </div>
                <div class="step-4">
                   <div class="row">
                       <div class="col-md-12">
                           <!-- add attribute data-action="" and data-method="" with path to file and form-method to submit form -->
                           <form method="post" action="#" data-action="path/to/action.php" data-method="POST">
                               <div class="form-group">
<strong> Thanks for filling out our form. If you would like any questions answered then please contact us using the details below.</strong>
<hr>
<strong>When you are ready to submit your application please press the 'Finish' button below!</strong>
<hr>
<strong>Recruitment@castlehomes.co.uk & 01536 711111</strong>
                               <div class="pull-right wizard-nav">
                                   <!-- data-current-step is for going back and forward in wizard -->
                                   <a class="btn btn-default wizard-prev" data-current-step="4">Previous step</a>
                                   <button type="submit" class="btn btn-success wizard-fin" data-current-step="4">Finish</button>
                               </div>
                           </form>
                       </div>
                   </div>
               </div>
                <div class="step-3" data-load=""></div>
            </div>
        </div>
    </div>
</div>
</body>
</html>

<style>

/*Wizard*/
.list-group-item.success,
.list-group-item.success:hover,
.list-group-item.success:focus {
    background-color: #1aba7b;
    border-color: #7aba7b;
    color: #ffffff;
}

.list-group-item.success > h4 {
    color: #ffffff;
}

.list-group-item.error,
.list-group-item.error:hover,
.list-group-item.error:focus {
    background-color: #d59392;
    border-color: #d59392;
    color: #ffffff;
}

.list-group-item.error > h4 {
    color: #ffffff;
}

.btn3d {
    transition:all .08s linear;
    position:relative;
    outline:medium none;
    -moz-outline-style:none;
    border:0px;
    margin-right:10px;
    margin-top:15px;
}
.btn3d:focus {
    outline:medium none;
    -moz-outline-style:none;
}
.btn3d:active {
    top:9px;
}
.btn-default {
    box-shadow:0 0 0 1px #ebebeb inset, 0 0 0 2px rgba(255,255,255,0.15) inset, 0 8px 0 0 #adadad, 0 8px 0 1px rgba(0,0,0,0.4), 0 8px 8px 1px rgba(0,0,0,0.5);
    background-color:#fff;
}
.btn-primary {
    box-shadow:0 0 0 1px #428bca inset, 0 0 0 2px rgba(255,255,255,0.15) inset, 0 8px 0 0 #357ebd, 0 8px 0 1px rgba(0,0,0,0.4), 0 8px 8px 1px rgba(0,0,0,0.5);
    background-color:#428bca;
}
 .btn-success {
    box-shadow:0 0 0 1px #5cb85c inset, 0 0 0 2px rgba(255,255,255,0.15) inset, 0 8px 0 0 #4cae4c, 0 8px 0 1px rgba(0,0,0,0.4), 0 8px 8px 1px rgba(0,0,0,0.5);
    background-color:#5cb85c;
}
 .btn-info {
    box-shadow:0 0 0 1px #5bc0de inset, 0 0 0 2px rgba(255,255,255,0.15) inset, 0 8px 0 0 #46b8da, 0 8px 0 1px rgba(0,0,0,0.4), 0 8px 8px 1px rgba(0,0,0,0.5);
    background-color:#5bc0de;
}
.btn-warning {
    box-shadow:0 0 0 1px #f0ad4e inset, 0 0 0 2px rgba(255,255,255,0.15) inset, 0 8px 0 0 #eea236, 0 8px 0 1px rgba(0,0,0,0.4), 0 8px 8px 1px rgba(0,0,0,0.5);
    background-color:#f0ad4e;
}
.btn-danger {
    box-shadow:0 0 0 1px #c63702 inset, 0 0 0 2px rgba(255,255,255,0.15) inset, 0 8px 0 0 #C24032, 0 8px 0 1px rgba(0,0,0,0.4), 0 8px 8px 1px rgba(0,0,0,0.5);
    background-color:#c63702;
}

</style>

<script type="text/javascript">

$(document).ready(function() {
    loadDataOnReady();
    loadDataOnClick();
    changeSteps();
    nextStep();
    finishWizard(function() {
        //ON FINISH EVENT
    });
});


function finishWizard(onFinish) {
    var wizardContent = $('.wizard-content');
    var wizardButtons = $('.wizard-menu .list-group-item');
    var currForm = $('.wizard-content form');

    //Use document.body for dynamically loaded content listening
    $(document.body).on('click', '.wizard-fin', function(event) {
        var finButton = $(this);
        event.preventDefault();
        var currStep = parseInt($(this).attr('data-current-step'));
        //Get previous elements
        var nextStep = $('.step-' + (currStep + 1));
        var nextMenu = $('.step-' + (currStep + 1) + '-menu');
        var thisMenu = $('.step-' + currStep + '-menu');
        var thisStep = $('.step-' + currStep);

        //Update menu
        wizardButtons.removeClass('active');
        nextMenu.addClass('active');

        //Update button
        finButton.html('<img src="http://upload.wikimedia.org/wikipedia/commons/4/42/Loading.gif"> Please wait...');
        finButton.addClass('disabled');

        //AJAX SUBMIT FORM
        var getMethod = currForm.attr('data-method');
        var getAction = currForm.attr('data-action');

        $.ajax({
            url: getAction,
            type: getMethod,
            data: currForm.serialize(),
            success: function() {
                //AJAX success
                wizardContent.prepend('<div class="alert alert-success">Sending Application....<strong> Please do not close the page till this messaged has gone</strong></div>');

                thisMenu.addClass('success');

                //Update button
                finButton.html('Finish');
                finButton.removeClass('disabled');

                window.setTimeout(function() {
                    //UI
                    $('.alert').hide();

                    //FINISHED WIZARD
                    //FUNCTION HERE
                    onFinish();

                },5000);
            },

            error: function() {
                //Ajax failure
                wizardContent.prepend('<div class="alert alert-danger"><strong>Something went wrong!</strong> Please try again.</div>');
                thisMenu.addClass('error');
                window.setTimeout(function() {
                    //Get "data-for" attribute and find element
                    var dataLoad = thisStep.attr('data-load');

                    //UI
                    $('.alert').hide();
                    thisMenu.removeClass('error');
                    thisMenu.addClass('active');

                    //Update button
                    finButton.html('Finish');
                    finButton.removeClass('disabled');

                    //        Check if attribute does exist
                    //        If true then load ajax, else load from div
                    if (typeof dataLoad !== 'undefined' && dataLoad !== false)
                    {
                        //Load content ajax
                        wizardContent.load(dataLoad);
                    }
                    else
                    {
                        wizardContent.html(currStep.html());
                    }
                },2000);
            }
        });

    });
}


function nextStep() {
    var wizardContent = $('.wizard-content');
    var wizardButtons = $('.wizard-menu .list-group-item');
    var currForm = $('.wizard-content form');

    //Use document.body for dynamically loaded content listening
    $(document.body).on('click', '.wizard-next', function(event) {
        var prevButton = $(this);
        event.preventDefault();
        var currStep = parseInt($(this).attr('data-current-step'));
        //Get previous elements
        var nextStep = $('.step-' + (currStep + 1));
        var nextMenu = $('.step-' + (currStep + 1) + '-menu');
        var thisMenu = $('.step-' + currStep + '-menu');
        var thisStep = $('.step-' + currStep);
        //Update menu
        wizardButtons.removeClass('active');
        nextMenu.addClass('active');

        //Update button
        prevButton.html('<img src="http://upload.wikimedia.org/wikipedia/commons/4/42/Loading.gif"> Please wait...');
        prevButton.addClass('disabled');

        //AJAX SUBMIT FORM
        var getMethod = currForm.attr('data-method');
        var getAction = currForm.attr('data-action');

        $.ajax({
            url: getAction,
            type: getMethod,
            data: currForm.serialize(),
            success: function() {
                //AJAX success
                wizardContent.prepend('<div class="alert alert-success"><strong>That was successful!</strong> Please wait for the next step.</div>');

                thisMenu.addClass('success');

                //Update button
                prevButton.html('Next step');
                prevButton.removeClass('disabled');

                window.setTimeout(function() {
                    //Get "data-for" attribute and find element
                    var dataLoad = thisStep.attr('data-load');

                    //UI
                    $('.alert').hide();

                    //        Check if attribute does exist
                    //        If true then load ajax, else load from div
                    if (typeof dataLoad !== 'undefined' && dataLoad !== false)
                    {
                        //Load content ajax
                        wizardContent.load(dataLoad);
                    }
                    else
                    {
                        wizardContent.html(nextStep.html());
                    }
                },500);
            },
            error: function() {
                //Ajax failure
                wizardContent.prepend('<div class="alert alert-danger"><strong>Something went wrong!</strong> Please try again.</div>');
                thisMenu.addClass('error');
                window.setTimeout(function() {
                    //Get "data-for" attribute and find element
                    var dataLoad = thisStep.attr('data-load');

                    //UI
                    $('.alert').hide();
                    thisMenu.removeClass('error');
                    thisMenu.addClass('active');

                    //Update button
                    prevButton.html('Next step');
                    prevButton.removeClass('disabled');

                    //        Check if attribute does exist
                    //        If true then load ajax, else load from div
                    if (typeof dataLoad !== 'undefined' && dataLoad !== false)
                    {
                        //Load content ajax
                        wizardContent.load(dataLoad);
                    }
                    else
                    {
                        wizardContent.html(currStep.html());
                    }
                },2000);
            }
        });

    });
}


function changeSteps() {
    var wizardContent = $('.wizard-content');
    var wizardButtons = $('.wizard-menu .list-group-item');

    //Use document.body for dynamically loaded content listening
    $(document.body).on('click', '.wizard-prev', function(event) {
        event.preventDefault();
        var currStep = parseInt($(this).attr('data-current-step'));

        //Get previous elements
        var prevStep = $('.step-' + (currStep - 1));
        var prevMenu = $('.step-' + (currStep - 1) + '-menu');

        //Update menu
        wizardButtons.removeClass('active');
        prevMenu.addClass('active');
        prevMenu.removeClass('success');

        //Get "data-for" attribute and find element

        var dataLoad = prevStep.attr('data-load');

//        Check if attribute does exist
//        If true then load ajax, else load from div
        if (typeof dataLoad !== 'undefined' && dataLoad !== false)
        {
            //Load content ajax
            wizardContent.load(dataLoad);
        }
        else
        {
            wizardContent.html(prevStep.html());
        }
    });
}

function loadDataOnReady()
{
    var wizardContent = $('.wizard-content');
    //Get "data-for" attribute and find element
    var dataFor = $('.wizard-menu .list-group-item.active').attr('data-for');
    var elementFor = $(dataFor);

    var dataLoad = elementFor.attr('data-load');

    //Check if attribute does exist
    //If true then load ajax, else load from div
    if (typeof dataLoad !== 'undefined' && dataLoad !== false)
    {
        //Load content ajax
        wizardContent.load(dataLoad);
    }
    else
    {
        wizardContent.html(elementFor.html());
    }
}

function loadDataOnClick()
{
    var wizardButtons = $('.wizard-menu .list-group-item');
    var wizardContent = $('.wizard-content');

    wizardButtons.on('click', function(event) {
        event.preventDefault();
        //Change active state
        wizardButtons.removeClass('active');
        $(this).addClass('active');


        //Get "data-for" attribute and find element
        var dataFor = $(this).attr('data-for');
        var elementFor = $(dataFor);

        var dataLoad = elementFor.attr('data-load');

//        Check if attribute does exist
//        If true then load ajax, else load from div
        if (typeof dataLoad !== 'undefined' && dataLoad !== false)
        {
            //Load content ajax
            wizardContent.load(dataLoad);
        }
        else
        {
            wizardContent.html(elementFor.html());
        }
    });
}


</script>

<!--
.container {
    margin-top: 1%;
}

/*Wizard*/
.list-group-item.success,
.list-group-item.success:hover,
.list-group-item.success:focus {
    background-color: #1aba7b;
    border-color: #7aba7b;
    color: #ffffff;
}

.list-group-item.success > h4 {
    color: #ffffff;
}

.list-group-item.error,
.list-group-item.error:hover,
.list-group-item.error:focus {
    background-color: #d59392;
    border-color: #d59392;
    color: #ffffff;
}

.list-group-item.error > h4 {
    color: #ffffff;
}

.btn3d {
    transition:all .08s linear;
    position:relative;
    outline:medium none;
    -moz-outline-style:none;
    border:0px;
    margin-right:10px;
    margin-top:15px;
}
.btn3d:focus {
    outline:medium none;
    -moz-outline-style:none;
}
.btn3d:active {
    top:9px;
}
.btn-default {
    box-shadow:0 0 0 1px #ebebeb inset, 0 0 0 2px rgba(255,255,255,0.15) inset, 0 8px 0 0 #adadad, 0 8px 0 1px rgba(0,0,0,0.4), 0 8px 8px 1px rgba(0,0,0,0.5);
    background-color:#fff;
}
.btn-primary {
    box-shadow:0 0 0 1px #428bca inset, 0 0 0 2px rgba(255,255,255,0.15) inset, 0 8px 0 0 #357ebd, 0 8px 0 1px rgba(0,0,0,0.4), 0 8px 8px 1px rgba(0,0,0,0.5);
    background-color:#428bca;
}
 .btn-success {
    box-shadow:0 0 0 1px #5cb85c inset, 0 0 0 2px rgba(255,255,255,0.15) inset, 0 8px 0 0 #4cae4c, 0 8px 0 1px rgba(0,0,0,0.4), 0 8px 8px 1px rgba(0,0,0,0.5);
    background-color:#5cb85c;
}
 .btn-info {
    box-shadow:0 0 0 1px #5bc0de inset, 0 0 0 2px rgba(255,255,255,0.15) inset, 0 8px 0 0 #46b8da, 0 8px 0 1px rgba(0,0,0,0.4), 0 8px 8px 1px rgba(0,0,0,0.5);
    background-color:#5bc0de;
}
.btn-warning {
    box-shadow:0 0 0 1px #f0ad4e inset, 0 0 0 2px rgba(255,255,255,0.15) inset, 0 8px 0 0 #eea236, 0 8px 0 1px rgba(0,0,0,0.4), 0 8px 8px 1px rgba(0,0,0,0.5);
    background-color:#f0ad4e;
}
.btn-danger {
    box-shadow:0 0 0 1px #c63702 inset, 0 0 0 2px rgba(255,255,255,0.15) inset, 0 8px 0 0 #C24032, 0 8px 0 1px rgba(0,0,0,0.4), 0 8px 8px 1px rgba(0,0,0,0.5);
    background-color:#c63702;
}


/**
 * Created by: Alexander Mahrt
 * Date: 20.11.13
 * Time: 03:00
 */

$(document).ready(function() {
    loadDataOnReady();
    loadDataOnClick();
    changeSteps();
    nextStep();
    finishWizard(function() {
        //ON FINISH EVENT
    });
});


function finishWizard(onFinish) {
    var wizardContent = $('.wizard-content');
    var wizardButtons = $('.wizard-menu .list-group-item');
    var currForm = $('.wizard-content form');

    //Use document.body for dynamically loaded content listening
    $(document.body).on('click', '.wizard-fin', function(event) {
        var finButton = $(this);
        event.preventDefault();
        var currStep = parseInt($(this).attr('data-current-step'));
        //Get previous elements
        var nextStep = $('.step-' + (currStep + 1));
        var nextMenu = $('.step-' + (currStep + 1) + '-menu');
        var thisMenu = $('.step-' + currStep + '-menu');
        var thisStep = $('.step-' + currStep);

        //Update menu
        wizardButtons.removeClass('active');
        nextMenu.addClass('active');

        //Update button
        finButton.html('<img src="http://upload.wikimedia.org/wikipedia/commons/4/42/Loading.gif"> Please wait...');
        finButton.addClass('disabled');

        //AJAX SUBMIT FORM
        var getMethod = currForm.attr('data-method');
        var getAction = currForm.attr('data-action');

        $.ajax({
            url: getAction,
            type: getMethod,
            data: currForm.serialize(),
            success: function() {
                //AJAX success
                wizardContent.prepend('<div class="alert alert-success">Sending Application....<strong> Please do not close the page till this messaged has gone</strong></div>');

                thisMenu.addClass('success');

                //Update button
                finButton.html('Finish');
                finButton.removeClass('disabled');

                window.setTimeout(function() {
                    //UI
                    $('.alert').hide();

                    //FINISHED WIZARD
                    //FUNCTION HERE
                    onFinish();

                },5000);
            },

            error: function() {
                //Ajax failure
                wizardContent.prepend('<div class="alert alert-danger"><strong>Something went wrong!</strong> Please try again.</div>');
                thisMenu.addClass('error');
                window.setTimeout(function() {
                    //Get "data-for" attribute and find element
                    var dataLoad = thisStep.attr('data-load');

                    //UI
                    $('.alert').hide();
                    thisMenu.removeClass('error');
                    thisMenu.addClass('active');

                    //Update button
                    finButton.html('Finish');
                    finButton.removeClass('disabled');

                    //        Check if attribute does exist
                    //        If true then load ajax, else load from div
                    if (typeof dataLoad !== 'undefined' && dataLoad !== false)
                    {
                        //Load content ajax
                        wizardContent.load(dataLoad);
                    }
                    else
                    {
                        wizardContent.html(currStep.html());
                    }
                },2000);
            }
        });

    });
}


function nextStep() {
    var wizardContent = $('.wizard-content');
    var wizardButtons = $('.wizard-menu .list-group-item');
    var currForm = $('.wizard-content form');

    //Use document.body for dynamically loaded content listening
    $(document.body).on('click', '.wizard-next', function(event) {
        var prevButton = $(this);
        event.preventDefault();
        var currStep = parseInt($(this).attr('data-current-step'));
        //Get previous elements
        var nextStep = $('.step-' + (currStep + 1));
        var nextMenu = $('.step-' + (currStep + 1) + '-menu');
        var thisMenu = $('.step-' + currStep + '-menu');
        var thisStep = $('.step-' + currStep);
        //Update menu
        wizardButtons.removeClass('active');
        nextMenu.addClass('active');

        //Update button
        prevButton.html('<img src="http://upload.wikimedia.org/wikipedia/commons/4/42/Loading.gif"> Please wait...');
        prevButton.addClass('disabled');

        //AJAX SUBMIT FORM
        var getMethod = currForm.attr('data-method');
        var getAction = currForm.attr('data-action');

        $.ajax({
            url: getAction,
            type: getMethod,
            data: currForm.serialize(),
            success: function() {
                //AJAX success
                wizardContent.prepend('<div class="alert alert-success"><strong>That was successful!</strong> Please wait for the next step.</div>');

                thisMenu.addClass('success');

                //Update button
                prevButton.html('Next step');
                prevButton.removeClass('disabled');

                window.setTimeout(function() {
                    //Get "data-for" attribute and find element
                    var dataLoad = thisStep.attr('data-load');

                    //UI
                    $('.alert').hide();

                    //        Check if attribute does exist
                    //        If true then load ajax, else load from div
                    if (typeof dataLoad !== 'undefined' && dataLoad !== false)
                    {
                        //Load content ajax
                        wizardContent.load(dataLoad);
                    }
                    else
                    {
                        wizardContent.html(nextStep.html());
                    }
                },500);
            },
            error: function() {
                //Ajax failure
                wizardContent.prepend('<div class="alert alert-danger"><strong>Something went wrong!</strong> Please try again.</div>');
                thisMenu.addClass('error');
                window.setTimeout(function() {
                    //Get "data-for" attribute and find element
                    var dataLoad = thisStep.attr('data-load');

                    //UI
                    $('.alert').hide();
                    thisMenu.removeClass('error');
                    thisMenu.addClass('active');

                    //Update button
                    prevButton.html('Next step');
                    prevButton.removeClass('disabled');

                    //        Check if attribute does exist
                    //        If true then load ajax, else load from div
                    if (typeof dataLoad !== 'undefined' && dataLoad !== false)
                    {
                        //Load content ajax
                        wizardContent.load(dataLoad);
                    }
                    else
                    {
                        wizardContent.html(currStep.html());
                    }
                },2000);
            }
        });

    });
}


function changeSteps() {
    var wizardContent = $('.wizard-content');
    var wizardButtons = $('.wizard-menu .list-group-item');

    //Use document.body for dynamically loaded content listening
    $(document.body).on('click', '.wizard-prev', function(event) {
        event.preventDefault();
        var currStep = parseInt($(this).attr('data-current-step'));

        //Get previous elements
        var prevStep = $('.step-' + (currStep - 1));
        var prevMenu = $('.step-' + (currStep - 1) + '-menu');

        //Update menu
        wizardButtons.removeClass('active');
        prevMenu.addClass('active');
        prevMenu.removeClass('success');

        //Get "data-for" attribute and find element

        var dataLoad = prevStep.attr('data-load');

//        Check if attribute does exist
//        If true then load ajax, else load from div
        if (typeof dataLoad !== 'undefined' && dataLoad !== false)
        {
            //Load content ajax
            wizardContent.load(dataLoad);
        }
        else
        {
            wizardContent.html(prevStep.html());
        }
    });
}

function loadDataOnReady()
{
    var wizardContent = $('.wizard-content');
    //Get "data-for" attribute and find element
    var dataFor = $('.wizard-menu .list-group-item.active').attr('data-for');
    var elementFor = $(dataFor);

    var dataLoad = elementFor.attr('data-load');

    //Check if attribute does exist
    //If true then load ajax, else load from div
    if (typeof dataLoad !== 'undefined' && dataLoad !== false)
    {
        //Load content ajax
        wizardContent.load(dataLoad);
    }
    else
    {
        wizardContent.html(elementFor.html());
    }
}

function loadDataOnClick()
{
    var wizardButtons = $('.wizard-menu .list-group-item');
    var wizardContent = $('.wizard-content');

    wizardButtons.on('click', function(event) {
        event.preventDefault();
        //Change active state
        wizardButtons.removeClass('active');
        $(this).addClass('active');


        //Get "data-for" attribute and find element
        var dataFor = $(this).attr('data-for');
        var elementFor = $(dataFor);

        var dataLoad = elementFor.attr('data-load');

//        Check if attribute does exist
//        If true then load ajax, else load from div
        if (typeof dataLoad !== 'undefined' && dataLoad !== false)
        {
            //Load content ajax
            wizardContent.load(dataLoad);
        }
        else
        {
            wizardContent.html(elementFor.html());
        }
    });
}


















 -->
