<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Redirect;
use App\User;
use Hash;

class loginController extends Controller
{
    public function login(Request $request)
    {



        $rules = ['login_email' => 'required','login_password' => 'required|min:6'];
        $message = [
            'login_email.required' => 'This field required.',
            'login_password.min' => 'Password must be 6 char',
            'login_password.required' => 'This field required'
        ];
        $validatedData = $request->validate($rules,$message);

        $credentials =[
            'email' =>   $request->input('login_email'),
            'password' =>   $request->input('login_password')
        ];
        if (Auth::attempt($credentials)) {
            return redirect()
                ->route('account');
        }else{
            return redirect()
                ->route('register');
        }

    }

}
