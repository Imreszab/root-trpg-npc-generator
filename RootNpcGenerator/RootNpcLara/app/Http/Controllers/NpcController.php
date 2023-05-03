<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\QueryRepositories\NpcRepository;

class NpcController extends Controller
{
    function generateRandomNpc() : Response
    {
        $newNpc = NpcRepository::createNewNpc();
        if ($newNpc == null) {
            return response(["message"=>['Error!! Could not create Npc.']],Response::HTTP_NOT_FOUND);
        }
       $response = [
           "message"=>$newNpc
       ];
       return response($response,Response::HTTP_CREATED);
    }
}
