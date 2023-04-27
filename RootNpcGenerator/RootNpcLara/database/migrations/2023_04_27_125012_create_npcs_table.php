<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('npcs', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedBigInteger('race');
            $table->foreign('race')->references('id')->on('races');
            $table->unsignedBigInteger('age');
            $table->foreign('age')->references('id')->on('ages');
            $table->unsignedBigInteger('gender');
            $table->foreign('gender')->references('id')->on('genders');
            $table->unsignedBigInteger('faction');
            $table->foreign('faction')->references('id')->on('factions');
            $table->unsignedBigInteger('weapon');
            $table->foreign('weapon')->references('id')->on('weapons');
            $table->unsignedBigInteger('armor');
            $table->foreign('armor')->references('id')->on('armors');
            $table->integer('injury');
            $table->integer('exhaustion');
            $table->integer('moral');
            $table->timestamp('created_at')->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('npcs');
    }
};
