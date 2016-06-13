<?php

use Illuminate\Database\Seeder;

class addOns extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('add_ons')->insert([
        'name' => 'Mayo',
        'alias' => 'Mayo',

      ]);
      DB::table('add_ons')->insert([
        'name' => 'Ketchup',
        'alias' => 'K',

      ]);
      DB::table('add_ons')->insert([
        'name' => 'Mustard',
        'alias' => 'M',

      ]);
      DB::table('add_ons')->insert([
        'name' => 'Lettuce',
        'alias' => 'L',

      ]);
      DB::table('add_ons')->insert([
        'name' => 'Tomato',
        'alias' => 'T',

      ]);
      DB::table('add_ons')->insert([
        'name' => 'Onion Chopped',
        'alias' => 'chop-O',

      ]);
      DB::table('add_ons')->insert([
        'name' => 'Onion Sliced',
        'alias' => 'slice-O',

      ]);
      DB::table('add_ons')->insert([
        'name' => 'Pickle',
        'alias' => 'P',

      ]);
      DB::table('add_ons')->insert([
        'name' => 'Cole Slaw',
        'alias' => 'S',

      ]);
      DB::table('add_ons')->insert([
        'name' => 'Chili',
        'alias' => 'C',

      ]);
      DB::table('add_ons')->insert([
        'name' => 'Bacon',
        'alias' => 'bacon',
        'price' => 100,
      ]);
      DB::table('add_ons')->insert([
        'name' => 'Egg',
        'alias' => 'egg',
        'price' => 100,
      ]);
      DB::table('add_ons')->insert([
        'name' => 'Special(Drink+Fries)',
        'alias' => 'special',
        'price' => 300,
      ]);
    }
}
