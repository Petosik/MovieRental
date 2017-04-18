"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
//import { MovieService } from './movie.service';
var app_component_1 = require("./app.component");
var list_component_1 = require("./list.component");
var rented_component_1 = require("./rented.component");
var filter_pipe_1 = require("./filter.pipe");
var sort_pipe_1 = require("./sort.pipe");
var appRoutes = [
    { path: 'a', component: app_component_1.AppComponent },
    { path: 'list', component: list_component_1.ListComponent },
    { path: 'rented', component: rented_component_1.RentedComponent },
    {
        path: '',
        redirectTo: '/list',
        pathMatch: 'full'
    },
    { path: '**', component: list_component_1.ListComponent },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(appRoutes),
            forms_1.FormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
        ],
        declarations: [app_component_1.AppComponent, list_component_1.ListComponent, rented_component_1.RentedComponent, filter_pipe_1.FilterPipe, sort_pipe_1.SortPipe],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map