<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{


    public function orderItems() {

      return $this->hasMany('App\ConfigItem');

    }

    public function displayOrder(){

      return $this->toJSON();

    }

}
