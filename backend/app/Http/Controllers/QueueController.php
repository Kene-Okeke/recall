<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;

class QueueController extends Controller
{
    public function showQueue(Request $request){

        //first we need the user 
        $user = $request->user();

        //now we can access all the data we need from user using the relationships
        $studySchedules = $user->studySchedules()->get();

        $today = Carbon::today();

        $todayNumber = $today->dayOfWeek;

        $topics = $user->topics()->get();

        $isStudyDay = false;

        foreach($studySchedules as $schedule){
            if  ($todayNumber ===  $schedule->day_of_week){
                 $isStudyDay = true;
            }
        }

        $queue = [];

        if($isStudyDay){
            $sessionSize = $user->sessionSize()->first();

            $todayTopics = [];
            $upcomingTopics = [];

            foreach($topics as $topic){
                
                //$priority = null;

                $reviewDate = Carbon::parse($topic->next_review_date);

                 $lastReview = $topic->reviews()
                    ->latest()
                    ->first();

                    
                    $daysAgo = $lastReview->created_at->diffInDays($today);


                if($reviewDate->isSameDay($today)){

                    $todayTopics[] = [
                        'title' => $topic->title,
                        'category' => $topic->category,
                        'lastReviewed' => $daysAgo,
                        'lastScore' => $lastReview->score
                    ];
                }elseif($reviewDate->isAfter($today)){

                    $upcomingTopics[]= [
                        'title' => $topic->title,
                        'category' => $topic->category,
                        'nextReviewDate'=> $reviewDate,
                        'lastScore' => $lastReview->score
                    ];

                   
                }

            }
             $upcomingTopics = collect($upcomingTopics);
             $upcomingTopics =  $upcomingTopics
                    ->sortBy('nextReviewDate')
                    ->values();

             $todayTopicCount = count($todayTopics);

            if($todayTopicCount < $sessionSize->topics_per_session){
                $remainingSlots = $sessionSize->topics_per_session - $todayTopicCount;

                $upcomingtoAdd = $upcomingTopics->take($remainingSlots);

                $queue = collect($todayTopics)->concat($upcomingtoAdd)->values();
            }else{
                $queue = collect($todayTopics)->take($sessionSize->topics_per_session)->values();
            }
        } return response()->json([
            'queue' => $queue,
            'user'=>$user
        ]);

    }
}
