<?php

namespace App\Services;
use Carbon\Carbon;
use App\Order;
use App\MenuItem;
use App\ConfigItem;
use App\AddOn;



/*
|--------------------------------------------------------------------------
| Orders Class
|--------------------------------------------------------------------------
|
| Provides useful static functions to use throught the appliction to assist in
| storing, sorting and displaying data from the ordering appliction
|
|
*/

class OrderService {



  /**
   *  Get all sales records for current month, the default sales view in admin
   *
   *
   */


    public static function todaysOrders() {

      $earlier = Carbon::today()->startOfDay();

      $later = Carbon::today()->endOfDay();

      return \DB::table('orders')->whereBetween('created_at', [$earlier, $later])
      ->orderBy('created_at','DESC')->get();

    }


    /**
     * Gets sales record by a specific date
     *
     *
     */

    public static function storeOrder($request) {


            //create a variabe to hold all items prices

            $total = 0;
            $tax = 0;

            //get jsonp from angular2

            $jsonp = response()->json($request);

            //remove metadata/headers/csrftoken

            $cleanedJSONP = substr($jsonp, stripos($jsonp, "["));

            //create array from json string

            $json = json_decode($cleanedJSONP);

            //instantiate new order

            $order = new Order;

            //save immediately, to allow attachment of products

            $order->save();

            //for each json object

            foreach($json as $key => $value) {

              //test if the object contains product data or customer info

              if(isset($value->item_id)){

                //instantiate a new configitem to allow pivot table records
                //and relationships to be created

                $item = new ConfigItem;

                //save immediately to allow attachment

                $item->save();
                $it = MenuItem::find($value->item_id);
                $total += $it->price;

                foreach($value->additionals as $topping ){
                  $item->addOns()->attach($topping);
                  $top = AddOn::find($topping);
                  $total += $top->price;
                } //foreach topping value in object->array

                $item->menuItems()->attach($value->item_id);
                $order->orderItems()->save($item);

              }/*if object is item data*/

              else {

                $order->name = $value->name;
                $order->phone = $value->phone;

              }//else if object is cust data

            }//foreach json object

              $order->subtotal = $total;
              $order->tax = $total * 0.0675;
              $order->total = $total * 1.0675;
              $order->save();
              return $json;

    }



  /**
   * Sorts sales records between two specific dates
   *
   *
   */


    public static function display($request) {

    }



    /**
     * Saves Sales record from post request
     *
     *
     */


    public static function saveRecord($request) {



    }



  } //end Sales class
