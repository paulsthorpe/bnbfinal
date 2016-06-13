<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateConfigItemsTable extends Migration
{
    /**
     * holds menu items/addons to create a configured order item
     *
     * @return void
     */
    public function up()
    {
        Schema::create('config_items', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('order_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('config_items');
    }
}
