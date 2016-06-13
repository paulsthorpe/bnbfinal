<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class ApplicationsController extends Controller
{

  public function index(){

    return view('admin.apps.view_apps');
  }

  public function view_by_index(){

    return view('admin.apps.view_app_by_index');
  }

  public function delete(){

    return view('admin.apps.delete_app');
  }

  public function add(){

    return view('admin.apps.add_app');
  }
}
