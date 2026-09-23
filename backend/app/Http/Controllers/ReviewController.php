<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\SpacedRepetitionService;


class ReviewController extends Controller
{
    function Review(Request $request, SpacedRepetiionService $service){

       $data = $request->validate([
        'score' => 'required|integer|min:0|max:100',
        'notes' => 'nullable|string',
        'topic_id'=>'required|integer'
       
       ]);

       $topic = $request->user()
       ->topics()
       ->findOrFail($data['topic_id']);
       ;

       $review = $topic->reviews()->create([
        'score' => $data['score'],
        'notes' => $data['notes'] ?? null,
       ]);

       $service->process($topic, $data['score']);

       return response->json([
        'message' => 'Review completed successfully'
       ]);

    }
}
