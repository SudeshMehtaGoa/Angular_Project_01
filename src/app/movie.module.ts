import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { MovieComponent } from 'app/component/movie-component/movie.component';
import { MovieListComponent } from './component/movie-list/movie-list.component';

@NgModule({
  declarations: [
    MovieComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [MovieComponent]
})
export class MovieModule { }
