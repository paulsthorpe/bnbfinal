<?php

namespace App\Services;

use Carbon\Carbon;
use App\Sale;


/*
|--------------------------------------------------------------------------
| Sales Class
|--------------------------------------------------------------------------
|
| Provides useful static functions to use throught the appliction to assist in
| storing, sorting and displaying sales record data
|
|
*/

class SalesService
{


    /**
     *  Get all sales records for current month, the default sales view in admin
     *
     *
     */


    /**
     * @return mixed
     */
    public static function findThisMonth()
    {

        $start = Carbon::now()->startOfMonth();

        $end = Carbon::now()->endOfMonth();

        return Sale::whereBetween('date', [$start, $end])->orderBy('date', 'DESC')->get();

    }


    /**
     * Gets sales record by a specific date
     *
     *
     */

    /**
     * @param $request
     * @return mixed
     */
    public static function findSpecificDate($request)
    {

        $start = Carbon::createFromFormat('m/d/Y', $request->date)->startOfDay();

        $end = Carbon::createFromFormat('m/d/Y', $request->date)->endOfDay();

        return Sale::whereBetween('date', [$start, $end])->get();

    }



    /**
     * Sorts sales records between two specific dates
     *
     *
     */


    /**
     * @param $request
     * @return mixed
     */
    public static function sort($request)
    {

        $start = Carbon::createFromFormat('m/d/Y', $request->start)->startOfDay();

        $end = Carbon::createFromFormat('m/d/Y', $request->end)->endOfDay();

        return Sale::whereBetween('date', [$start, $end])->orderBy('date', 'DESC')->get();

    }



    /**
     * Saves Sales record from post request
     *
     *
     */


    /**
     * @param $request
     */
    public static function saveRecord($request)
    {
        //instantiate a new sales record
        $record = new Sale;
        //persist request to db
        $date = Carbon::parse($request->date);

        $record->date = Carbon::parse($date->format('Y-m-d'));

        $record->day = $request->day_select;

        $record->sales_total_dollars = $request->sales_total_dollars;

        $record->sales_total_cents = $request->sales_total_cents;

        $record->paid_outs = $request->paid_outs;

        $record->special = $request->special;

        $record->save();

    }


} //end Sales class
