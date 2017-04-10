import { Component } from '@angular/core'
import { Movie } from './movie'
import { MovieService } from './movie.service'


@Component({
    selector: 'my-app',
    providers: [MovieService],
    templateUrl: './templates/rented.html',
})
export class RentedComponent {
    movies: Movie[];

    constructor(private movieService: MovieService) { }

    ngOnInit() {
        this.movieService.getRentedMovies().subscribe(
            data => this.movies = data,
            error => this.movies = []);
    }
}