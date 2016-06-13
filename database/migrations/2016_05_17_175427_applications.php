<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Applications extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('applications', function (Blueprint $table) {
          $table->increments('id')->index();
          $table->string('first_name');
          $table->string('last_name');
          $table->string('middle');
          $table->string('birth_year');
          $table->string('birth_month');
          $table->string('birth_day');
          $table->string('ad_street');
          $table->string('ad_apt');
          $table->string('ad_city');
          $table->string('ad_state');
          $table->string('home_#');
          $table->string('cell_#');
          $table->string('email');
          $table->string('position');
          $table->string('start_month');
          $table->string('start_day');
          $table->string('salary');
          $table->string('current_employ');
          $table->string('h_school_name');
          $table->string('h_school_grad');
          $table->string('h_school_grad_date');
          $table->string('college_name');
          $table->string('college_grad');
          $table->string('college_grad_date');
          $table->string('college_study');
          $table->text('about');
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
        Schema::drop('applications');
    }
}
