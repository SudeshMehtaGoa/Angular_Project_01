import { Injectable } from '@angular/core';
import { IRatingType } from 'app/interface/rating-type';

@Injectable()
export class RatingService {

  ratingType : IRatingType[] = [];
  constructor() { }

 /* Get the MovieRatings */
  getRatingType(){
    return this.ratingType = [
      {
        id:1,
        type:'Poor'
      },
      {
        id:2,
        type:'OK'
      },
      {
        id:3,
        type:'Good'
      },
      {
        id:4,
        type:'Very Good'
      },
      {
        id:5,
        type:'Excellent'
      }
    ];
  }
}
