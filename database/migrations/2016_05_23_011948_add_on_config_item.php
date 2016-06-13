<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddOnConfigItem extends Migration
{
    /**
     * Pivot Table for add ons
     *
     * @return void
     */
    public function up()
    {
      Schema::create('add_on_config_item', function (Blueprint $table) {
          $table->increments('id');
          $table->integer('config_item_id')->index();
          $table->integer('add_on_id')->index();

      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('add_on_config_item');
    }
}
