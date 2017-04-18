import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { Movie } from './movie';
import { Renting } from './renting';
import { MovieService } from './movie.service';

@Component({
    selector: 'my-app',
    providers: [MovieService],
    templateUrl: './templates/list.html',
})
export class ListComponent {
    private selectedMovie: Movie;
    private movies: Movie[];
    private order: string;
    private reverse: boolean;
    private renterPesel: string;

    constructor(
        private movieService: MovieService,
    ) { }

    private ngOnInit() {
        this.movies = [];
        this.selectedMovie = new Movie(null, null, null, null, null, null, null, null, null, null);
        this.order = 'title';
        this.reverse = false;
        this.renterPesel = "";
        this.resetSelectedMovie();
        this.movieService.getAvailableMovies().subscribe(
            data => this.movies = data,
            error => this.movies = []);
    }

    private getMovieFromList(id: number): Movie {
        for (let movie of this.movies) {
            if (movie.id == id) {
                return movie;
            }
        }
        return null;
    }

    selectMovie(movie: Movie) {
        this.selectedMovie = movie;
    }

    resetSelectedMovie() {
        this.selectMovie(new Movie(null, null, null, null, null, null, null, null, null, null));
    }

    getMovies(): Movie[] {
        return this.movies;
    }

    getSelectedMovie(): Movie {
        return this.selectedMovie;
    }

    getOrder(): string {
        return this.order;
    }

    isReverse(): boolean {
        return this.reverse;
    }

    getRenterPesel(): string {
        return this.renterPesel;
    }

    focusOnMovie(id: number) {
        this.renterPesel = "";
        let movie: Movie = this.getMovieFromList(id);
        this.selectMovie(movie);
    }

    addMovie() {
        this.movieService.addMovie(this.selectedMovie).subscribe(
            data => {
                this.movies.push(data);
            },
            error => this.resetSelectedMovie());
        this.resetSelectedMovie();
    }

    editMovie() {
        this.movieService.editMovie(this.selectedMovie).subscribe(
            data => this.selectedMovie = data,
            error => this.resetSelectedMovie()
        );
        this.resetSelectedMovie();
    }

    rentMovie() {
        if (this.selectedMovie == null) {
            return console.log("Could not find movie to rent");
        }
        let movieRenting = new Renting(null, null, this.renterPesel, null, null, this.selectedMovie, 0);
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

    sortByName() {
        if (this.order == "title") {
            this.reverse = !this.reverse;
        }
        else {
            this.reverse = false;
            this.order = "title";
        }
    }

    sortByReleaseYear() {
        if (this.order == "release year") {
            this.reverse = !this.reverse;
        }
        else {
            this.reverse = false;
            this.order = "release year";
        }
    }
}