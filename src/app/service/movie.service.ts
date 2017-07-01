import { Injectable } from '@angular/core';
import { IMovieList } from 'app/interface/movie-list';
import { IRatingType } from 'app/interface/rating-type';

@Injectable()
export class MovieService {

  constructor() { }

  movieList: IMovieList[] = [];

  /** Add movie in the array List. */
  addMovie(movieDetail: IMovieList) {
    this.movieList.unshift(movieDetail);
  }

  /**Get the movie list from the array. */
  getMovieList(): IMovieList[] {
    return this.movieList;
  }

}
