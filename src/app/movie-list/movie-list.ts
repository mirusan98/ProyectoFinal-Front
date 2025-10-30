import { Component, OnInit, output } from '@angular/core';
import { Movie } from '../models/movies';
import { MovieService } from '../services/movie';
import { MovieItemComponent } from "../movie-item/movie-item";
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  templateUrl: './movie-list.html',
  styleUrls: ['./movie-list.css'],
  imports: [MovieItemComponent, NgIf, NgFor]
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  movieSelected: string = '';


  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    // Llama a las películas desde el servicio
     console.log('🔹 ngOnInit ejecutado');
    this.movies = this.movieService.getMovies();
    console.log('Películas cargadas:', this.movies);
  }

  onMovieSelected(movie: Movie) {
    this.movieSelected = movie.title;
  }

 /*  trackByTitle(index: number, item: Movie): string {
    return item.title;
  } */
}
