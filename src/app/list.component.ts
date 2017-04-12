import { Component } from '@angular/core'
import { Observable } from 'rxjs/Observable';

import { Movie } from './movie'
import { Renting } from './renting'
import { MovieService } from './movie.service'

@Component({
    selector: 'my-app',
    providers: [MovieService],
    templateUrl: './templates/list.html',
})
export class ListComponent {
    private selectedMovie: Movie;
    private movies: Movie[];

    constructor(
        private movieService: MovieService,
    ) { }

    private ngOnInit() {
        this.movies = [];
        this.selectedMovie = new Movie(null, null, null, null, null, null, null, null, null, null);
        this.resetSelectedMovie();
        this.movieService.getAvailableMovies().subscribe(
            data => this.movies = data,
            error => this.movies = []);
    }

    private selectMovie(movie: Movie) {
        this.selectedMovie = movie;
    }

    private resetSelectedMovie() {
        this.selectMovie(new Movie(null, null, null, null, null, null, null, null, null, null));
    }

    private getMovieFromList(id: number): Movie {
        for (let movie of this.movies) {
            if (movie.id == id) {
                return movie;
            }
        }
        return null;
    }

    addMovie() {
        this.movieService.addMovie(this.selectedMovie).subscribe(
            data => {
                this.movies.push(data);
            },
            error => this.resetSelectedMovie());
        this.resetSelectedMovie();
    }

    editMovie(movie: Movie) {
        this.movieService.editMovie(movie);
    }

    rentMovie(id: number) {
        this.selectMovie(this.getMovieFromList(id));
        if (this.selectedMovie == null) {
            return console.log("Could not find movie to rent");
        }
        let movieRenting = new Renting(null, null, "123123123", null, null, this.selectedMovie);
        this.movieService.rentMovie(movieRenting).subscribe(
            data => {
                this.selectMovie(data.movie);
            },
            error => this.resetSelectedMovie());
        if (this.getMovieFromList(this.selectedMovie.id) == this.selectedMovie) {
            this.movies.splice(this.movies.indexOf(this.selectedMovie), 1);
        }
        this.resetSelectedMovie();
    }
}