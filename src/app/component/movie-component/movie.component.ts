import { Component, ViewEncapsulation, OnInit } from '@angular/core';

/* interfaces */
import { IMovieList, IMovieModel } from 'app/interface/movie-list';
import { IRatingType } from 'app/interface/rating-type';

/* services */
import { MovieService } from 'app/service/movie.service';
import { RatingService } from 'app/service/rating.service';
import { LogService } from 'app/service/log.service';

@Component({
  selector: 'movie-root',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers: [MovieService, RatingService, LogService]
})

export class MovieComponent implements OnInit {

  title: string = 'Movie Ratings';

  ratingTypeArray: IRatingType[] = [];

  moviesArray: IMovieList[] = [];
  movieDetail: IMovieList;

  movieModel: IMovieModel;

  constructor(private _movieService: MovieService,
    private _ratingService: RatingService,
    private _logService: LogService) {
  }

  ngOnInit() {

    /**Define default values  */
    this.movieModel = {
      movieName: 'Jolly LLB',
      movieDescription: 'Jolly LLB',
      movieRating: 2,
      movieReleaseDate: null,
      movieURL: ''
    };

    this.ratingTypeArray = this._ratingService.getRatingType();
  };

  addMovie(values) {

    this.movieDetail = {
      movieName: values.movieName,
      movieDescription: values.movieDescription,
      movieRating: values.movieRating,
      movieReleaseDate: values.movieReleaseDate,
      movieURL: values.movieURL
    };
    this._movieService.addMovie(this.movieDetail);
    this.moviesArray = this._movieService.getMovieList();
    this._logService.log();
    console.log(this.moviesArray);
  };

  resetForm(f) {
    f.reset();
  };


}

