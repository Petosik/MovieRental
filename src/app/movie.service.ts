import { Movie } from './movie'
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {
    constructor(private http: Http) {
        this.http = http;
    }

    getAvailableMovies(): Observable<Array<Movie>> {
        return this.http.get("http://localhost:8080/available").map(response => response.json());
    }

    getRentedMovies(): Observable<Array<Movie>> {
        return this.http.get("http://localhost:8080/rented").map(response => response.json());
    }

    addMovie(movie: Movie): Observable<Movie> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post("http://localhost:8080/newMovie", JSON.stringify(movie), options).map(response => response.json());
    }

    editMovie(movie: Movie) {
        this.http.post("http://localhost:8080/updateMovie", movie);
    }
}