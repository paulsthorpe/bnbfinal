@extends('admin.panel.admin_template')

@section('title')
Applications
@endsection

@section('admin_content')
<section class="content-header">
  <h1>
    Order ID: {{$order->id}}
    <br><br>
    Order Name: {{$order->name}}
    <br><br>
    Submitted On: {{Carbon\Carbon::parse($order->created_at)->format('m-d-Y')}} at:
    {{Carbon\Carbon::parse($order->created_at)->format('h:i:s A')}}
    <br><br>
    @if ($order->status === 1)
      Filled at: {{Carbon\Carbon::parse($order->updated_at)->format('h:i:s A')}}
    @else
      Filled at: INCOMPLETE
    @endif
    <br><br>
    @if ($order->status === 1)
      Status: Filled
    @else
      Status: INCOMPLETE
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

@endsection
