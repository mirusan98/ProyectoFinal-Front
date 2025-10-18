import { Component } from '@angular/core';
import { MovieItem } from '../movie-item/movie-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  imports: [MovieItem, CommonModule],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css'
})

export class MovieList {
  movies = [
    { title: 'El Padrino', year: 1972, description: 'La historia de la familia mafiosa Corleone.' },
    { title: 'Forrest Gump', year: 1994, description: 'La vida extraordinaria de un hombre común.' },
    { title: 'Inception', year: 2010, description: 'Un ladrón que roba secretos a través de los sueños.' },
    { title: 'La La Land', year: 2016, description: 'Una historia de amor en Los Ángeles.' },
    { title: 'El Señor de los Anillos', year: 2001, description: 'La aventura épica para destruir un anillo poderoso.' },
    { title: 'Titanic', year: 1997, description: 'El romance a bordo del fatídico barco.' },
    { title: 'Gladiador', year: 2000, description: 'Un general romano convertido en gladiador.' },
    { title: 'Avatar', year: 2009, description: 'La lucha por Pandora entre humanos y nativos.' },
    { title: 'Jurassic Park', year: 1993, description: 'Un parque temático con dinosaurios clonados.' },
    { title: 'Matrix', year: 1999, description: 'La realidad es una simulación controlada por máquinas.' }
  ];
  selectedMovie: string = '';
  onMovieSelected(movieTitle: string) {
    this.selectedMovie = movieTitle;
  }
  

}
