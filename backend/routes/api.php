
<?php 
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TopicController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\SessionSizeController;
use App\Http\Controllers\ScheduleController;
use App\Http\Controllers\QueueController;


Route::middleware('web')->post('/login',[AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('/addTopic',[TopicController::class, 'addTopic']);
Route::middleware('auth:sanctum')->post('/review',[ReviewController::class, 'Review']);
Route::middleware('auth:sanctum')->get('/showQueue',[QueueController::class, 'showQueue']);
Route::middleware('auth:sanctum')->post('/saveSessionSize',[SessionSizeController::class, 'saveSessionSize']);
Route::middleware('auth:sanctum')->post('saveSchedule',[ScheduleController::class, 'saveSchedule']);
Route::post('/create-account', [AuthController::class, 'createAccount']);

