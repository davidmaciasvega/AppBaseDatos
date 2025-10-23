<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PeliculasSeeder extends Seeder
{
    public function run()
    {
        DB::table('peliculas')->insert([
            ['titulo' => 'Volver al Futuro', 'sinopsis' => 'Un adolescente viaja 30 años al pasado en una máquina del tiempo.', 'anio' => 1985, 'portada' => 'backtothefuture.jpg'],
            ['titulo' => 'Volver al Futuro II', 'sinopsis' => 'Marty y Doc viajan al 2015 para evitar un desastre en el futuro.', 'anio' => 1989, 'portada' => 'backtothefuture2.jpg'],
            ['titulo' => 'Volver al Futuro III', 'sinopsis' => 'Marty viaja al viejo oeste para rescatar al Doc Brown.', 'anio' => 1990, 'portada' => 'backtothefuture3.jpg'],
            ['titulo' => 'Búsqueda Implacable', 'sinopsis' => 'Un ex-agente viaja a París para rescatar a su hija secuestrada.', 'anio' => 2008, 'portada' => 'taken.jpg'],
            ['titulo' => 'Forrest Gump', 'sinopsis' => 'La historia de un hombre sencillo con experiencias extraordinarias.', 'anio' => 1994, 'portada' => 'forrestgump.jpg'],
            ['titulo' => 'Tiburón', 'sinopsis' => 'Un jefe de policía caza un gran tiburón blanco que aterroriza un pueblo costero.', 'anio' => 1975, 'portada' => 'jaws.jpg'],
            ['titulo' => 'Super Mario Bros: La Película', 'sinopsis' => 'Los hermanos Mario y Luigi se embarcan en una aventura en el Reino Champiñón.', 'anio' => 2023, 'portada' => 'supermariobrosmovie.jpg'],
            ['titulo' => 'Monster House', 'sinopsis' => 'Tres amigos descubren que la casa de su vecino es en realidad un monstruo.', 'anio' => 2006, 'portada' => 'monsterhouse.jpg'],
            ['titulo' => 'Space Jam', 'sinopsis' => 'Michael Jordan se une a los Looney Tunes para un partido de baloncesto crucial.', 'anio' => 1996, 'portada' => 'spacejam.jpg'],
            ['titulo' => 'Matrix', 'sinopsis' => 'Un hacker descubre que la realidad es una simulación controlada por máquinas.', 'anio' => 1999, 'portada' => 'matrix.jpg'],
        ]);
    }
}
