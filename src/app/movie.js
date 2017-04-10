"use strict";
var Movie = (function () {
    function Movie(_id, _title, _director, _genre, _productionCountry, _duration, _isRented, _movieCoverUrl, _releaseYear) {
        this.id = _id;
        this.title = _title;
        this.director = _director;
        this.genre = _genre;
        this.productionCountry = _productionCountry;
        this.duration = _duration;
        this.isRented = _isRented;
        this.movieCoverUrl = _movieCoverUrl;
        this.releaseYear = _releaseYear;
    }
    ;
    return Movie;
}());
exports.Movie = Movie;
//# sourceMappingURL=movie.js.map