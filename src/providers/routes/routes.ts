import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class Routes {

  constructor(public http: HttpClient) {
    console.log('Hello RoutesProvider Provider');
  }

}
