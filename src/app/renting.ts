import { Movie } from './movie'
export class Renting {
    constructor(
        public id: number,
        public modificationCounter: number,
        public renterPeselNumber: String,
        public rentingDate: Date,
        public returningDate: Date,
        public movie: Movie,
        public charge: number
    ) { }

    public changeCharge(amount: number) {
        this.charge += amount;
    }
}