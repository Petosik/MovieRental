import { Component } from '@angular/core'
import { Movie } from './movie'
import { Renting } from './renting'
import { MovieService } from './movie.service'


@Component({
    selector: 'my-app',
    providers: [MovieService],
    templateUrl: './templates/rented.html',
})
export class RentedComponent {
    private selectedRenting: Renting;
    private rentings: Renting[];

    constructor(
        private movieService: MovieService
    ) { }

    private ngOnInit() {
        this.rentings = [];
        this.selectedRenting = new Renting(null, null, null, null, null, null);
        this.movieService.getActiveRentings().subscribe(
            data => this.rentings = data,
            error => this.rentings = []);
    }

    private resetSelectedMovie() {
        this.selectedRenting = new Renting(null, null, null, null, null, null);
    }

    private getRentingByMovieId(id: number): Renting {
        for (let renting of this.rentings) {
            if (renting.movie.id == id) {
                return renting;
            }
        }
        return null;
    }

    returnMovie(id: number) {
        this.selectedRenting = this.getRentingByMovieId(id);
        if (this.selectedRenting == null) {
            return console.log("Could not find movie to return");
        }

        this.movieService.returnMovie(this.selectedRenting).subscribe(
            data => this.selectedRenting = data,
            error => this.selectedRenting = null);
        this.rentings.splice(this.rentings.indexOf(this.selectedRenting), 1);
        this.resetSelectedMovie();
    }
}