<?php

namespace App\Models\QueryRepositories;

use App\Models\Npc;
use App\Models\Age;
use App\Models\Armor;
use App\Models\Faction;
use App\Models\Gender;
use App\Models\Race;
use App\Models\Weapon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class NpcRepository{

    public static function createNewNpc(){
        $name = 'Bob';
        $age = Age::inRandomOrder()->first();
        $armor = Armor::inRandomOrder()->first();
        $faction = Faction::inRandomOrder()->first();
        $gender = Gender::inRandomOrder()->first();
        $race = Race::inRandomOrder()->first();
        $weapon = Weapon::inRandomOrder()->first();
        $newNpc = [
            'id' => 0,
            'name' => $name,
            'race'=> $race,
            'age' => $age,
            'gender' => $gender,
            'faction' => $faction,
            'weapon' => $weapon,
            'armor' => $armor,
            'injury' => rand(0, 4),
            'exhaustion' => rand(0, 4),
            'moral' => rand(0, 4)
        ];
        return $newNpc;
    }
}
