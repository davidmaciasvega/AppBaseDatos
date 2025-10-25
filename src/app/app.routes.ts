import { Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { EditarComponent } from './components/editar/editar.component';

export const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: 'agregar', component: AgregarComponent },
  { path: 'editar/:id', component: EditarComponent },
  { path: '**', redirectTo: '' }
];
