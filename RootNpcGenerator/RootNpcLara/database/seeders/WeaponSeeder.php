<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WeaponSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('weapons')->insert([
            'name' => 'Paw',
            'injury' => 0,
            'exhaustion' => 1
        ]);
        DB::table('weapons')->insert([
            'name' => 'Dagger',
            'injury' => 1,
            'exhaustion' => 0
        ]);
        DB::table('weapons')->insert([
            'name' => 'Sword',
            'injury' => 2,
            'exhaustion' => 0
        ]);
        DB::table('weapons')->insert([
            'name' => 'Greatsword',
            'injury' => 3,
            'exhaustion' => 0
        ]);
        DB::table('weapons')->insert([
            'name' => 'Greathammer',
            'injury' => 1,
            'exhaustion' => 1
        ]);
        DB::table('weapons')->insert([
            'name' => 'Bow',
            'injury' => 1,
            'exhaustion' => 0
        ]);
    }
}
