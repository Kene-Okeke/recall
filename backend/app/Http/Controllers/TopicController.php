<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Topic;
use App\Models\User;

class TopicController extends Controller
{
    public function addTopic(Request $request){
        

        $data = $request->validate([
            'title' => 'required|string',
            'category' => 'required|string',
        ]);

        $topic = $request->user()->topics()->create([
            'title' => $data['title'],
            'category'=> $data['category'],
        ]);

        return response() -> json([
            'message' => 'Topic created successfully',
            'topic'=> $topic,
        ]);
    }
}
