<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ConfigItem extends Model
{
    public $timestamps = false;

    public function order() {
      return $this->belongsTo('App\Order');
    }

    public function menuItems() {

      return $this->belongsToMany('App\MenuItem');

    }

    public function addOns(){

      return $this->belongsToMany('App\AddOn');

    }
}
