import { TestBed, inject } from '@angular/core/testing';
import { Http, Headers, RequestOptions, HttpModule, XHRBackend, Response, ResponseOptions }
    from '@angular/http'; import { MockBackend, MockConnection } from '@angular/http/testing';
import { MovieService } from '../movie.service'

describe('MovieService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [MovieService, MockBackend,
                { provide: XHRBackend, useClass: MockBackend }]
        });
    });

    describe('methods test with mocked backend', () => {
        it('should return available movies as list wrapped by observable',
            inject([MovieService, MockBackend], (service: MovieService, mockBackend: MockBackend) => {
                const mockResponse = {
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
                mockBackend.connections.subscribe((connection: any) => {
                    connection.mockRespond(new Response(new ResponseOptions({
                        body: JSON.stringify(mockResponse)
                    })));
                });

                service.getAvailableMovies().subscribe((data) => {
                    expect(data.length).toBe(2);
                    expect(data[0].title).toEqual('title');
                    expect(data[1].title).toEqual('title2');
                });
            }));

        it('should return active rentings as list wrapped by observable',
            inject([MovieService, MockBackend], (service: MovieService, mockBackend: MockBackend) => {
                let nullDate: Date = null;
                const mockResponse = {
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
                mockBackend.connections.subscribe((connection: any) => {
                    connection.mockRespond(new Response(new ResponseOptions({
                        body: JSON.stringify(mockResponse)
                    })));
                });

                service.getActiveRentings().subscribe((data) => {
                    expect(data.length).toBe(2);
                    expect(data[0].movie.title).toEqual('title');
                    expect(data[1].movie.title).toEqual('title2');
                });
            }));
    });
});