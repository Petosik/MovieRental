"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var movie_1 = require("./movie");
var renting_1 = require("./renting");
var movie_service_1 = require("./movie.service");
var ListComponent = (function () {
    function ListComponent(movieService) {
        this.movieService = movieService;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movies = [];
        this.selectedMovie = new movie_1.Movie(null, null, null, null, null, null, null, null, null, null);
        this.order = 'title';
        this.reverse = false;
        this.renterPesel = "";
        this.resetSelectedMovie();
        this.movieService.getAvailableMovies().subscribe(function (data) { return _this.movies = data; }, function (error) { return _this.movies = []; });
    };
    ListComponent.prototype.getMovieFromList = function (id) {
        for (var _i = 0, _a = this.movies; _i < _a.length; _i++) {
            var movie = _a[_i];
            if (movie.id == id) {
                return movie;
            }
        }
        return null;
    };
    ListComponent.prototype.selectMovie = function (movie) {
        this.selectedMovie = movie;
    };
    ListComponent.prototype.resetSelectedMovie = function () {
        this.selectMovie(new movie_1.Movie(null, null, null, null, null, null, null, null, null, null));
    };
    ListComponent.prototype.getMovies = function () {
        return this.movies;
    };
    ListComponent.prototype.getSelectedMovie = function () {
        return this.selectedMovie;
    };
    ListComponent.prototype.getOrder = function () {
        return this.order;
    };
    ListComponent.prototype.isReverse = function () {
        return this.reverse;
    };
    ListComponent.prototype.getRenterPesel = function () {
        return this.renterPesel;
    };
    ListComponent.prototype.focusOnMovie = function (id) {
        this.renterPesel = "";
        var movie = this.getMovieFromList(id);
        this.selectMovie(movie);
    };
    ListComponent.prototype.addMovie = function () {
        var _this = this;
        this.movieService.addMovie(this.selectedMovie).subscribe(function (data) {
            _this.movies.push(data);
        }, function (error) { return _this.resetSelectedMovie(); });
        this.resetSelectedMovie();
    };
    ListComponent.prototype.editMovie = function () {
        var _this = this;
        this.movieService.editMovie(this.selectedMovie).subscribe(function (data) { return _this.selectedMovie = data; }, function (error) { return _this.resetSelectedMovie(); });
        this.resetSelectedMovie();
    };
    ListComponent.prototype.rentMovie = function () {
        var _this = this;
        if (this.selectedMovie == null) {
            return console.log("Could not find movie to rent");
        }
        var movieRenting = new renting_1.Renting(null, null, this.renterPesel, null, null, this.selectedMovie, 0);
        this.movieService.rentMovie(movieRenting).subscribe(function (data) {
            _this.selectMovie(data.movie);
        }, function (error) { return _this.resetSelectedMovie(); });
        if (this.getMovieFromList(this.selectedMovie.id) == this.selectedMovie) {
            this.movies.splice(this.movies.indexOf(this.selectedMovie), 1);
        }
        this.resetSelectedMovie();
    };
    ListComponent.prototype.sortByName = function () {
        if (this.order == "title") {
            this.reverse = !this.reverse;
        }
        else {
            this.reverse = false;
            this.order = "title";
        }
    };
    ListComponent.prototype.sortByReleaseYear = function () {
        if (this.order == "release year") {
            this.reverse = !this.reverse;
        }
        else {
            this.reverse = false;
            this.order = "release year";
        }
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        providers: [movie_service_1.MovieService],
        templateUrl: './templates/list.html',
    }),
    __metadata("design:paramtypes", [movie_service_1.MovieService])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map