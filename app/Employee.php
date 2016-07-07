<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $fillable = ['first_name','last_name','phone_no'];

    public $timestamps = false;

    public function time() {

      return $this->hasMany(TimeRecord::class);

    }

    public function timeByDate() {

      return $this->hasMany(TimeRecord::class)->orderBy('clock_in');

    }
}
