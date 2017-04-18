"use strict";
var app_component_1 = require("../app.component");
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var router_stubs_1 = require("./router-stubs");
var testing_2 = require("@angular/router/testing");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
describe('AppComponent', function () {
    var de;
    var comp;
    var fixture;
    var links;
    var linkDes;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, testing_2.RouterTestingModule],
            declarations: [app_component_1.AppComponent, router_stubs_1.RouterLinkStubDirective, router_stubs_1.RouterOutletStubComponent]
        })
            .overrideComponent(app_component_1.AppComponent, {
            set: {
                templateUrl: '/base/src/app/templates/mainView.html',
                styleUrls: ['/base/src/styles.css'],
            }
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        comp = fixture.componentInstance;
        fixture.detectChanges();
        // find DebugElements with an attached RouterLinkStubDirective
        linkDes = fixture.debugElement
            .queryAll(platform_browser_1.By.directive(router_stubs_1.RouterLinkStubDirective));
        // get the attached link directive instances using the DebugElement injectors
        links = linkDes
            .map(function (de) { return de.injector.get(router_stubs_1.RouterLinkStubDirective); });
    });
    it('should create component', function () { return expect(comp).toBeDefined(); });
});
//# sourceMappingURL=app.component.spec.js.map