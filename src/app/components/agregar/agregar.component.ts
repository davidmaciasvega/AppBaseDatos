// src/app/components/agregar/agregar.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  // Inicializamos con id = 0 y anio = 0 para cumplir con la interfaz
  pelicula: Pelicula = {
    id: 0,
    titulo: '',
    sinopsis: '',
    anio: 0,
    portada: ''
  };

  error = '';
  exito = '';

  constructor(private peliculasService: PeliculasService, private router: Router) {}

  agregarPelicula() {
    this.peliculasService.agregarPelicula(this.pelicula).subscribe({
      next: () => {
        this.exito = 'Película agregada correctamente';
        // Redirige al listado de películas después de 1 segundo
        setTimeout(() => this.router.navigate(['/']), 1000);
      },
      error: (err: unknown) => {
        console.error(err);
        if (err instanceof Error) {
          this.error = err.message;
        } else if (typeof err === 'string') {
          this.error = err;
        } else {
          this.error = 'No se pudo agregar la película';
        }
      }
    });
  }
}
