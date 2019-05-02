<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/',function(){
    return redirect()->route('register');
});

//REGISTER
Route::get('/register','registerController@index')->name('register_page');
Route::post('/register','registerController@register')->name('register');


//LOGIN
Route::post('/login','loginController@login');


//Account
Route::get('/account','accountController@index')->name('account');
Route::get('/logout','accountController@logOut')->name('logout');
