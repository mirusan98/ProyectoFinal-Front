import { Routes } from '@angular/router';
import { Ejercicios } from './ejercicios/ejercicios';
import { Movies } from './movies/movies';

export const routes: Routes = [
  
  { path: '', redirectTo: '/pelis', pathMatch: 'full' },
    { path: 'pelis', component: Movies },
  { path: 'ejercicios', component: Ejercicios }
];
