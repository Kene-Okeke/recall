<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StatsController extends Controller
{
    public function getTopics(Request $request)
    {
        $user = $request->user();

        $topics = $user->topics()
            ->with(['reviews' => function ($query) {
                $query->latest('created_at');
            }])
            ->get()
            ->filter(function ($topic) {
                return $topic->reviews->isNotEmpty();
            })
            ->map(function ($topic) {
                $latestReview = $topic->reviews->first();

                return [
                    'id' => $topic->id,
                    'title' => $topic->title,
                    'lastScore' => $latestReview->score,
                    'lastReviewed' => $latestReview->created_at->toDateString(),
                ];
            })
            ->sortByDesc('lastReviewed')
            ->values();

        return response()->json([
            'topics' => $topics,
        ]);


    }

     public function getTopicStats(Request $request, $topicId)
    {
        $user = $request->user();

        $topic = $user->topics()
            ->with('reviews')
            ->findOrFail($topicId);

        $reviews = $topic->reviews
            ->sortBy('created_at')
            ->values();

        $bestScore = $reviews->max('score');

        return response()->json([
            'topic' => [
                'id' => $topic->id,
                'title' => $topic->title,
                'repetitions' => $topic->repetition_count,
                'easeFactor' => $topic->easiness_factor,
                'bestScore' => $bestScore,
                'nextReview' => $topic->next_review_date,
            ],

            'reviews' => $reviews->map(function ($review) {
                return [
                    'date' => $review->created_at->toDateString(),
                    'score' => $review->score,
                ];
            })->values(),
        ]);
    }
}