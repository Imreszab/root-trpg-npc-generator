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
use App\Services\NameGeneratorService;


class NpcRepository{

    public static function createNewNpc(){
        $name = str_replace("_", " ", NameGeneratorService::getRandomName());
        $age = Age::inRandomOrder()->first();
        $armor = Armor::inRandomOrder()->first();
        $faction = Faction::inRandomOrder()->first();
        $gender = Gender::inRandomOrder()->first();
        $race = Race::inRandomOrder()->first();
        $weapon = Weapon::inRandomOrder()->first();
        $attributes = [
            'id' => 0,
            'name' => $name,
            'race'=> $race,
            'age' => $age,
            'gender' => $gender,
            'faction' => $faction,
            'weapon' => $weapon,
            'armor' => $armor,
            'injury' => rand(1, 4),
            'exhaustion' => rand(1, 4),
            'moral' => rand(1, 4)
        ];
        $newNpc = new Npc($attributes);
        return $newNpc;
    }

    public static function saveNpc($npc){
        $id=Db::table('npcs')->insertGetId([
            'name' => $npc['name'],
            'race' => $npc['race']['id'],
            'age' => $npc['age']['id'],
            'gender' => $npc['gender']['id'],
            'faction' => $npc['faction']['id'],
            'weapon' => $npc['weapon']['id'],
            'armor' => $npc['armor']['id'],
            'injury' => $npc['injury'],
            'exhaustion' => $npc['exhaustion'],
            'moral' => $npc['moral']
        ]);

        return $id;
    }

}
