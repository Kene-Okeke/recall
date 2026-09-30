<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


class StreakController extends Controller
{
    public function getStreak(Request $request)
    {
        $user = $request->user();

        return response()->json([
            'streak' => $user->streak,
             ]);
    }
}