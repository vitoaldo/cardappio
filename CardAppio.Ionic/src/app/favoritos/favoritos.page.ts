import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { Session } from '../session/session';
import { Cliente } from '../models/clienteModel';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  constructor(
    public httpService: HttpService,
    public navCtrl: NavController,
    public session: Session
  ) { }

  restaurantes:Array<any> = [];
  restaurantesFavoritos:any;
  response:any;
  cliente: Cliente;

   
  ngOnInit() {
    
  }

  ionViewWillEnter() {
    this.session.exist().then(res => {
      if (!res) {
        this.navCtrl.navigateForward('/');
      }
      this.session.get().then(res => {
          this.cliente = new Cliente(res);
          this.httpService.getRestaurantesFavoritos(this.cliente._id).then(restaurantes => {
              this.restaurantesFavoritos = restaurantes;
              this.restaurantes=[];
                this.restaurantesFavoritos.forEach((obj) => {
                  this.httpService.getRestaurante(obj.restauranteId).then(res => {
                    this.response = res;
                    this.response.favId = obj._id;
                    this.restaurantes.push(this.response);
                  });
                });
          });
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

  remove_favorite(id: string): void {
    this.restaurantes.forEach((obj, index) => {
      if(obj._id == id){
          this.httpService.deleteRestauranteFromFavoritos(obj.favId).then(res => {
            this.restaurantes.splice(index, 1);
          });
      }
    });
  }


}
