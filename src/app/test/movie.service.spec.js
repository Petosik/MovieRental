"use strict";
var testing_1 = require("@angular/core/testing");
var http_1 = require("@angular/http");
var testing_2 = require("@angular/http/testing");
var movie_service_1 = require("../movie.service");
describe('MovieService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [http_1.HttpModule],
            providers: [movie_service_1.MovieService, testing_2.MockBackend,
                { provide: http_1.XHRBackend, useClass: testing_2.MockBackend }]
        });
    });
    describe('methods test with mocked backend', function () {
        it('should return available movies as list wrapped by observable', testing_1.inject([movie_service_1.MovieService, testing_2.MockBackend], function (service, mockBackend) {
            var mockResponse = {
                data: [
                    {
                        id: 1, modificationCounter: 0, title: 'title', director: 'director', Genre: 'Horror', productionCountry: 'pCountry',
                        productionYear: '1999', rating: 5, posterUrl: 'http://url', duration: 100, available: true
                    },
                    {
                        id: 2, modificationCounter: 0, title: 'title2', director: 'director2', Genre: 'Horror', productionCountry: 'pCountry',
                        productionYear: '1999', rating: 5, posterUrl: 'http://url', duration: 100, available: true
                    }
                ]
            };
            mockBackend.connections.subscribe(function (connection) {
                connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                    body: JSON.stringify(mockResponse)
                })));
            });
            service.getAvailableMovies().subscribe(function (data) {
                expect(data.length).toBe(2);
                expect(data[0].title).toEqual('title');
                expect(data[1].title).toEqual('title2');
            });
        }));
        it('should return active rentings as list wrapped by observable', testing_1.inject([movie_service_1.MovieService, testing_2.MockBackend], function (service, mockBackend) {
            var nullDate = null;
            var mockResponse = {
                data: [
                    {
                        id: 1, modificationCounter: 0, renterPeselNumber: "93110706872", rentingDate: 1492515383000, returningDate: nullDate, movie: {
                            id: 1, modificationCounter: 0, title: 'title', director: 'director', Genre: 'Horror', productionCountry: 'pCountry',
                            productionYear: '1999', rating: 5, posterUrl: 'http://url', duration: 100, available: true
                        }
                    },
                    {
                        id: 2, modificationCounter: 0, renterPeselNumber: "93110706872", rentingDate: 1482515383000, returningDate: nullDate, movie: {
                            id: 2, modificationCounter: 0, title: 'title2', director: 'director2', Genre: 'Horror', productionCountry: 'pCountry',
                            productionYear: '1999', rating: 5, posterUrl: 'http://url', duration: 100, available: true
                        }
                    },
                ]
            };
            mockBackend.connections.subscribe(function (connection) {
                connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                    body: JSON.stringify(mockResponse)
                })));
            });
            service.getActiveRentings().subscribe(function (data) {
                expect(data.length).toBe(2);
                expect(data[0].movie.title).toEqual('title');
                expect(data[1].movie.title).toEqual('title2');
            });
        }));
    });
});
//# sourceMappingURL=movie.service.spec.js.map