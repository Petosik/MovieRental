export class Movie {
    constructor(
        public id: number,
        public modificationCounter: number,
        public title: string,
        public director: string,
        public genre: string,
        public releaseYear: number,
        public productionCountry: string,
        public duration: number,
        public movieCoverUrl: string,
        public rented: boolean,
    ) { }

}