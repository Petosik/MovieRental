"use strict";
var rented_component_1 = require("../rented.component");
var filter_pipe_1 = require("../filter.pipe");
var movie_1 = require("../movie");
var renting_1 = require("../renting");
var movie_service_1 = require("../movie.service");
var Rx_1 = require("rxjs/Rx");
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var router_stubs_1 = require("./router-stubs");
var testing_2 = require("@angular/router/testing");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
describe('RentedComponent', function () {
    var serviceMock;
    var de;
    var comp;
    var fixture;
    var links;
    var linkDes;
    var initActiveRentings;
    var rentedMovies;
    var movieService;
    var movieRenting;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, testing_2.RouterTestingModule],
            declarations: [rented_component_1.RentedComponent, router_stubs_1.RouterLinkStubDirective, router_stubs_1.RouterOutletStubComponent, filter_pipe_1.FilterPipe]
        })
            .overrideComponent(rented_component_1.RentedComponent, {
            set: {
                templateUrl: '/base/src/app/templates/rented.html',
                styleUrls: ['/base/src/styles.css'],
            }
        })
            .compileComponents();
    }));
    beforeEach(function () {
        var d = new Date();
        var d4 = d;
        var d10 = d;
        d4.setDate(4);
        d10.setDate(10);
        rentedMovies = [
            new movie_1.Movie(1, 0, "Title1", "Director1", "Genre1", 1991, "USA1", 111, "http://cover1", true),
            new movie_1.Movie(2, 0, "Title2", "Director2", "Genre2", 1992, "USA2", 222, "http://cover2", true),
            new movie_1.Movie(3, 0, "Title3", "Director3", "Genre3", 1993, "USA3", 333, "http://cover3", true)
        ];
        initActiveRentings = [
            new renting_1.Renting(1, 0, "82110655789", d, null, rentedMovies[0], 0),
            new renting_1.Renting(2, 0, "75021489562", d4, null, rentedMovies[1], 0),
            new renting_1.Renting(3, 0, "99121469789", d10, null, rentedMovies[2], 0)
        ];
        fixture = testing_1.TestBed.createComponent(rented_component_1.RentedComponent);
        comp = fixture.componentInstance;
        movieService = fixture.debugElement.injector.get(movie_service_1.MovieService);
        serviceMock = spyOn(movieService, 'getActiveRentings').and.returnValue(Rx_1.Observable.of(initActiveRentings));
        serviceMock = spyOn(movieService, 'returnMovie').and.returnValue(Rx_1.Observable.of(initActiveRentings[1]));
        fixture.detectChanges();
        // find DebugElements with an attached RouterLinkStubDirective
        linkDes = fixture.debugElement
            .queryAll(platform_browser_1.By.directive(router_stubs_1.RouterLinkStubDirective));
        // get the attached link directive instances using the DebugElement injectors
        links = linkDes
            .map(function (de) { return de.injector.get(router_stubs_1.RouterLinkStubDirective); });
    });
    it('should create component', function () { return expect(comp).toBeDefined(); });
    it('should focus on specified renting', function () {
        // given
        var initRenting = comp.getSelectedRenting();
        // when
        comp.focusOnRenting(1);
        // then
        expect(initRenting.id).toBe(null);
        expect(comp.getSelectedRenting()).toBe(initActiveRentings[0]);
    });
    it('should return movie', function () {
        // given
        var initSize = comp.getRentings().length;
        // when
        comp.returnMovie(2);
        // then
        expect(comp.getRentings().length).toBe(initSize - 1);
    });
    it('should change charge of the renting', function () {
        // given
        var difference = 20;
        comp.focusOnRenting(3);
        var initCharge = comp.getSelectedRenting().charge;
        // when
        comp.changeCharge(difference);
        // then
        expect(comp.getSelectedRenting().charge).toBe(initCharge + difference);
    });
});
//# sourceMappingURL=rented.component.spec.js.map