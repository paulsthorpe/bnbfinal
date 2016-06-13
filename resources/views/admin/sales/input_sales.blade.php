@extends('admin.panel.admin_template')

@section('title')
Daily Sales
@endsection

@section('admin_content')
<section class="content-header">
  <h1>
    Daily Sales Input
  </h1>
</section>
<br>
</br>
<div class="container-fluid">
 <div class="row">
  <div class="col-md-6 col-sm-6 col-xs-12">

   <form method="POST" action="/admin/sales/store">
     <input type="hidden" name="_token" value="{{{ csrf_token() }}}" />

     <!-- Date Inputs -->
    <div class="row">
      <div class="form-group col-sm-12">
       <label class="control-label requiredField" for="day">
        Date
        <span class="asteriskField">
         *
        </span>
       </label>
       <input type="text" class="form-control" id="startDate" name="date">
      </div>
    </div>

    <!-- Day Of Week Select -->
    <div class="form-group ">
     <label class="control-label requiredField" for="day_select">
      Day
      <span class="asteriskField">
       *
      </span>
     </label>
     <select class="select form-control" name="day_select">
      <option value="Monday">
       Monday
      </option>
      <option value="Tuesday">
       Tuesday
      </option>
      <option value="Wednesday">
       Wednesday
      </option>
      <option value="Thursday">
       Thursday
      </option>
      <option value="Friday">
       Friday
      </option>
      <option value="Saturday">
       Saturday
      </option>
     </select>
    </div>

    <!-- sales totals -->
    <div class="row">
      <div class="form-group col-sm-4">
       <label class="control-label requiredField" for="total">
        Daily Total Dolars
        <span class="asteriskField">
         *
        </span>
       </label>
       <input class="form-control" name="sales_total_dollars" placeholder="0000" type="text"/>
      </div>
      <div class="form-group col-sm-3">
       <label class="control-label requiredField" for="total">
        Daily Total Cents
        <span class="asteriskField">
         *
        </span>
       </label>
       <input class="form-control" name="sales_total_cents" placeholder="00" type="text"/>
      </div>
    </div>

    <!-- Paid outs and special instructions -->
    <div class="form-group">
     <label class="control-label requiredField" for="paid_outs">
      Paid Outs
     </label>
     <input class="form-control" name="paid_outs" placeholder="0000.00" type="text"/>
    </div>
    <div class="form-group">
     <label class="control-label " for="special">
      Notes About Today
     </label>
     <textarea class="form-control" cols="40" name="special" rows="10"></textarea>
     <span class="help-block">
      Expenses, Invoices Paid, other Paid Outs...
     </span>
    </div>
    <div class="form-group">
     <div>
      <button class="btn btn-primary " name="submit" type="submit">
       Submit
      </button>
     </div>
    </div>
   </form>
  </div>
 </div>
</div>




@endsection
