export class Movie {
    id: number;
    title: string;
    director: string;
    genre: string;
    productionCountry: string;
    duration: number;
    isRented: boolean;
    movieCoverUrl: string;
    releaseYear: number;

    constructor(
        _id: number,
        _title: string,
        _director: string,
        _genre: string,
        _productionCountry: string,
        _duration: number,
        _isRented: boolean,
        _movieCoverUrl: string,
        _releaseYear: number
    ) {
        this.id = _id;
        this.title = _title;
        this.director = _director;
        this.genre = _genre;
        this.productionCountry = _productionCountry;
        this.duration = _duration;
        this.isRented = _isRented;
        this.movieCoverUrl = _movieCoverUrl;
        this.releaseYear = _releaseYear;
    };
}