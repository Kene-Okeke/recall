<?php

namespace App\Models;
use App\Models\user;
use App\Models\Review;

use Illuminate\Database\Eloquent\Model;

class Topic extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }
}
