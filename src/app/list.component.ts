import { Component } from '@angular/core'
import { Observable } from 'rxjs/Observable';

import { Movie } from './movie'
import { MovieService } from './movie.service'

@Component({
    selector: 'my-app',
    providers: [MovieService],
    templateUrl: './templates/list.html',
})
export class ListComponent {
    movies: Movie[] = [];
    selectedMovie: Movie;

    addMovie() {
        this.movieService.addMovie(this.selectedMovie).subscribe(
            data => this.movies.push(data),
            error => this.selectedMovie = null);
    }

    editMovie(movie: Movie) {
        this.movieService.editMovie(movie);
    }

    constructor(private movieService: MovieService) { }

    ngOnInit() {
        this.selectedMovie = new Movie(null, null, null, null, null, null, false, null, null);
        this.movieService.getAvailableMovies().subscribe(
            data => this.movies = data,
            error => this.movies = []);
    }

    selectMovie(movie: Movie) { this.selectedMovie = movie; }

}