import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './movies.component.html'
})
export class MoviesComponent implements OnInit {
  peliculas: Pelicula[] = [];
  cargando = true;
  error = '';

  constructor(private peliculasService: PeliculasService, private router: Router) {}

  ngOnInit() {
    this.cargarPeliculas();
  }

  cargarPeliculas() {
    this.cargando = true;
    this.peliculasService.getPeliculas().subscribe({
      next: (data) => {
        this.peliculas = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar películas:', err);
        this.error = 'No se pudo cargar el catálogo.';
        this.cargando = false;
      }
    });
  }

  eliminarPelicula(id: number) {
    if (!confirm('¿Deseas eliminar esta película?')) return;

    this.peliculasService.eliminarPelicula(id).subscribe({
      next: () => {
        alert('Película eliminada correctamente');
        this.cargarPeliculas(); // recarga la lista
      },
      error: (err) => {
        console.error('Error al eliminar:', err);
        alert('No se pudo eliminar la película');
      }
    });
  }
}
