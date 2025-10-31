import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../models/movies';


@Component({
  selector: 'app-movie-item',
  imports: [CommonModule],
  templateUrl: './movie-item.html',
  styleUrl: './movie-item.css'
})

export class MovieItemComponent {

  @Input() movie!: Movie; 
  // TypeScript tiene activado el modo estricto por eso tiene que ir el !, como asegurando que se va a asignar antes de usarla.
  @Output() movieSelected = new EventEmitter<string>();
  selectMovie(): void {
      this.movieSelected.emit(this.movie.title);
    
  }


}