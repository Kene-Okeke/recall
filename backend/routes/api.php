
<?php 
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TopicController;

Route::middleware('web')->post('/login',[AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('/addTopic',[TopicController::class, 'addTopic']);