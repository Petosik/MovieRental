import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListComponent } from './list.component';
import { RentedComponent } from './rented.component';

const appRoutes: Routes = [
  { path: 'a', component: AppComponent },
  { path: 'list', component: ListComponent },
  { path: 'rented', component: RentedComponent },
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
  { path: '**', component: ListComponent },
];

@NgModule({
  imports: [BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  declarations: [AppComponent, ListComponent, RentedComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
