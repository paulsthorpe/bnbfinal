<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ConfigItemMenuItem extends Migration
{
    /**
     * Pivot Table for Menu Items
     *
     * @return void
     */
    public function up()
    {
      Schema::create('config_item_menu_item', function (Blueprint $table) {
          $table->increments('id');
          $table->integer('config_item_id')->index();
          $table->integer('menu_item_id')->index();

      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('config_item_menu_item');
    }
}
