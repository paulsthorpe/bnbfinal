<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\OrderSystem;
//testing only
use App\Order;
use App\ConfigItem;
use App\AddOn;
use App\MenuItem;
use Carbon\Carbon;
use App\Services\OrderService;



class OrdersController extends Controller
{

  /*
  |--------------------------------------------------------------------------
  | Orders routes related to Orders
  |--------------------------------------------------------------------------
  |
  | Provides useful static functions to use throught the appliction to assist in
  | handling data related to employee time tracking and reporting
  |
  |
  */

  /**
   *
   *
   *
   */

  public function index() {

    $orders = Order::all();

    return view('admin.orders.orders_history', compact('orders'));

  }

  /**
   *
   *
   *
   */

  public function list_today() {

    $orders = OrderService::todaysOrders();

    return view('admin.orders.todays_orders', compact('orders'));

  }

  /**
   *
   *
   *
   */

  public function by_index($id) {

    $order = Order::with('orderItems.menuItems')->find($id);

    return view('admin.orders.by_index', compact('order'));

  }

  public function mark_complete(Order $order) {

    $order->status = 1;

    $order->save();

    return back();

  }

  public function orderApp() {

    $orders = OrderService::todaysOrders();

    return view('admin.orders.userOrderScreen', compact('orders'));

  }

  public function orderAppByIndex($id) {

    $order = Order::with('orderItems.menuItems')->find($id);

    return view('admin.orders.userOrderDetails', compact('order'));

  }


  /*
  |--------------------------------------------------------------------------
  | API/DATA HANDLING
  |--------------------------------------------------------------------------
  |
  | Facilitation of Data transfer/communication between angular
  | and laravel portions of this application
  |
  |
  */

  /**
   *
   *
   *
   */

  public function store(Request $request) {

    $json = OrderService::storeOrder($request);


    return response()->json($json);

  }

  /**
   *
   * @return $items
   *
   */

  public function getMenuItems() {

    $items = App\AddOn::all();
    return $items;

  }

  /**
   *
   *
   *
   */

  public function getAddOns() {

    $items = App\AddOn::all();

    return $items;

  }

  /**
   *
   *  return specific menu item
   *
   */

  public function menuItemByID(App\MenuItem $item) {

    return $item;

  }

  /**
   *
   *  delete order
   *
   */

  public function delete(Order $id){

    $id->delete();

    return back();

  }



}
