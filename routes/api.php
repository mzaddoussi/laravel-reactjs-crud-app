<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('member', 'App\Http\Controllers\MemberController');
Route::get('member/{id}', 'App\Http\Controllers\MemberController@show');
Route::put('member/{id}', 'App\Http\Controllers\MemberController@update');
Route::delete('member/{id}', 'App\Http\Controllers\MemberController@destroy');
