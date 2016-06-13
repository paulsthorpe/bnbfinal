
<h1>Sales for {{date('m-d-Y') }}</h1>
<br></br>
<h1>Total Sales</h1>
<br>
<h2>$ {{$record[0]->sales_total_dollars}}.{{$record[0]->sales_total_cents}}</h2>
<br></br>
<h1>Paid Outs</h1>
<br>
<h2>{{($record[0]->paid_outs/100)}}</h2>
<br></br>
<h1>Special Notes</h1>
<br>
<pre>
  @if(isset($record[0]->special))
  {{$record[0]->special}}
  @else
  No special notes were attached for today.
  @endif
</pre>
