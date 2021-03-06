<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use Carbon\Carbon;
use App\Sale;
use Mail;

class Weekly extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'bnb:weekly';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
      $start = Carbon::now()->startOfWeek();
      $end = Carbon::now();
      $records = Sale::whereBetween('date', [$start, $end])->get();

      var_dump($records);
      Mail::send('email.weekly', ['records' => $records] , function ($message) use ($records) {
            $subject = 'Weekly Report 4';
            $message->subject($subject)
            ->to('paulsthorpe@gmail.com');
          });
    }
}
