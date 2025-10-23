import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { RouterLink } from '@angular/router';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './movie.component.html'
})
export class MovieComponent implements OnInit {
 pelicula: Pelicula | null = null;
  cargando = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private peliculasService: PeliculasService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.peliculasService.getPelicula(id).subscribe({
      next: (data) => {
        this.pelicula = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar película:', err);
        this.error = 'No se pudo cargar la película.';
        this.cargando = false;
      }
    });
  }
}
