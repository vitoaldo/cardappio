import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { Session } from '../session/session';
import { Cliente } from '../models/clienteModel';

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
  cliente: Cliente;

  ngOnInit() {
    
  }

  ionViewWillEnter() {
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

  add_to_favorite(restauranteId: string): void {
    this.session.get().then(res => {
      this.cliente = new Cliente(res);
        this.httpService.addToFavorite(restauranteId, this.cliente._id).then(res => {
          console.log('added');
        });
    });
  }  

  remove_from_favorite(restauranteId: string): void {
    this.session.get().then(res => {
      this.cliente = new Cliente(res);
        this.httpService.removeFromFavorite(restauranteId, this.cliente._id).then(res => {
          console.log('removed');
        });
    });
  }
}
