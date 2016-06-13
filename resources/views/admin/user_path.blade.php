<!DOCTYPE html>
<html lang="en">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
        <link rel="stylesheet" href="/css/app.css">
        <link href='http://fonts.googleapis.com/css?family=Lato:100,300,400,300italic' rel='stylesheet' type='text/css'>
        <title>Admin Portal</title>
    </head>
    <body>
      <div class="user_path_container">
        <div class="employee_log_in">
          <div class="container">
              <div class="row pull_login_down">
                <div class="col-md-6 col-md-offset-2">
                  <div class="panel panel-default" >
                    <div class="panel-heading" >
                      Admin Log In
                    </div>
                    <div class="panel-body">
                      <form action="/admin">
                          <fieldset>
                          <div class="form-group">
                            <input class="form-control" placeholder="User" name="user" type="text">
                        </div>
                        <div class="form-group">
                          <input class="form-control" placeholder="Password" name="password" type="password" value="">
                        </div>
                        <input class="btn btn-lg btn-danger btn-block" type="submit" value="Login">
                        </fieldset>
                      </form>
                      
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="admin_log_in">
          <div class="container">
              <div class="row pull_login_down">
                <div class="col-md-6 col-md-offset-2">

                <div class="panel panel-default" >
                  <div class="panel-heading" >
                    Employee Clock In
                  </div>
                  <div class="panel-body">
                    <form method="POST" action="/log_time">
                      <input type="hidden" name="_token" value="{{ csrf_token() }}">
                    <fieldset>
                      <div class="form-group">
                        <input class="form-control" placeholder="Employee Number" name="employee_id" type="text">
                      </div>
                      <input class="btn btn-lg btn-danger btn-block" type="submit" value="Clock In">
                    </fieldset>
                      </form>
                  </div>
              </div>

              </div>
            </div>
          </div>
        </div>
        <div class="order_system">
          <div class="container">
            <div class="row pull_login_down">
              <a href="/orderApp"><input class="btn btn-lg btn-danger btn-block" type="submit" value="Go To Order System" style="height:200px"></a>
            </div>
            </div>
          </div>
      </div>
    </body>
