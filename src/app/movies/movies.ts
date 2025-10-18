import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from '../movie-list/movie-list';

@Component({
  selector: 'app-movies',
  imports: [ CommonModule, MovieListComponent],
  templateUrl: './movies.html',
})
export class Movies {

}
