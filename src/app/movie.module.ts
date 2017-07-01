import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MovieComponent } from 'app/component/movie-component/movie.component';
import { MovieListComponent } from './component/movie-list/movie-list.component';



/* Second Service is introduced in @NgModule */
@NgModule({
  declarations: [
    MovieComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [MovieComponent]
})
export class MovieModule { }
