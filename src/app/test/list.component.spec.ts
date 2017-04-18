import { ListComponent } from '../list.component';
import { FilterPipe } from '../filter.pipe';
import { SortPipe } from '../sort.pipe'
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

describe('ListComponent', function () {
  let serviceMock: jasmine.Spy;
  let de: DebugElement;
  let comp: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let links: RouterLinkStubDirective[];
  let linkDes: DebugElement[];
  let initMovies: Movie[];
  let clearMovie: Movie;
  let movieService: MovieService;
  let addedMovie: Movie;
  let editedMovie: Movie;
  let movieRenting: Renting;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule, HttpModule, FormsModule, RouterTestingModule],
      declarations: [ListComponent, RouterLinkStubDirective, RouterOutletStubComponent, FilterPipe, SortPipe]
    })
      .overrideComponent(ListComponent, {
        set: {
          templateUrl: '/base/src/app/templates/list.html',
          styleUrls: ['/base/src/styles.css'],
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    initMovies = [
      new Movie(1, 0, "Title1", "Director1", "Genre1", 1991, "USA1", 111, "http://cover1", false),
      new Movie(2, 0, "Title2", "Director2", "Genre2", 1992, "USA2", 222, "http://cover2", false),
      new Movie(3, 0, "Title3", "Director3", "Genre3", 1993, "USA3", 333, "http://cover3", false),
      new Movie(4, 0, "Title4", "Director4", "Genre4", 1994, "USA4", 444, "http://cover4", false),
      new Movie(5, 0, "Title5", "Director5", "Genre5", 1995, "USA5", 555, "http://cover5", false)
    ];
    clearMovie = new Movie(null, null, null, null, null, null, null, null, null, null);
    addedMovie = new Movie(6, 0, "Title6", "Director6", "Genre6", 1996, "USA6", 666, "http://cover6", false);
    movieRenting = new Renting(1, 0, "84052198472", new Date(), null, initMovies[1], 0);

    fixture = TestBed.createComponent(ListComponent);
    comp = fixture.componentInstance;
    movieService = fixture.debugElement.injector.get(MovieService);
    serviceMock = spyOn(movieService, 'getAvailableMovies').and.returnValue(Observable.of(initMovies));
    serviceMock = spyOn(movieService, 'addMovie').and.returnValue(Observable.of(addedMovie));
    serviceMock = spyOn(movieService, 'rentMovie').and.returnValue(Observable.of(movieRenting));
    fixture.detectChanges();

    // find DebugElements with an attached RouterLinkStubDirective
    linkDes = fixture.debugElement
      .queryAll(By.directive(RouterLinkStubDirective));

    // get the attached link directive instances using the DebugElement injectors
    links = linkDes
      .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should select Movie', () => {
    // given
    let initMovie: Movie = comp.getSelectedMovie();

    // when
    comp.selectMovie(initMovies[0]);

    // then
    expect(initMovie.title).toBe(null);
    expect(comp.getSelectedMovie()).toBe(initMovies[0]);
  });

  it('should reset SelectedMovie', () => {
    // given
    comp.selectMovie(initMovies[0]);

    // when
    comp.resetSelectedMovie();

    // then
    expect(comp.getSelectedMovie().title).toBe(null);
  });

  it('should focus on specified movie', () => {
    // given
    let initMovie: Movie = comp.getSelectedMovie();

    // when
    comp.focusOnMovie(4);

    // then
    expect(initMovie.title).toBe(null);
    expect(comp.getSelectedMovie()).toBe(initMovies[3]);
  });

  it('should add movie', () => {
    // given
    comp.selectMovie(addedMovie);

    // when
    comp.addMovie();

    // then
    expect(comp.getMovies()[comp.getMovies().length - 1]).toBe(addedMovie);
  });

  it('should rent movie', () => {
    // given
    comp.selectMovie(comp.getMovies()[1]);
    let initSize: number = comp.getMovies().length;

    // when
    comp.rentMovie();

    // then
    expect(comp.getMovies().length).toBe(initSize - 1);

  });

  it('should sort by name', () => {
    // when
    comp.sortByName();

    // then
    expect(comp.getOrder()).toBe("title");
    expect(comp.isReverse()).toBe(true);

  });

  it('should sort by release year', () => {
    // when
    comp.sortByReleaseYear();

    // then
    expect(comp.getOrder()).toBe("release year");
    expect(comp.isReverse()).toBe(false);
  });
});