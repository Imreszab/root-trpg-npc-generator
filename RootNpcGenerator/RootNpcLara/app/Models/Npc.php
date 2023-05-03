<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Npc extends Model
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

    public function __construct(array $attributes = array())
    {
        parent::__construct($attributes);
    }
}
