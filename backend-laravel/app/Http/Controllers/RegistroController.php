<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pelicula;

class RegistroController extends Controller
{
    // GET: listar todas
    public function index()
    {
        return response()->json(Pelicula::all(), 200);
    }

    // GET: Listar por /{id}
    public function show($id)
    {
        $pelicula = Pelicula::find($id);

        if (!$pelicula) {
            return response()->json(['message' => 'Película no encontrada'], 404);
        }

        return response()->json($pelicula, 200);
    }

    // POST: insertar nueva
    public function store(Request $request)
    {
        $pelicula = Pelicula::create([
            'titulo'   => $request->input('titulo'),
            'sinopsis' => $request->input('sinopsis'),
            'anio'     => $request->input('anio'),
            'portada'  => $request->input('portada')
        ]);

        return response()->json(['message' => 'Película agregada con éxito', 'data' => $pelicula], 201);
    }

    // PUT: (actualizar)
    public function update(Request $request, $id)
    {
        $pelicula = Pelicula::find($id);

        if (!$pelicula) {
            return response()->json(['message' => 'Película no encontrada'], 404);
        }

        $pelicula->titulo   = $request->input('titulo', $pelicula->titulo);
        $pelicula->sinopsis = $request->input('sinopsis', $pelicula->sinopsis);
        $pelicula->anio     = $request->input('anio', $pelicula->anio);
        $pelicula->portada  = $request->input('portada', $pelicula->portada);

        $pelicula->save();

        return response()->json(['message' => 'Película actualizada', 'data' => $pelicula], 200);
    }

    // DELETE: (eliminar)
    public function destroy($id)
    {
        $pelicula = Pelicula::find($id);

        if (!$pelicula) {
            return response()->json(['message' => 'Película no encontrada'], 404);
        }

        $pelicula->delete();

        return response()->json(['message' => 'Película eliminada'], 200);
    }
}
