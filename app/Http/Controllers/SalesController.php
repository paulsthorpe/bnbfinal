<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Carbon\Carbon;
use App\Sale;
use App\Services\SalesService;

class SalesController extends Controller
{


    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {

        $sales = SalesService::findThisMonth();

        return view('admin.sales.sales_details', compact('sales'));

    }


    /**
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function sort(Request $request)
    {

        $sales = SalesService::sort($request);

        return view('admin.sales.sales_details', compact('sales'));

    }


    /**
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function specificDate(Request $request)
    {

        $sales = SalesService::findSpecificDate($request);

        return view('admin.sales.sales_details', compact('sales'));
    }


    /**
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function store(Request $request)
    {

        SalesService::saveRecord($request);

        return redirect('/admin');

    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function input()
    {

        return view('admin.sales.input_sales');

    }


    /**
     * @param Sale $id
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     * @throws \Exception
     */
    public function delete(Sale $id)
    {

        $id->delete();

        return redirect('/admin/sales');

    }

}
