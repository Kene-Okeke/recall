<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ScheduleController extends Controller
{
    public function saveSchedule(Request $request){

        $dayMap = [
            'Monday' => 1,
            'Tuesday' => 2,
            'Wednesday' => 3,
            'Thursday' => 4,
            'Friday' => 5,
            'Saturday' => 6,
            'Sunday' => 7,
        ];

        $user = $request->user();

        $data = $request->validate([
            'selectedDays'=>'required|array',
            'selectedDays.*'=>'required|string',
        ]);

        foreach($data['selectedDays'] as $day){
            $dayNumber = $dayMap[$day];

            $user->studySchedules()->create([
                'day_of_week' => $dayNumber,
            
            ]);
        }

        return response()->json([
            'message' => 'Study schedule saved successfully',
        ],201);

        
    }
}
