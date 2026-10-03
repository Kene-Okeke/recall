<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Hidden;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Models\Topic;
use App\Models\StudySchedule;
use App\Models\SessionSize;

#[Fillable(['name', 'email', 'password'])]
#[Hidden(['password', 'remember_token'])]

class User extends Authenticatable
{
    protected $fillable = [
        'username',
        'email',
        'password',
        'streak',
        'last_streak_date',
    ];
    /** @use HasFactory<UserFactory> */
    use HasFactory, Notifiable;

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'last_streak_date' => 'datetime',
        ];
    }

    public function topics()
    {
        return $this->hasMany(Topic::class);
    }

    public function studySchedules()
    {
        return $this->hasMany(StudySchedule::class);
    }

    public function sessionSize(){
        return $this->hasOne(SessionSize::class);
    }
}
