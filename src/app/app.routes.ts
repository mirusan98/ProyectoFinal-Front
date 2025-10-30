import { Routes } from '@angular/router';
import { Ejercicios } from './ejercicios/ejercicios';
import { Movies } from './movies/movies';
import { HeaderComponent } from './header/header';

export const routes: Routes = [
  
  { path: 'pelis', component: Movies },
  { path: 'ejercicios', component: Ejercicios }
];
