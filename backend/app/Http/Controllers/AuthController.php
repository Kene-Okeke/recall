<?php
namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request){

        $credentials = $request->validate([
            'email'=> 'required|email',
            'password'=>'required',
        ]);

       if (Auth::attempt($credentials)) {
            $user = Auth::user();

            $token = $user->createToken('recall')->plainTextToken;

            return response()->json([
            'message' => 'Login successful',
            'token' => $token,
            ]);
        }

        return response()->json([
            'message'=> 'Invalid credentials',
        ], 401);
    }

    public function createAccount(Request $request)
    {
        $credentials = $request->validate([
            'username' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string',
        ]);

        $user = User::create([
            'name' => $credentials['username'],
            'email' => $credentials['email'],
            'password' => Hash::make($credentials['password']),
        ]);

        $token = $user->createToken('recall')->plainTextToken;

        return response()->json([
            'message' => 'Account created successfully',
            'token' => $token,
        ], 201);
    }
}
