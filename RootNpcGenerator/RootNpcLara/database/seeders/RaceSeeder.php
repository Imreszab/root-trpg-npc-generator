<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RaceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('races')->insert([
            'name' => 'Rabbit'
        ]);
        DB::table('races')->insert([
            'name' => 'Fox'
        ]);
        DB::table('races')->insert([
            'name' => 'Mouse'
        ]);
        DB::table('races')->insert([
            'name' => 'Cat'
        ]);
        DB::table('races')->insert([
            'name' => 'Racoon'
        ]);
        DB::table('races')->insert([
            'name' => 'Bird'
        ]);

    }
}
