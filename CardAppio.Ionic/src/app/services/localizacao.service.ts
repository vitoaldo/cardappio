import { Injectable } from '@angular/core';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';

@Injectable({
  providedIn: 'root'
})
export class LocalizacaoService {

  constructor(private location: LocationAccuracy) { }

  checaLocalizacao(): boolean {
    this.location.canRequest().then((local: boolean) => {
      if (local) {
        return local;
      }
    }).catch((error => {
      console.log('Não foi possivel retornar localização =>', error);
      return false;
    }));
    return false;
  }
}
