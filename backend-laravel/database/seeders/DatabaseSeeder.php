<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Ejecutar los seeders de la base de datos.
     */
    public function run(): void
    {
        // Crear un usuario de prueba directamente
        User::factory()->create([
            'name' => 'Usuario de Prueba',
            'email' => 'test@example.com',
        ]);

        // Llamar al seeder de películas
        $this->call(PeliculasSeeder::class);
    }
}
