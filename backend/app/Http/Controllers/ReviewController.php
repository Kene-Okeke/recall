<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\SpacedRepetitionService;
use Carbon\Carbon;

class ReviewController extends Controller
{
    public function Review(Request $request, SpacedRepetitionService $service)
    {
        $data = $request->validate([
            'score' => 'required|integer|min:0|max:100',
            'notes' => 'nullable|string',
            'topic_id' => 'required|integer',
            'from_queue' => 'required|boolean',
        ]);

        $user = $request->user();

        $topic = $user
            ->topics()
            ->findOrFail($data['topic_id']);

        $topic->reviews()->create([
            'score' => $data['score'],
            'notes' => $data['notes'] ?? null,
        ]);

        $service->process($topic, $data['score']);

        $studySchedules = $user->studyschedules()->get();

        $streak = $user->streak;
        $lastStreakDate = $user->last_streak_date;

        $today = Carbon::today();
        $todayNumber = $today->dayOfWeek;

        $isStudyDay = false;

        foreach ($studySchedules as $schedule) {
            if ($todayNumber === $schedule->day_of_week) {
                $isStudyDay = true;
            }
        }

        

        if ($data['from_queue'] && $isStudyDay) {

            if (!$lastStreakDate || !$lastStreakDate->isSameDay($today)) {

                $streak++;

                $user->update([
                    'streak' => $streak,
                    'last_streak_date' => $today,
                ]);

            }
        }

        return response()->json([
            'message' => 'Review completed successfully',
            'topic_title' => $topic->title,
        ]);
    }
}