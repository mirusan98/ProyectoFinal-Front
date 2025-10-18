import { Routes } from '@angular/router';
import { Ejercicios } from './ejercicios/ejercicios';
import { Movies } from './movies/movies';

export const routes: Routes = [
    { path: 'peliculas', component: Movies },
  { path: 'ejercicios', component: Ejercicios }
];
