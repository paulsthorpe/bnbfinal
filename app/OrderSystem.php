<?php

namespace App;
use Carbon\Carbon;
use App\Order;
use App\ConfigItem;
use App\MenuItem;

class OrderSystem {

  public static function orderDetails($order) {
    echo $order->id . " Name ";
    echo $order->name . " Status ";
    echo $order->status . " ";
    foreach($order->orderItems as $item){
      echo " Item " .$item->menuItems[0]->name . ": with :";
      foreach($item->addOns as $addon) {
        echo $addon->alias . ": ";
      }

    }

  }

  public static function persistOrder($request) {

    //recieve jsonp response
    $jsonP = response()->json($request);
    //remove all irrelevant jsonP metadata
    $cleanedJSONP = substr($jsonP, stripos($jsonP, "["));
    //decode cleanedJSONP into php readable array/objects
    $json = json_decode($cleanedJSONP);

    //create a new order in DB
    $order = new Order;
    $order->save();

    //find each individual order item and persist to database
    //while creating the necessary relationship with the order
    foreach($json as $key => $value) {

      //create new config item for db
      $item = new ConfigItem;
      //we create it blank immediately to create the necessary relationships
      $item->save();

      //attach each topping to its owning configured item
      foreach($value->additionals as $topping ){
        $item->addOns()->attach($topping);
      }

        //create a relationship between the configured item
        //and a static menu item
        $item->menuItems()->attach($value->item_id);

        //save the configured item with relationship to the order
        $order->orderItems()->save($item);

    }

    //return the response to angular, this may not be neccessary after deployment
    return response()->json($json);

}
