import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../models/movies';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-movie-item',
  imports: [CommonModule, NgIf],
  templateUrl: './movie-item.html',
  styleUrl: './movie-item.css'
})

export class MovieItemComponent {

  @Input() movie!: Movie; 
  // todas las propiedades deben inicializarse en el constructor o marcarse como opcionales porque TypeScript tiene activado el modo estricto
  // Con el !, le dices a TypeScript: “confía en mí, Angular asignará esta propiedad antes de usarla”.
  @Output() movieSelected = new EventEmitter<string>();
  selectMovie(): void {
    if (this.movie && this.movie.title) {
      this.movieSelected.emit(this.movie.title);
    }
  }


}
