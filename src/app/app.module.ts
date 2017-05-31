import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import Layout from './layout';
import {CoreModule} from './core/core.module';
import {CustomerComponent} from './routes/customer/customer.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    Layout
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
