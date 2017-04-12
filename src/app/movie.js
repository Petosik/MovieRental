"use strict";
var Movie = (function () {
    function Movie(id, modificationCounter, title, director, genre, releaseYear, productionCountry, duration, movieCoverUrl, rented) {
        this.id = id;
        this.modificationCounter = modificationCounter;
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.productionCountry = productionCountry;
        this.duration = duration;
        this.movieCoverUrl = movieCoverUrl;
        this.rented = rented;
    }
    return Movie;
}());
exports.Movie = Movie;
//# sourceMappingURL=movie.js.map