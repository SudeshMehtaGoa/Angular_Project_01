/* Movie list component */
import { Component, OnInit, Input } from '@angular/core';
import { IMovieList } from 'app/interface/movie-list';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

/* Read movielist array from movieadd component */
  @Input() movieList;
  movieDetail: IMovieList;
  constructor() { }

  ngOnInit() {
  }

}
