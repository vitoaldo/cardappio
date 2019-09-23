import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { Session } from '../session/session';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.page.html',
  styleUrls: ['./restaurantes.page.scss'],
})
export class RestaurantesPage implements OnInit {

  constructor(
    public httpService: HttpService,
    public navCtrl: NavController,
    public session: Session
  ) { }

  restaurantes: any;

  ngOnInit() {
    this.session.exist().then(res => {
      if (!res) {
        this.navCtrl.navigateForward('/');
      }
      this.httpService.getRestaurantes().then(restaurantes => {
        this.restaurantes = restaurantes;
      });
    });
  }

  view(id: string): void {
    let navigationExtra: NavigationExtras = {
      queryParams: {
        id: id,
      }
    };
    this.navCtrl.navigateForward('restaurante', navigationExtra);
  }

}
