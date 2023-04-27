<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ArmorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('armors')->insert([
            'name' => 'cloak',
            'wear' => 1
        ]);
        DB::table('armors')->insert([
            'name' => 'Fancy Clothes',
            'wear' => 0
        ]);
        DB::table('armors')->insert([
            'name' => 'Leather Vest',
            'wear' => 2
        ]);
        DB::table('armors')->insert([
            'name' => 'Chainmail',
            'wear' => 3
        ]);
        DB::table('armors')->insert([
            'name' => 'Plate Armor',
            'wear' => 4
        ]);
    }
}
