import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdashComponent } from './prodash/prodash.component';
import { CategoryComponent } from './category/category.component';
import{HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NimapComponent } from './nimap/nimap.component'
import { NgxPaginationModule } from 'ngx-pagination';
// import { MaterialModule } from "../app/material-module";


@NgModule({
  declarations: [
    AppComponent,
    ProdashComponent,
    CategoryComponent,
    NavbarComponent,
    NimapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    // MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
