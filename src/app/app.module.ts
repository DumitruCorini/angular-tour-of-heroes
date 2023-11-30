import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import {FormsModule} from "@angular/forms";
import {NgFor, NgForOf, NgIf, UpperCasePipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    // Angular modules
    BrowserModule,
    FormsModule,
    NgIf,
    NgFor,
    NgForOf,
    UpperCasePipe,

    // Our modules
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
