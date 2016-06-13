<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>
        <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="/css/util_styles.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" charset="utf-8">
        <script type="text/javascript" src="/js/util_scripts.js"></script>


    </head>
    <body>

      <section class="content-header">
        <h1>Order ID: {{$order->id}}</h1>
          <br><br>
        <h1>Order Name: {{$order->name}}
          <br><br>
        <h1>  Submitted On: {{Carbon\Carbon::parse($order->created_at)->format('m-d-Y')}} at:
          {{Carbon\Carbon::parse($order->created_at)->format('h:i:s A')}}</h1>
          <br><br>
          @if ($order->status === 1)
        <h1 style="color:green;">    Filled at: {{Carbon\Carbon::parse($order->updated_at)->format('h:i:s A')}}</h1>
          @else
        <h1 style="color:red;">    Filled at: INCOMPLETE</h1>
          @endif
          <br><br>
          @if ($order->status === 1)
        <h1 style="color:green;">    Status: Filled</h1>
          @else
        <h1 style="color:red;">    Status: INCOMPLETE</h1>
          @endif
          <br><br>
        </h1>
      </section>
      <div class="well">
          <table class="table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Toppings</th>
              </tr>
            </thead>
            <tbody class="table-striped">
              @foreach($order->orderItems as $orderItem)
              <tr>
                @foreach($orderItem->menuItems as $menuItem)
                <td>
                  {{$menuItem->name}}
                </td>
                @endforeach
                <td>
                @foreach($orderItem->addOns as $topping)
                  {{$topping->name}}  &nbsp/&nbsp&nbsp
                @endforeach
                </td>
              </tr>
              @endforeach
            </tbody>
          </table>
      </div>


    </body>
</html>
