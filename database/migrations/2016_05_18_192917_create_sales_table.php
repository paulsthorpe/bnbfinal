<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('sales', function (Blueprint $table) {
          $table->increments('id');
          $table->timestamp('date');
          $table->string('day');
          $table->string('sales_total_dollars');
          $table->string('sales_total_cents');
          $table->float('paid_outs');
          $table->string('special');
          $table->timestamp('created_at');
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('sales');
    }
}
