import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CarsModule} from "./cars/cars.module";
import {CarsService} from "./cars/cars.service";
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "./core-module/core.module";
import {CarsRoutingModule} from "./cars/cars-routing-module";
import '@angular/common/locales/global/pl';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarsModule,
    HttpClientModule,
    CoreModule,
    CarsRoutingModule

  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
