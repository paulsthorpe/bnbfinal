<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      factory('App\Employee', 20)->create();
      factory('App\Sale', 20)->create();
      factory('App\TimeRecord', 20)->create();
      $this->call(menuItems::class);
      $this->call(addOns::class);

    }
}
