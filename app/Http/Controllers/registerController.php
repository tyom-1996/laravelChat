<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\User;
use Hash;

class registerController extends Controller
{

    public function index()
    {
        $country = DB::select('select * from countries ');

        $country_options = '';

        for($i = 0; $i < count($country); $i++ ){
             $name = $country[$i]->country_name;
            $country_options .= "<option value='$name'>$name </option>";
        }

        return view('register',['country_options' => $country_options ]);
    }

    public function register(Request $request)
    {

        $validatedData = $request->validate([
            'email' => 'required|email|unique:users'
        ]);

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        User::create($input);


        if (Auth::attempt($request->only('email', 'password'))) {
            return redirect()
                ->route('account')
                ->with('Welcome! Your account has been successfully created!');
        }
//        return redirect()->to('/account');
    }
}
