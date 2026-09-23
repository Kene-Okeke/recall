<?php

namespace App\Services;
use Carbon\Carbon;


class SpacedRepetitionService

{   //what the spaced repetition algorithm needs 
    //$topic = the Topic model, containing the topic's current SM-2 values
    //$score = the user's 0–100 Recall score

    public function process($topic ,$score){
        $quality = $this->convertScoreToQuality($score);

        // next: we have to claculate the easiness factor
        // we call the private function using this , this - refers to the class directly 
        //we pass the data topic and quality to the private function
        //easiness factor is calculated using the quality score and the previous easinessfactor which starts at 2.5 , 
        $newEF = $this->calculateEasinessFactor($topic,$quality);

        $newRepetitionCount = $this->repetitionCount($topic,$quality);

        $newInterval = $this->calculateInterval($topic,$quality,$newRepetitionCount,$newEF);

        $nextReviewDate = Carbon::today()->addDays($newInterval);
    }

    private function convertScoreToQuality($score){
        if ($score < 20) {
            return 0;
        }

        if ($score < 40) {
            return 1;
        }

        if ($score < 60) {
            return 2;
        }

        if ($score < 75) {
            return 3;
        }

        if ($score < 90) {
            return 4;
        }

        return 5;
    }

    private function calculateEasinessFactor ($topic,$quality){
        $ef = $topic->easiness_factor;

       $newEf = $ef + (
        0.1 - (5 - $quality) * (
            0.08 + (5 - $quality) * 0.02
        )
        );
    return max(1.3, $newEf);

    }

    private function repetitionCount ($topic, $quality){

        if($quality<3){
            return 0;
        }
  

        return $topic->repetition_count + 1;
    }

    private function calculateInterval($topic,$quality,$newRepetitionCount,$newEF){
        if ($quality < 3){
            return 1;
        }

        if($newRepetitionCount === 1){
            return 1;
        }

        if($newRepetitionCount === 2){
            return 6;
        }

        return round($topic->interval * $newEF);

    }
}