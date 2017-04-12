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
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var MovieService = (function () {
    function MovieService(http) {
        this.http = http;
        this.http = http;
    }
    MovieService.prototype.getAvailableMovies = function () {
        return this.http.get("http://localhost:8080/available").map(function (response) { return response.json(); });
    };
    ;
    MovieService.prototype.getActiveRentings = function () {
        return this.http.get("http://localhost:8080/allRent").map(function (response) { return response.json(); });
    };
    ;
    MovieService.prototype.getRentedMovies = function () {
        return this.http.get("http://localhost:8080/rented").map(function (response) { return response.json(); });
    };
    ;
    MovieService.prototype.rentMovie = function (renting) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post("http://localhost:8080/rentMovie", JSON.stringify(renting), options).map(function (response) { return response.json(); });
    };
    ;
    MovieService.prototype.returnMovie = function (renting) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post("http://localhost:8080/returnMovie", JSON.stringify(renting), options).map(function (response) { return response.json(); });
    };
    ;
    MovieService.prototype.addMovie = function (movie) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post("http://localhost:8080/newMovie", JSON.stringify(movie), options).map(function (response) { return response.json(); });
    };
    ;
    MovieService.prototype.editMovie = function (movie) {
        this.http.post("http://localhost:8080/updateMovie", movie);
    };
    ;
    return MovieService;
}());
MovieService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MovieService);
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map