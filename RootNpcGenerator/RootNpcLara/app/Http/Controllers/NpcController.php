<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\QueryRepositories\NpcRepository;
use App\Models\Npc;

class NpcController extends Controller
{
    function generateRandomNpc() : Response
    {
        $newNpc = NpcRepository::createNewNpc();
        if ($newNpc == null) {
            return response(["message"=>['Error!! Could not create random npc.']],Response::HTTP_NOT_FOUND);
        }
       $response = [
           "message"=>$newNpc
       ];
       return response($response,Response::HTTP_CREATED);
    }

    function saveNewNpc(Request $request) : Response
    {
        if (!$request->has('npc') || $request->npc == null) {
            return response(["message"=>['Error!! Could not save npc.']],Response::HTTP_NOT_FOUND);
        }
        $npcId = NpcRepository::saveNpc($request->npc);
        $response = [
           "message"=>$npcId
        ];
        return response($response,Response::HTTP_CREATED);
    }

    function getAllNpc() : Response
    {
        $npcs = Npc::all();
        if ($npcs == null) {
            return response(["message"=>['Error!! Could not get npcs.']],Response::HTTP_NOT_FOUND);
        }
        $response = [
           "message"=>$npcs
        ];
        return response($response,Response::HTTP_CREATED);
    }

}
