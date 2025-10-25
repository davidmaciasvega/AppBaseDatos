// src/app/components/editar/editar.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  // Inicializamos la película con valores por defecto
  pelicula: Pelicula = {
    id: 0,
    titulo: '',
    sinopsis: '',
    anio: 0,
    portada: ''
  };

  error = '';
  exito = '';

  constructor(
    private route: ActivatedRoute,
    private peliculasService: PeliculasService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.peliculasService.getPelicula(id).subscribe({
      next: (data) => this.pelicula = data,
      error: (err) => {
        console.error(err);
        this.error = 'No se pudo cargar la película';
      }
    });
  }

  actualizarPelicula() {
    this.peliculasService.actualizarPelicula(this.pelicula.id, this.pelicula).subscribe({
      next: () => {
        this.exito = 'Película actualizada correctamente';
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
          this.error = 'No se pudo actualizar la película';
        }
      }
    });
  }
}
