"use strict";
var Renting = (function () {
    function Renting(id, modificationCounter, renterPeselNumber, rentingDate, returningDate, movie, charge) {
        this.id = id;
        this.modificationCounter = modificationCounter;
        this.renterPeselNumber = renterPeselNumber;
        this.rentingDate = rentingDate;
        this.returningDate = returningDate;
        this.movie = movie;
        this.charge = charge;
    }
    Renting.prototype.changeCharge = function (amount) {
        this.charge += amount;
    };
    return Renting;
}());
exports.Renting = Renting;
//# sourceMappingURL=renting.js.map