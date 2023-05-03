<?php

namespace App\Services;

use Carbon\Carbon;

class NameGeneratorService
{
    public static function getRandomName()
    {

        $httpClient = new \GuzzleHttp\Client();
        $request =
            $httpClient
                ->get("https://names.drycodes.com/1?format=json");

        $response = json_decode($request->getBody()->getContents());

        return $response[0];
    }
}
