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
           print_r('dss');
            return view('account');
        }

    }
}
