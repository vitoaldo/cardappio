import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlAPIService {

  constructor() { }

  getURL():string{
    return 'http://ec2-3-86-70-99.compute-1.amazonaws.com:3100';
  }
}
