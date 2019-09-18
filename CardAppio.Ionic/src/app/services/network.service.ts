import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
// import { connect } from 'tls';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(private platform: Platform) { }

  get isOnline(): boolean {
    if (this.platform.is('cordova')) {
      // if(navigator.connection && navigator.connection.type){
      //   return (navigator.connection.type != Connection.NONE && navigator.connection.type != Connection.UNKNOWN);
      // } else {
      //   return true;
      // }
    } else {
      return navigator.onLine;
    }
  }
}
