<?php
use Carbon\Carbon;
/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

// $factory->define(App\User::class, function (Faker\Generator $faker) {
//     return [
//         'name' => $faker->name,
//         'email' => $faker->safeEmail,
//         'password' => bcrypt(str_random(10)),
//         'remember_token' => str_random(10),
//     ];
// });

$factory->define(App\Employee::class, function () {
    return [
        'id' => rand(1000,9999),
        'first_name' => str_random(6),
        'last_name' => str_random(6),
        'phone_no' => rand(1000000, 99999999),
        'clocked_in' => 0,
    ];
});

$factory->define(App\Sale::class, function () {
    return [
        'date' => Carbon::create(2016,6,rand(1,30)),
        'sales_total_dollars' => rand(800,2500),
        'sales_total_cents' => rand(01,99),
        'paid_outs' => rand(0, 300) * rand(0.20,0.99),
        'special' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'created_at' => Carbon::now()
    ];
});

$factory->define(App\TimeRecord::class, function () {
    return [
        'employee_id' => 3287,
        'clock_in' => \Carbon\Carbon::create(2016, 6, rand(1,30), rand(1,24), rand(1,59), rand(1,59)),
        'secs' => rand(18000,36000),
    ];
});
