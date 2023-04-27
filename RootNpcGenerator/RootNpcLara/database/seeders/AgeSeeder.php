<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AgeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('ages')->insert([
            'name' => 'Elder'
        ]);
        DB::table('ages')->insert([
            'name' => 'Young'
        ]);
        DB::table('ages')->insert([
            'name' => 'MiddleAge'
        ]);
        DB::table('ages')->insert([
            'name' => 'Child'
        ]);
    }
}
