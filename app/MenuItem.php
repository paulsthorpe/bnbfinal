<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MenuItem extends Model
{

    public $timestamps = false;


    public function configItem() {

      return $this->belongsToMany('App\ConfigItem');
      
    }


}
