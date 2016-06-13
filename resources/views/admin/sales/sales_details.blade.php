@extends('admin.panel.admin_template')

@section('title')
Sales details
@endsection


@section('admin_content')

<div class="row">
  <div class="col-xs-12">
    <div class="box">
      <div class="box-header">
        <form class="sortBetween" action="/admin/sales/sort" method="post">
          <input type="hidden" name="_token" value="{{{ csrf_token() }}}" />
          <h1>Get Records Between</h1>
          <div class="seperate">
            <label for="startDate">Start Date</label>
            <input type="text" id="startDate" name="start">
          </div>
          <div class="seperate">
            <label for="endDate">End Date</label>
            <input type="text" id="endDate" name="end">
          </div>
          <input type="submit" name="submit" class="btn btn-primary">
        </form>
        <form class="selectDate" action="/admin/sales/byDate" method="post">
          <input type="hidden" name="_token" value="{{{ csrf_token() }}}" />
          <h1>Find Specific Day</h1>
          <div class="seperate">
            <label for="selectDate">Select Day</label>
            <input type="text" id="selectDate" name="date">
          </div>
          <input type="submit" name="submit" class="btn btn-primary">
        </form>
      </div>
      <hr style="border-bottom: 3px solid #d2d6de">
      <section class="content-header">
        <h1>
          Sales Details

        </h1>
      </section>
      <br>
      </br>
      <hr style="border-bottom: 3px solid #d2d6de">
      <div class="box-body">
        <table id="table" class="table table-bordered table-striped">
          <thead>
          <tr>
            <th>Sale Date</th>
            <th>Daily Sales</th>
            <th>Paid Outs</th>
            <th>Entered On</th>
            <th>View</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
          @foreach($sales as $sale)
          <tr>
            <td>{{ Carbon\Carbon::parse($sale->date)->format('l m-d-Y') }}</td>
            <td>$ {{$sale->sales_total_dollars}}.{{$sale->sales_total_cents}}</td>
            <td>$ {{$sale->paid_outs}}</td>
            <td>{{ Carbon\Carbon::parse($sale->date)->format('m-d-Y  H:i:s A') }}</td>
            <td><a class='btn btn-primary btn-xs' href="/admin/sale/{{$sale->id}}">View Details</a></td>
            <td>
              <form action="/admin/sales/destroy/{{$sale->id}}" method="POST">
                <input type="hidden" name="_method" value="DELETE">
                <input type="hidden" name="_token" value="{{ csrf_token() }}">
                <button class='btn btn-danger btn-xs' type="submit" name="submit">Delete</button>
              </form>


            </td>
          </tr>
          @endforeach

          </tbody>

        </table>
      </div>
      <!-- /.box-body -->
    </div>
    <!-- /.box -->
  </div>
  <!-- /.col -->
</div>
<!-- /.row -->


<style media="screen">
  .sortBetween {
    display: inline-block;
    text-align: center;
    width: 30%;
    float: left;
    margin-left: 10%;
  }

  .selectDate {
    display: inline-block;
    width: 30%;
    text-align: center;
    float: right;
    margin-right: 10%;
  }

  .seperate {
    margin: 20px auto;
  }
</style>
@endsection
