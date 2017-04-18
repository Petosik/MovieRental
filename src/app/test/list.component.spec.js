"use strict";
var list_component_1 = require("../list.component");
var filter_pipe_1 = require("../filter.pipe");
var sort_pipe_1 = require("../sort.pipe");
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
describe('ListComponent', function () {
    var serviceMock;
    var de;
    var comp;
    var fixture;
    var links;
    var linkDes;
    var initMovies;
    var clearMovie;
    var movieService;
    var addedMovie;
    var editedMovie;
    var movieRenting;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, testing_2.RouterTestingModule],
            declarations: [list_component_1.ListComponent, router_stubs_1.RouterLinkStubDirective, router_stubs_1.RouterOutletStubComponent, filter_pipe_1.FilterPipe, sort_pipe_1.SortPipe]
        })
            .overrideComponent(list_component_1.ListComponent, {
            set: {
                templateUrl: '/base/src/app/templates/list.html',
                styleUrls: ['/base/src/styles.css'],
            }
        })
            .compileComponents();
    }));
    beforeEach(function () {
        initMovies = [
            new movie_1.Movie(1, 0, "Title1", "Director1", "Genre1", 1991, "USA1", 111, "http://cover1", false),
            new movie_1.Movie(2, 0, "Title2", "Director2", "Genre2", 1992, "USA2", 222, "http://cover2", false),
            new movie_1.Movie(3, 0, "Title3", "Director3", "Genre3", 1993, "USA3", 333, "http://cover3", false),
            new movie_1.Movie(4, 0, "Title4", "Director4", "Genre4", 1994, "USA4", 444, "http://cover4", false),
            new movie_1.Movie(5, 0, "Title5", "Director5", "Genre5", 1995, "USA5", 555, "http://cover5", false)
        ];
        clearMovie = new movie_1.Movie(null, null, null, null, null, null, null, null, null, null);
        addedMovie = new movie_1.Movie(6, 0, "Title6", "Director6", "Genre6", 1996, "USA6", 666, "http://cover6", false);
        movieRenting = new renting_1.Renting(1, 0, "84052198472", new Date(), null, initMovies[1], 0);
        fixture = testing_1.TestBed.createComponent(list_component_1.ListComponent);
        comp = fixture.componentInstance;
        movieService = fixture.debugElement.injector.get(movie_service_1.MovieService);
        serviceMock = spyOn(movieService, 'getAvailableMovies').and.returnValue(Rx_1.Observable.of(initMovies));
        serviceMock = spyOn(movieService, 'addMovie').and.returnValue(Rx_1.Observable.of(addedMovie));
        serviceMock = spyOn(movieService, 'rentMovie').and.returnValue(Rx_1.Observable.of(movieRenting));
        fixture.detectChanges();
        // find DebugElements with an attached RouterLinkStubDirective
        linkDes = fixture.debugElement
            .queryAll(platform_browser_1.By.directive(router_stubs_1.RouterLinkStubDirective));
        // get the attached link directive instances using the DebugElement injectors
        links = linkDes
            .map(function (de) { return de.injector.get(router_stubs_1.RouterLinkStubDirective); });
    });
    it('should create component', function () { return expect(comp).toBeDefined(); });
    it('should select Movie', function () {
        // given
        var initMovie = comp.getSelectedMovie();
        // when
        comp.selectMovie(initMovies[0]);
        // then
        expect(initMovie.title).toBe(null);
        expect(comp.getSelectedMovie()).toBe(initMovies[0]);
    });
    it('should reset SelectedMovie', function () {
        // given
        comp.selectMovie(initMovies[0]);
        // when
        comp.resetSelectedMovie();
        // then
        expect(comp.getSelectedMovie().title).toBe(null);
    });
    it('should focus on specified movie', function () {
        // given
        var initMovie = comp.getSelectedMovie();
        // when
        comp.focusOnMovie(4);
        // then
        expect(initMovie.title).toBe(null);
        expect(comp.getSelectedMovie()).toBe(initMovies[3]);
    });
    it('should add movie', function () {
        // given
        comp.selectMovie(addedMovie);
        // when
        comp.addMovie();
        // then
        expect(comp.getMovies()[comp.getMovies().length - 1]).toBe(addedMovie);
    });
    it('should rent movie', function () {
        // given
        comp.selectMovie(comp.getMovies()[1]);
        var initSize = comp.getMovies().length;
        // when
        comp.rentMovie();
        // then
        expect(comp.getMovies().length).toBe(initSize - 1);
    });
    it('should sort by name', function () {
        // when
        comp.sortByName();
        // then
        expect(comp.getOrder()).toBe("title");
        expect(comp.isReverse()).toBe(true);
    });
    it('should sort by release year', function () {
        // when
        comp.sortByReleaseYear();
        // then
        expect(comp.getOrder()).toBe("release year");
        expect(comp.isReverse()).toBe(false);
    });
});
//# sourceMappingURL=list.component.spec.js.map