/* store list of movies*/
export interface IMovieList {
    movieName: string;
    movieDescription: string;
    movieRating: number;
    movieReleaseDate: Date;
    movieImageURL: string;
}

/* Insert new record */
export interface IMovieModel {
    movieName: string;
    movieDescription: string;
    movieRating: number;
    movieReleaseDate: Date;
    movieImageURL: string;
}
