<?php

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| All routes associated with client/employee
| *Home
| *Store Login
| *Applications
| *Ordering System
|
|
*/




/**
*
* Homepage Routes
*
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/store_login', function () {
    return view('admin.login');
});

Route::get('/user_path', function () {
    return view('admin.user_path');
});


/**
*
*Order System and Order System API Routes
*
*/

Route::get('/order', function () {
    return view('order_app');
});

Route::get('/order/{all}', function () {
    return view('order_app');
});

Route::get('/order/{any}/{all}', function () {
    return view('order_app');
});

Route::get('/order/{any}/{any}/{all}', function () {
    return view('order_app');
});

//API Routes

Route::get('/getItems', function () {
  $items = App\MenuItem::all();
  return $items;
});

Route::get('/getItems/{item}', function (App\MenuItem $item) {
  return $item;
});

Route::get('/getAddOns', function () {
  $items = App\AddOn::all();
  return $items;
});

Route::post('/recieveAPI', 'OrdersController@store');

Route::post('/getOrders', 'OrdersController@getOrders');

Route::post('/getOrdersClient', 'OrdersController@getOrdersClient');

Route::post('/getSpecificAddOns', 'OrdersController@getSpecificAddOns');






/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
|
| All routes within the realm of administration
| *Sales
| *Employee
| *Timeclock
| *Applications for Hire
|
|
|
*/


Route::get('/admin', function () {
    return view('admin.panel.admin_template');
});


/**
 *
 *Admin/Sales Routes
 *
 */

Route::get('/admin/sales', 'SalesController@index');

Route::post('/admin/sales/sort', 'SalesController@sort');

Route::post('/admin/sales/byDate', 'SalesController@specificDate');

Route::get('/admin/sales/compare', 'SalesController@compare');

Route::get('/admin/sales/{}', 'SalesController@view_by_date');

Route::get('/admin/sales/input', 'SalesController@input');

Route::post('/admin/sales/store', 'SalesController@store');

Route::get('/admin/sales/edit', 'SalesController@edit');

Route::delete('/admin/sales/destroy/{id}', 'SalesController@delete');




/**
 * Admin/Employee Routes
 *
 *
 */

Route::get('/admin/employees', 'EmployeesController@index');

//add

Route::get('/admin/employee/add', 'EmployeesController@add');

Route::post('/admin/employee/create', 'EmployeesController@create');

//edit

Route::get('/admin/employee/edit/{employee}', 'EmployeesController@edit');

Route::patch('/admin/employee/{employee}', 'EmployeesController@update');

//delete

Route::get('/admin/employee/delete/{employee}', 'EmployeesController@check_delete');

Route::delete('/admin/employee/{employee}', 'EmployeesController@delete');




/**
 * Timeclock Routes
 *
 *
 */

Route::post('/log_time', 'TimeController@log_time');

Route::get('/admin/period_hours', 'TimeController@period_hours');

Route::post('/admin/period_hours/add', 'TimeController@add_hours');

Route::get('/admin/period_hours/{employee}', 'TimeController@employee_time');

Route::get('/admin/period_hours/{employee}/edit', 'TimeController@edit_hours');

Route::get('/admin/period_hours/{employee}/add', 'TimeController@add_hours');

Route::delete('/admin/period_hours/delete/{id}', 'TimeController@delete_hours');




/**
 * Admin/Application Routes
 *
 *
 */

Route::get('/admin/view_apps', 'ApplicationsController@index');

Route::get('/admin/view_apps/{id}', 'ApplicationsController@view_by_index');

Route::get('/admin/view_apps/{id}/delete', 'ApplicationsController@delete');




/**
 * Admin/Online Order Routes
 *
 *
 */

 Route::get('/admin/orders', 'OrdersController@index');

 Route::get('/admin/orders/today', 'OrdersController@list_today');

 Route::get('/admin/orders/{id}', 'OrdersController@by_index');

 Route::get('/admin/orders/completed/{order}', 'OrdersController@mark_complete');

 Route::delete('/admin/orders/delete/{id}', 'OrdersController@delete');

 Route::get('/orderApp', 'OrdersController@orderApp');

 Route::get('/orderApp/{id}', 'OrdersController@orderAppByIndex');






 Route::get('/admin/applications', function () {
     return view('admin.panel.applications_list');
 });
