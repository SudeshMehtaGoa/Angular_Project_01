/* logservice used in mathservice */
import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }

  log(){
    console.log("New movie inserted.");
  };

  info(){
    console.log("Data retrived");
  };


}
