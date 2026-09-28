<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class SessionSize extends Model
{
    protected $fillable = [
        'topics_per_session',
    ];
    public function user(){
        return $this->belongsTo(User::class);
    }
}
