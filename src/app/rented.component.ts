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
    public isDamaged: boolean;
    public isUncapped: boolean;
    public daysOfDelay: number;
    public chargeOfDelay: number;


    constructor(
        private movieService: MovieService
    ) { }

    private ngOnInit() {
        this.rentings = [];
        this.selectedRenting = new Renting(null, null, null, null, null, new Movie(null, null, null, null, null, null, null, null, null, null), 0);
        this.isDamaged = false;
        this.isUncapped = false;
        this.daysOfDelay = 0;
        this.chargeOfDelay = 0;
        this.movieService.getActiveRentings().subscribe(
            data => this.rentings = data,
            error => this.rentings = []);
    }

    private resetSelectedRenting() {
        this.selectedRenting = new Renting(null, null, null, null, null, new Movie(null, null, null, null, null, null, null, null, null, null), 0);
    }

    private getRentingByMovieId(id: number): Renting {
        for (let renting of this.rentings) {
            if (renting.movie.id == id) {
                return renting;
            }
        }
        return null;
    }

    private selectRenting(renting: Renting) {
        this.selectedRenting = renting;
    }

    changeDamaged() {
        if (this.isDamaged)
            this.changeCharge(20);
        else
            this.changeCharge(-20);
    }

    changeUncapped() {
        if (this.isUncapped)
            this.changeCharge(10);
        else
            this.changeCharge(-10);
    }

    getRentings(): Renting[] {
        return this.rentings;
    }

    getSelectedRenting(): Renting {
        return this.selectedRenting;
    }

    focusOnRenting(id: number) {
        this.resetSelectedRenting();
        let renting: Renting = this.getRentingByMovieId(id);
        this.selectRenting(renting);
        let timeDiff = Math.abs(this.selectedRenting.rentingDate - new Date().getTime());
        if (timeDiff >= 345600000) {
            this.daysOfDelay = Math.ceil(timeDiff / (1000 * 3600 * 24)) - 4;
            this.chargeOfDelay = 5 * this.daysOfDelay;
            this.changeCharge(this.chargeOfDelay);
        }
    }

    returnMovie(id: number) {
        this.selectedRenting = this.getRentingByMovieId(id);
        if (this.selectedRenting == null) {
            return console.log("Could not find movie to return");
        }

        this.movieService.returnMovie(this.selectedRenting).subscribe(
            data => this.selectedRenting = data,
            error => this.resetSelectedRenting());
        this.rentings.splice(this.rentings.indexOf(this.selectedRenting), 1);
        this.isDamaged = false;
        this.isUncapped = false;
    }

    changeCharge(amount: number) {
        this.selectedRenting.charge += amount;
    }

}