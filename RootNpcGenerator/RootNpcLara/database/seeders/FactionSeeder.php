<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FactionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('factions')->insert([
            'name' => 'Marquisate'
        ]);
        DB::table('factions')->insert([
            'name' => 'Eyrie Dynasty'
        ]);
        DB::table('factions')->insert([
            'name' => 'Woodland Alliance'
        ]);
        DB::table('factions')->insert([
            'name' => 'Local Denizen'
        ]);

    }
}
