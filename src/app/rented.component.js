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
var RentedComponent = (function () {
    function RentedComponent(movieService) {
        this.movieService = movieService;
    }
    RentedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rentings = [];
        this.selectedRenting = new renting_1.Renting(null, null, null, null, null, new movie_1.Movie(null, null, null, null, null, null, null, null, null, null), 0);
        this.isDamaged = false;
        this.isUncapped = false;
        this.daysOfDelay = 0;
        this.chargeOfDelay = 0;
        this.movieService.getActiveRentings().subscribe(function (data) { return _this.rentings = data; }, function (error) { return _this.rentings = []; });
    };
    RentedComponent.prototype.resetSelectedRenting = function () {
        this.selectedRenting = new renting_1.Renting(null, null, null, null, null, new movie_1.Movie(null, null, null, null, null, null, null, null, null, null), 0);
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
    RentedComponent.prototype.selectRenting = function (renting) {
        this.selectedRenting = renting;
    };
    RentedComponent.prototype.changeDamaged = function () {
        if (this.isDamaged)
            this.changeCharge(20);
        else
            this.changeCharge(-20);
    };
    RentedComponent.prototype.changeUncapped = function () {
        if (this.isUncapped)
            this.changeCharge(10);
        else
            this.changeCharge(-10);
    };
    RentedComponent.prototype.getRentings = function () {
        return this.rentings;
    };
    RentedComponent.prototype.getSelectedRenting = function () {
        return this.selectedRenting;
    };
    RentedComponent.prototype.focusOnRenting = function (id) {
        this.resetSelectedRenting();
        var renting = this.getRentingByMovieId(id);
        this.selectRenting(renting);
        var timeDiff = Math.abs(this.selectedRenting.rentingDate - new Date().getTime());
        if (timeDiff >= 345600000) {
            this.daysOfDelay = Math.ceil(timeDiff / (1000 * 3600 * 24)) - 4;
            this.chargeOfDelay = 5 * this.daysOfDelay;
            this.changeCharge(this.chargeOfDelay);
        }
    };
    RentedComponent.prototype.returnMovie = function (id) {
        var _this = this;
        this.selectedRenting = this.getRentingByMovieId(id);
        if (this.selectedRenting == null) {
            return console.log("Could not find movie to return");
        }
        this.movieService.returnMovie(this.selectedRenting).subscribe(function (data) { return _this.selectedRenting = data; }, function (error) { return _this.resetSelectedRenting(); });
        this.rentings.splice(this.rentings.indexOf(this.selectedRenting), 1);
        this.isDamaged = false;
        this.isUncapped = false;
    };
    RentedComponent.prototype.changeCharge = function (amount) {
        this.selectedRenting.charge += amount;
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