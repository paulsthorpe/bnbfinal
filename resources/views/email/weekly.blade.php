
<?php
// $dollars = 0;
// $cents = 0;
// $outs = 0;
  foreach($records as $record){
    $dollars += (int)$record->sales_total_dollars;
    $cents += (int)$record->sales_total_cents;
    $outs += (int)$record->paid_outs;
  }

  $centsMinusDollars = $cents % 100;
  $dollarsPlusCents = $dollars + floor($cents/100);
?>


<h1>Sales This Week</h1>
<br></br>
<h1>Total Sales</h1>
<br>
<h2>$ {{$dollarsPlusCents}}.{{$centsMinusDollars}}</h2>
<br></br>
<h1>Paid Outs</h1>
<br>
<h2>{{($outs/100)}}</h2>
<br></br>
