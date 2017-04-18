// import { MovieService } from '../movie.service'
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { BrowserModule, By } from '@angular/platform-browser';
// import { DebugElement } from '@angular/core';
// import { RouterLinkStubDirective, RouterOutletStubComponent } from './router-stubs';
// import { RouterTestingModule } from '@angular/router/testing';
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
// describe('MovieService', function () {
//   let de: DebugElement;
//   let comp: MovieService;
//   let fixture: ComponentFixture<MovieService>;
//   let links: RouterLinkStubDirective[];
//   let linkDes: DebugElement[];
//     beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [BrowserModule, HttpModule, FormsModule, RouterTestingModule],
//       declarations: [MovieService, RouterLinkStubDirective, RouterOutletStubComponent]
//     })
//       .overrideComponent(MovieService, {
//         set: {
//           templateUrl: '/base/src/app/templates/mainView.html',
//           styleUrls: ['/base/src/styles.css'],
//         }
//       })
//       .compileComponents();
//   }));
//   beforeEach(() => {
//     fixture = TestBed.createComponent(MovieService);
//     comp = fixture.componentInstance;
//     fixture.detectChanges();
//     // find DebugElements with an attached RouterLinkStubDirective
//     linkDes = fixture.debugElement
//       .queryAll(By.directive(RouterLinkStubDirective));
//     // get the attached link directive instances using the DebugElement injectors
//     links = linkDes
//       .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
//   });
// }); 
//# sourceMappingURL=movie.service.spec.js.map