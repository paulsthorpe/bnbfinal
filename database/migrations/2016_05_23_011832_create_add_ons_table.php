<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAddOnsTable extends Migration
{
    /**
     * Toppings, combo options, additional items to add to base items
     *
     * @return void
     */
    public function up()
    {
        Schema::create('add_ons', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('alias');
            $table->integer('price');
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
        Schema::drop('add_ons');
    }
}
