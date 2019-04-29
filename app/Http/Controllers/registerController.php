<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class registerController extends Controller
{
    public function index()
    {
        $country = DB::select('select * from countries ');
        return view('register',['country' => $country ]);
    }
}
