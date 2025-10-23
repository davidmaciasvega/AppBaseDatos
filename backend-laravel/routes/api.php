<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegistroController;


Route::get('/peliculas', [RegistroController::class, 'index']);      // Listar todas
Route::get('/peliculas/{id}', [RegistroController::class, 'show']);  // Mostrar una
Route::post('/peliculas', [RegistroController::class, 'store']);     // Insertar
Route::put('/peliculas/{id}', [RegistroController::class, 'update']); // Actualizar
Route::delete('/peliculas/{id}', [RegistroController::class, 'destroy']); // Eliminar
