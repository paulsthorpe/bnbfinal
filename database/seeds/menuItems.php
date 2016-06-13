<?php

use Illuminate\Database\Seeder;

class menuItems extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('menu_items')->insert([
        'name' => 'Cheeseburger',
        'price' => 450,
      ]);
      DB::table('menu_items')->insert([
        'name' => 'Double Cheeseburger',
        'price' => 550,
      ]);
      DB::table('menu_items')->insert([
        'name' => 'Hamburger',
        'price' => 400,
      ]);
      DB::table('menu_items')->insert([
        'name' => 'Double Hamburger',
        'price' => 500,
      ]);
      DB::table('menu_items')->insert([
        'name' => 'Briteleaf',
        'price' => 200,
      ]);
      DB::table('menu_items')->insert([
        'name' => 'Nathans',
        'price' => 250,
      ]);
      DB::table('menu_items')->insert([
        'name' => 'Fries',
        'price' => 250,
      ]);
      DB::table('menu_items')->insert([
        'name' => 'Lemonade',
        'price' => 300,
      ]);
      DB::table('menu_items')->insert([
        'name' => 'Orangeade',
        'price' => 300,
      ]);

    }
}
