<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

Route::get('migration', function () {
    return DB::table('migrations')->take(2)->get();
});
