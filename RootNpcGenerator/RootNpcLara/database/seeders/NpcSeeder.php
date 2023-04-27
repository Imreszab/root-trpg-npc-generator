<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NpcSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('npcs')->insert([
            'name' => 'Peter',
            'race' => 1,
            'age' => 2,
            'gender' => 1,
            'faction' => 3,
            'weapon' => 2,
            'armor' => 2,
            'injury' => 3,
            'exhaustion' => 2,
            'moral' => 2
        ]);
    }
}
