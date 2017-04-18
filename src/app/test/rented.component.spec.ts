import { RentedComponent } from '../rented.component';
import { FilterPipe } from '../filter.pipe';
import { Movie } from '../movie';
import { Renting } from '../renting';
import { MovieService } from '../movie.service';

import { Observable } from 'rxjs/Rx';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterLinkStubDirective, RouterOutletStubComponent } from './router-stubs';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

describe('RentedComponent', function () {
    let serviceMock: jasmine.Spy;
    let de: DebugElement;
    let comp: RentedComponent;
    let fixture: ComponentFixture<RentedComponent>;
    let links: RouterLinkStubDirective[];
    let linkDes: DebugElement[];
    let initActiveRentings: Renting[];
    let rentedMovies: Movie[];
    let movieService: MovieService;
    let movieRenting: Renting;


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [BrowserModule, HttpModule, FormsModule, RouterTestingModule],
            declarations: [RentedComponent, RouterLinkStubDirective, RouterOutletStubComponent, FilterPipe]
        })
            .overrideComponent(RentedComponent, {
                set: {
                    templateUrl: '/base/src/app/templates/rented.html',
                    styleUrls: ['/base/src/styles.css'],
                }
            })
            .compileComponents();
    }));

    beforeEach(() => {
        let d: Date = new Date();
        let d4: Date = d;
        let d10: Date = d;
        d4.setDate(4);
        d10.setDate(10);

        rentedMovies = [
            new Movie(1, 0, "Title1", "Director1", "Genre1", 1991, "USA1", 111, "http://cover1", true),
            new Movie(2, 0, "Title2", "Director2", "Genre2", 1992, "USA2", 222, "http://cover2", true),
            new Movie(3, 0, "Title3", "Director3", "Genre3", 1993, "USA3", 333, "http://cover3", true)
        ];

        initActiveRentings = [
            new Renting(1, 0, "82110655789", d, null, rentedMovies[0], 0),
            new Renting(2, 0, "75021489562", d4, null, rentedMovies[1], 0),
            new Renting(3, 0, "99121469789", d10, null, rentedMovies[2], 0)
        ];

        fixture = TestBed.createComponent(RentedComponent);
        comp = fixture.componentInstance;
        movieService = fixture.debugElement.injector.get(MovieService);
        serviceMock = spyOn(movieService, 'getActiveRentings').and.returnValue(Observable.of(initActiveRentings));
        serviceMock = spyOn(movieService, 'returnMovie').and.returnValue(Observable.of(initActiveRentings[1]));
        fixture.detectChanges();

        // find DebugElements with an attached RouterLinkStubDirective
        linkDes = fixture.debugElement
            .queryAll(By.directive(RouterLinkStubDirective));

        // get the attached link directive instances using the DebugElement injectors
        links = linkDes
            .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
    });

    it('should create component', () => expect(comp).toBeDefined());

    it('should focus on specified renting', () => {
        // given
        let initRenting: Renting = comp.getSelectedRenting();

        // when
        comp.focusOnRenting(1);

        // then
        expect(initRenting.id).toBe(null);
        expect(comp.getSelectedRenting()).toBe(initActiveRentings[0]);
    });

    it('should return movie', () => {
        // given
        let initSize: number = comp.getRentings().length;

        // when
        comp.returnMovie(2);

        // then
        expect(comp.getRentings().length).toBe(initSize - 1);

    });

    it('should change charge of the renting', () => {
        // given
        let difference: number = 20;
        comp.focusOnRenting(3);
        let initCharge: number = comp.getSelectedRenting().charge;

        // when
        comp.changeCharge(difference);

        // then
        expect(comp.getSelectedRenting().charge).toBe(initCharge + difference);

    });

});
