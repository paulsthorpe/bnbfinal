<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class Yearly extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'bnb:yearly';

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
      $start = Carbon::now()->startOfYear();
      $end = Carbon::now()->endOfYear();
      $records = Sale::whereBetween('date', [$start, $end])->get();

      var_dump($records);
      Mail::send('email.yearly', ['records' => $records] , function ($message) use ($records) {
            $subject = 'Yearly Report';
            $message->subject($subject)
            ->to('paulsthorpe@gmail.com');
          });
    }
}
