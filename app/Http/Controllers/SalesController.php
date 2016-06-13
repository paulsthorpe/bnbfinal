<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Carbon\Carbon;
use App\Sale;
use App\Services\SalesService;

class SalesController extends Controller
{


  public function index(){

    $sales = SalesService::findThisMonth();

    return view('admin.sales.sales_details', compact('sales'));

  }



  public function sort(Request $request){

    $sales = SalesService::sort($request);

    return view('admin.sales.sales_details', compact('sales'));

  }



  public function specificDate(Request $request) {

    $sales = SalesService::findSpecificDate($request);

    return view('admin.sales.sales_details', compact('sales'));
  }



  public function store(Request $request){

    SalesService::saveRecord($request);

    return redirect('/admin');

  }

  public function input(){

    return view('admin.sales.input_sales');

  }


  public function delete(Sale $id){

    $id->delete();

    return redirect('/admin/sales');
    
  }

}
