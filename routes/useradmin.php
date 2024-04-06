<?php

use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/login', function () {
    return Inertia::render('Login');
})->name('login');

Route::post('/doRegister', function (Request $request) {
    $email = $request->input('email');
    $password = $request->input('password');
    if (empty($email) || empty($password)) {
        return ['code' => -1, 'msg' => '用户名或者密码不能为空'];
    }

    $customer = Customer::where('email', $email)->first();
    if ($customer != null) {
        return ['code' => -1, 'msg' => '已存在的用户'];
    }
    Customer::create([
        'email' => $email,
        'password' => $password,
        'user_name' => explode('@', $email)[0]
    ]);
    session(['user' => $customer]);
    return ['code' => 0, 'msg' => '操作成功'];

});


Route::post('/doLogin', function (Request $request) {
    $email = $request->input('email');
    $password = $request->input('password');
    if (empty($email) || empty($password)) {
        return ['code' => -1, 'msg' => '用户名或者密码不能为空'];
    }
    $customer = Customer::where(['email' => $email, 'password' => $password])->first();
    if ($customer == null) {
        return ['code' => -1, 'msg' => '用户名或者密码错误'];
    }
    session(['user' => $customer]);
    return ['code' => 0, 'msg' => '操作成功'];

});


Route::any('/logout', function (Request $request) {
    $request->session()->forget('user');
    return redirect('/login');

});


Route::get('/register', function () {
    return Inertia::render('Register');
})->name('register');



//Route::middleware('myauth')->prefix("admin")->group(function () {
//    Route::get('/', function (){
//        return Inertia::render('Index');
//    });
//
//});


Route::prefix("admin")->group(function () {
    Route::get('/', function (){
        return Inertia::render('Index');
    });
});

