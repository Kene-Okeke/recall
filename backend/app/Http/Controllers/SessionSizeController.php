<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SessionSizeController extends Controller
{
    public function saveSessionSize(Request $request){
        $user = $request->user();

        $data = $request->validate([
            'topics_per_session' => 'required|integer|min:1'
        ]);

        $user->sessionSize()->create([
            'topics_per_session' => $data['topics_per_session']
        ]);

        return response()->json([
            'message'=> 'Session size saved successfully'
        ],201);

    }
}
