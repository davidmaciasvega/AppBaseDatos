<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pelicula extends Model
{
    protected $table = 'peliculas';

    protected $fillable = [
        'titulo',
        'sinopsis',
        'anio',
        'portada'
    ];

    // Accessor para devolver la URL completa de la portada
    public function getPortadaAttribute($value)
    {
        return url('portadas/' . $value);
    }
}
