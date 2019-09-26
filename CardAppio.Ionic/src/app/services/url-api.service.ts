import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlAPIService {

  constructor() { }

  getURL():string{
    return 'http://localhost:3100/';
  }
}
