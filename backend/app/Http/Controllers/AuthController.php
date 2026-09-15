<?php
namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request){

        $credentials = $request->validate([
            'email'=> 'required|email',
            'password'=>'required',
        ]);

        if(Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return response()->json([
                'message' => 'Login successful',
            ]);
        }

        return response()->json([
            'message'=> 'Invalid credentials',
        ], 401);
    }
}
