import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { NavParams, NavController, PopoverController } from '@ionic/angular';
import { Session } from '../session/session';
import { Cliente } from '../models/clienteModel';

@Component({
  selector: 'app-fazer-pedido',
  templateUrl: './fazer-pedido.component.html',
  styleUrls: ['./fazer-pedido.component.scss'],
})
export class FazerPedidoComponent implements OnInit {

  observacao: string;
  pratoId: string;
  prato: any;
  cliente: Cliente;

  constructor(
  	public httpService: HttpService,
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public session: Session,
    public popoverController: PopoverController
  ) { }

  ngOnInit() {
  	this.pratoId = this.navParams.get('pratoId');
  }

  pedir(){
    this.session.get('cliente').then(res => {
      this.cliente = new Cliente(res);
    	this.httpService.getPrato(this.pratoId).then(prato => {
    		this.prato = prato;
  	  	this.httpService.fazerPedido(this.prato, this.observacao, this.cliente._id).then(res => {
          this.popoverController.dismiss();
  	    });
      });
    });
  }

}
