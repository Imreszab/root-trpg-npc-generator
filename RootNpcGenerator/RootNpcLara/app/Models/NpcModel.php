<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NpcModel extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'race',
        'age',
        'gender',
        'faction',
        'weapon',
        'armor',
        'injury',
        'exhaustion',
        'moral'
    ];
}
