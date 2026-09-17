
<?php 
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TopicController;
use App\Http\Controllers\ReviewController;


Route::middleware('web')->post('/login',[AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('/addTopic',[TopicController::class, 'addTopic']);
Route::middleware('auth:sanctum')->post('/review',[ReviewController::class, 'Review']);
