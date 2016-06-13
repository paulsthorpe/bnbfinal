@extends('admin.panel.admin_template')

@section('title')
Todays Orders
@endsection

@section('admin_content')
<!-- <meta http-equiv="refresh" content="5" /> -->
<section class="content-header">
  <h1>
    Orders For <?php echo date('M d Y'); ?>
  </h1>

</section>
<div class="well">
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
          <td>{{Carbon\Carbon::parse($order->created_at)->format('h:i:s A')}}</td>
          <td>
            @if ($order->status === 1)
              {{Carbon\Carbon::parse($order->updated_at)->format('h:i:s A')}}
            @else
              <p style="color:red;">INCOMPLETE</p>
            @endif
          </td>
          <td>$ {{$order->total/=100}}</td>
          <td>
            <a class='btn btn-primary btn-xs' href="/admin/orders/{{$order->id}}">View Details</a>
          </td>
          <td>
            <a class='btn btn-success btn-xs' href="/admin/orders/completed/{{$order->id}}">Mark Complete</a>
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
</div>

@endsection
