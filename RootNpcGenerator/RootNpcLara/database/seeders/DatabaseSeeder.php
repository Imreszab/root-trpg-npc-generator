<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            AgeSeeder::class,
            ArmorSeeder::class,
            FactionSeeder::class,
            GenderSeeder::class,
            RaceSeeder::class,
            WeaponSeeder::class,
            NpcSeeder::class
        ]);

    }
}
