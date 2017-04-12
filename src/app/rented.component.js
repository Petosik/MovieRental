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
var renting_1 = require("./renting");
var movie_service_1 = require("./movie.service");
var RentedComponent = (function () {
    function RentedComponent(movieService) {
        this.movieService = movieService;
    }
    RentedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rentings = [];
        this.selectedRenting = new renting_1.Renting(null, null, null, null, null, null);
        this.movieService.getActiveRentings().subscribe(function (data) { return _this.rentings = data; }, function (error) { return _this.rentings = []; });
    };
    RentedComponent.prototype.resetSelectedMovie = function () {
        this.selectedRenting = new renting_1.Renting(null, null, null, null, null, null);
    };
    RentedComponent.prototype.getRentingByMovieId = function (id) {
        for (var _i = 0, _a = this.rentings; _i < _a.length; _i++) {
            var renting = _a[_i];
            if (renting.movie.id == id) {
                return renting;
            }
        }
        return null;
    };
    RentedComponent.prototype.returnMovie = function (id) {
        var _this = this;
        this.selectedRenting = this.getRentingByMovieId(id);
        if (this.selectedRenting == null) {
            return console.log("Could not find movie to return");
        }
        this.movieService.returnMovie(this.selectedRenting).subscribe(function (data) { return _this.selectedRenting = data; }, function (error) { return _this.selectedRenting = null; });
        this.rentings.splice(this.rentings.indexOf(this.selectedRenting), 1);
        this.resetSelectedMovie();
    };
    return RentedComponent;
}());
RentedComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        providers: [movie_service_1.MovieService],
        templateUrl: './templates/rented.html',
    }),
    __metadata("design:paramtypes", [movie_service_1.MovieService])
], RentedComponent);
exports.RentedComponent = RentedComponent;
//# sourceMappingURL=rented.component.js.map