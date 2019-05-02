<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Auth;
use App\User;
use Hash;

class registerController extends Controller
{


    public function index()
    {
        if (Auth::user()){
            return redirect()->route('account');
        }
        $country = DB::select('select * from countries ');
        return view('register',['country_data' => $country ]);
    }

    public function register(Request $request)
    {

        $rules = [
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
            'gender' => 'required',
            'month' => 'required',
            'day' => 'required',
            'year' => 'required',
            'country' => 'required'
        ];

        $message = [
            'name.required' => 'This field required.',
            'email.required' => 'This field required.',
            'email.unique' => 'Email already exists.',
            'password.min' => 'Password must be 6 char',
            'gender.required' => 'This field required.',
            'month.required' => 'This field required.',
            'day.required' => 'This field required.',
            'year.required' => 'This field required.',
            'country.required' => 'This field required.'
        ];

        $validatedData = $request->validate($rules,$message);

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        User::create($input);


        if (Auth::attempt($request->only('email', 'password'))) {
            return redirect()
                ->route('account')
                ->with('Welcome! Your account has been successfully created!');
        }

    }
}
