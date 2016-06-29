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

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {

        $orders = Order::all();

        return view('admin.orders.orders_history', compact('orders'));

    }

    /**
     *
     *
     *
     */

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function list_today()
    {

        $orders = OrderService::todaysOrders();

        return view('admin.orders.todays_orders', compact('orders'));

    }

    /**
     *
     *
     *
     */

    /**
     * @param $id
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function by_index($id)
    {

        $order = Order::with('orderItems.menuItems')->find($id);

        return view('admin.orders.by_index', compact('order'));

    }

    /**
     * @param Order $order
     * @return \Illuminate\Http\RedirectResponse
     */
    public function mark_complete(Order $order)
    {

        $order->status = 1;

        $order->save();

        return back();

    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function orderApp()
    {

        $orders = OrderService::todaysOrders();

        return view('admin.orders.userOrderScreen', compact('orders'));

    }

    /**
     * @param $id
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function orderAppByIndex($id)
    {

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

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {

        $json = OrderService::storeOrder($request);


        return response()->json($json);

    }

    /**
     *
     * @return $items
     *
     */
    /**
     * @return mixed
     */
    public function getMenuItems()
    {

        $items = App\AddOn::all();
        return $items;

    }

    /**
     *
     *
     *
     */
    /**
     * @return mixed
     */
    public function getAddOns()
    {

        $items = App\AddOn::all();

        return $items;

    }

    /**
     *
     *  return specific menu item
     *
     */

    /**
     * @param App\MenuItem $item
     * @return App\MenuItem
     */
    public function menuItemByID(App\MenuItem $item)
    {

        return $item;

    }

    /**
     *
     *  delete order
     *
     */

    /**
     * @param Order $id
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Exception
     */
    public function delete(Order $id)
    {

        $id->delete();

        return back();

    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getOrders(Request $request)
    {
        $orders = Order::with('orderItems')->where('phone', $request->phone)->get();
        $allOrders = [];
        foreach ($orders as $order) {
            $id = $order->id;
            $completeOrder = ['order_id' => $id, 'items' => []];
            foreach ($order->orderItems as $configItem) {
                $object = [];
                foreach ($configItem->menuItems as $menu) {
                    $item = $menu->id;
                }
                $toppings = [];
                foreach ($configItem->addOns as $add) {
                    array_push($toppings, $add->id);
                }
                $object = ['item_id' => $item, 'additionals' => $toppings];
                array_push($completeOrder['items'], $object);
            }
            array_push($allOrders, $completeOrder);
        }
        return response()->json($allOrders);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getOrdersClient(Request $request)
    {
        $orders = Order::with('orderItems')->where('phone', $request->phone)->get();
        $allOrders = [];
        foreach ($orders as $order) {
            $id = $order->id;
            $completeOrder = ['order_id' => $id, 'items' => []];
            foreach ($order->orderItems as $configItem) {
                $object = [];
                foreach ($configItem->menuItems as $menu) {
                    $item = $menu->name;
                    $item_id = $menu->id;
                    $price = $menu->price;
                }
                $toppings = [];
                foreach ($configItem->addOns as $add) {
                    array_push($toppings, $add->name);
                }
                $object = ['name' => $item, 'additionals' => $toppings, 'price' => $price];
                array_push($completeOrder['items'], $object);
            }
            array_push($allOrders, $completeOrder);
        }
        return response()->json($allOrders);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getSpecificAddOns(Request $request)
    {
        $jsonp = response()->json($request);
        //remove metadata/headers/csrftoken
        $cleanedJSONP = substr($jsonp, stripos($jsonp, "["));
        //create array from json string
        $json = json_decode($cleanedJSONP);
        $selected = AddOn::whereIn('id', $json)->get();
        return response()->json($selected);
    }

}
