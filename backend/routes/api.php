
<?php 
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TopicController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\SessionSizeController;
use App\Http\Controllers\ScheduleController;
use App\Http\Controllers\QueueController;
use App\Http\Controllers\StreakController;
use App\Http\Controllers\StatsController;
use Illuminate\Http\Request;



Route::post('/login',[AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('/addTopic',[TopicController::class, 'addTopic']);
Route::middleware('auth:sanctum')->post('/review',[ReviewController::class, 'Review']);
Route::middleware('auth:sanctum')->get('/showQueue',[QueueController::class, 'showQueue']);
Route::middleware('auth:sanctum')->post('/saveSessionSize',[SessionSizeController::class, 'saveSessionSize']);
Route::middleware('auth:sanctum')->post('saveSchedule',[ScheduleController::class, 'saveSchedule']);
Route::post('/create-account', [AuthController::class, 'createAccount']);
Route::middleware('auth:sanctum')->get('/getStreak', [StreakController::class, 'getStreak']);
Route::middleware('auth:sanctum')->get(
    '/stats/topics',
    [StatsController::class, 'getTopics']
);
Route::middleware('auth:sanctum')->get(
    '/stats/topics/{topicId}',
    [StatsController::class, 'getTopicStats']
);
Route::middleware('auth:sanctum')->post('/logout', function (Request $request) {
    $request->user()->currentAccessToken()?->delete();

    return response()->json([
        'message' => 'Logged out successfully'
    ]);
});
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return response()->json([
        'user' => $request->user(),
    ]);
});