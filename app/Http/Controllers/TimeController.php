<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Employee;
use App\TimeRecord;
use App\Services\Timeclock;
use Carbon\Carbon;


class TimeController extends Controller
{


    /**
     *
     *  Send all Employees to period_hours view
     *  This view displays all empoyees and their hours for current period
     *
     */


    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function period_hours()
    {

        $employees = Employee::all();

        return view('admin.employee.period_hours', compact('employees'));

    }




    /**
     *
     *  Send employee, and their time records to the view
     *  This view shows detailed time records for the selected employee
     *
     */


    /**
     * @param Employee $employee
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function employee_time(Employee $employee)
    {

        $time_records = $employee->timeByDate;

        return view('admin.employee.time_by_employee', compact('employee', 'time_records'));

    }



    /**
     * Timeclock Routes
     *
     *
     */


    /**
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function add_hours(Request $request)
    {

        Timeclock::addRecord($request);

        return back();

    }




    /**
     * Timeclock Routes
     *
     *
     */


    /**
     * @param TimeRecord $id
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Exception
     */
    public function delete_hours(TimeRecord $id)
    {

        $id->delete();

        return back();

    }




    /**
     *  Get employee_id by post, query that employee
     *  and then call the clockIn method from TimeClock class to handle
     *  clocking in/out process, then redirect back to user_path view
     *
     */


    /**
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function log_time(Request $request)
    {

        $employee = Employee::find($request->employee_id);

        Timeclock::clockIn($employee);

        return redirect('/user_path');

        //flash employee success/fail

    }


    /**
     * Timeclock Routes
     *
     *
     */


    public function editTime()
    {

    }

}
