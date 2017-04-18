"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var SortPipe = (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (movies, field, reverse) {
        if (!movies) {
            return movies;
        }
        if (field == "title") {
            var sortedArray = movies.sort(function (m1, m2) {
                if (m1.title.toLowerCase() > m2.title.toLowerCase())
                    return 1;
                if (m1.title.toLowerCase() < m2.title.toLowerCase())
                    return -1;
                return 0;
            });
            if (reverse) {
                return sortedArray.reverse();
            }
            return sortedArray;
        }
        if (field == "release year") {
            var sortedArray = movies.sort(function (m1, m2) {
                if (m1.releaseYear > m2.releaseYear)
                    return 1;
                if (m1.releaseYear < m2.releaseYear)
                    return -1;
                return 0;
            });
            if (reverse) {
                return sortedArray.reverse();
            }
            return sortedArray;
        }
    };
    return SortPipe;
}());
SortPipe = __decorate([
    core_1.Pipe({
        name: 'sort'
    })
], SortPipe);
exports.SortPipe = SortPipe;
//# sourceMappingURL=sort.pipe.js.map