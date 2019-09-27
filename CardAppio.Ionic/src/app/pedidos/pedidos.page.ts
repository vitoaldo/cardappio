import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { Session } from '../session/session';
import { Cliente } from '../models/clienteModel';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {

  constructor(
    public httpService: HttpService,
    public navCtrl: NavController,
    public session: Session
  ) { }

  pedidos: any;
  cliente: Cliente;

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    this.session.exist().then(res => {
      if (!res) {
        this.navCtrl.navigateForward('/');
      }
      this.session.get().then(cliente => {
      	this.cliente = cliente;
	      this.httpService.getPedidos(this.cliente._id).then(pedidos => {
	        this.pedidos = pedidos;
          this.pedidos.forEach((obj) => {
            this.httpService.getPrato(obj.prato).then(res => {
              obj.prato = res;
            });
          });
	      });
  	  });
    });
  }

  view(){
    
  }

}
