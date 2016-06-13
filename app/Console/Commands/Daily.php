<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use Carbon\Carbon;
use App\Sale;
use Mail;

class Daily extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'bnb:daily';

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
      $start = Carbon::now()->startOfDay();
      $end = Carbon::now()->endOfDay();
      $record = Sale::whereBetween('date', [$start, $end])->get();

      // return $record;
      Mail::send('email.daily', ['record' => $record] , function ($message){
            $subject = 'Report For '.date('m-d-Y');
            $message->subject($subject)
            ->to('paulsthorpe@gmail.com');
      });
    }
}
