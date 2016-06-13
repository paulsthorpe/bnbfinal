<!DOCTYPE html>
<html>
    <head>
        <title>BNB Orders for <?php echo date('M d Y'); ?></title>
        <link rel="stylesheet" href="/css/util_styles.css">
        <link rel="stylesheet" href="/css/app.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script type="text/javascript" src="/js/util_scripts.js"></script>
        <meta http-equiv="refresh" content="5" />

    </head>
    <body class="employee-order-screen">

      <section class="content-header" >
        <div class="order-page-logo">
          <img src="/images/logo.png" alt="" />
        </div>
        <h1>
          Orders For <?php echo date('M d Y'); ?>
        </h1>
      </section>
      <div class="well col-lg-8 col-lg-offset-2">
          <table class="table">
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Name</th>
                <th>Phone #</th>
                <th>Submitted At</th>
                <th>Completed At</th>
                <th>Total</th>
                <th style="width: 40px;">Actions</th>
              </tr>
            </thead>
            <tbody class="table-striped">
              @foreach($orders as $order)

              @if ($order->status === 1)
                <tr class="success">
              @else
                <tr class="danger">
              @endif
                <td>{{$order->id}}</td>
                <td>{{$order->name}}</td>
                <td>{{$order->phone}}</td>
                <td>{{Carbon\Carbon::parse($order->created_at)->format('h:i:s')}}</td>
                <td>
                  @if ($order->status === 1)
                    {{Carbon\Carbon::parse($order->updated_at)->format('h:i:s')}}
                  @else
                    INCOMPLETE
                  @endif
                </td>
                <td>$ {{($order->total/=100)}}</td>
                <td>
                  <a class='btn btn-primary btn-xs' href="/orderApp/{{$order->id}}">
                    View Details
                  </a>
                </td>
                <td>
                  <a class='btn btn-success btn-xs' href="/admin/orders/completed/{{$order->id}}" onclick="return confirm('Is order #finished and bagged?');">
                    Mark Complete
                  </a>
                </td>
              </tr>
              @endForEach

            </tbody>
          </table>
      </div>



    </body>
</html>
<script type="text/javascript">

    var pusher = new Pusher('3048f5b68c3db04dcc57', {
      encrypted: true
    });

    var channel = pusher.subscribe('test_channel');
    channel.bind('my_event', function() {
      alert(111);
    });
</script>
