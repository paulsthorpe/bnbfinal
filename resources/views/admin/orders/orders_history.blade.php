@extends('admin.panel.admin_template')

@section('title')
Orders History
@endsection

@section('admin_content')

<section class="content-header">
  <h1>
    Orders For <?php echo date('M Y'); ?>
  </h1>

</section>
<div class="well">
    <table id="table" class="table">
      <thead>
        <tr>
          <th>Order Id</th>
          <th>Date</th>
          <th>Status</th>
          <th>Total</th>
          <th style="width: 40px;">Actions</th>
        </tr>
      </thead>
      <tbody>
        <?php
        $monthlyTotal = 0;
        $totalOrders = 0;
        ?>
        @foreach($orders as $order)
          <?php
            $monthlyTotal += $order->total;
            $totalOrders ++;
          ?>
          <tr>
          <td>{{$order->id}}</td>
          <td>{{Carbon\Carbon::parse($order->created_at)->format('m-d-Y')}}</td>
          <td>
            @if ($order->status === 1)
              <p style="color:green;">Completed</p>
            @else
              <p style="color:red;">Incomplete</p>
            @endif
          </td>
          <td>$ {{$order->total/=100}}</td>
          <td>
            <a class='btn btn-primary btn-xs' href="/admin/orders/{{$order->id}}">View Details</a>
          </td>
          <td>
            <form action="/admin/orders/delete/{{$order->id}}" method="POST">
              <input type="hidden" name="_method" value="DELETE">
              <input type="hidden" name="_token" value="{{ csrf_token() }}">
              <button class='btn btn-danger btn-xs' type="submit" name="submit">Delete</button>
            </form>
           </td>
        </tr>
        @endForEach

      </tbody>
    </table>
    <h2>Online Sales This Month:$ {{$monthlyTotal/=100}}</h2>
    <h2>Total Online Orders This Month: {{$totalOrders}}</h2>
</div>

@endsection
