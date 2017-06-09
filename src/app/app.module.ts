import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule, JsonpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {DropdownModule} from "ng2-bootstrap/dropdown/";
import {SharedModule} from './shared.module';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {AppComponent} from './app.component';
import {routing} from './app-routing-module';
import {HomeComponent} from './static-views/home/home.component';
import {LoginComponent} from './static-views/authentification/login/login.component';
import {LogoutComponent} from './static-views/authentification/logout/logout.component';
import {CoreComponent} from './static-views/template/core.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Ng2BreadcrumbModule} from 'ng2-breadcrumb/ng2-breadcrumb';
@NgModule({
  imports: [
    Ng2BreadcrumbModule.forRoot(),
    BrowserModule,
    routing,
    HttpModule,
    JsonpModule,
    FormsModule,
    NgbModule.forRoot(),
    DropdownModule.forRoot(),
    SharedModule.forRoot()
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    CoreComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
