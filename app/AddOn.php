<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AddOn extends Model
{
    public $timestamps = false;
    public function configItem() {
      return $this->belongsToMany('App\ConfigItem');
    }
}
