<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Topic;

class Review extends Model
{

    protected $fillable = ['score','notes'];

    public function topic()
    {
        return $this->belongsTo(Topic::class);
    }
}
