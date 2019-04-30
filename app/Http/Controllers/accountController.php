<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\User;


class accountController extends Controller
{
    public function index()
    {
        if ( Auth::user() )
        {
            return view('account');
        }else{
            return redirect()->route('register_page');
        }

    }

    public function logOut()
    {
        Auth::logout();
        redirect()->route('register_page');
    }
}
