import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { NavParams, NavController, PopoverController } from '@ionic/angular';
import { Session } from '../session/session';
import { Cliente } from '../models/clienteModel';
import { Mesa } from '../models/mesaModel';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss'],
})
export class CheckinComponent implements OnInit {

  mesas:Array<any>=new Array(0);
  mesaEscolhida:number;
  restauranteId:string;
  restaurante:any;
  cliente: Cliente;
  mesa: Mesa;
  mesaExist:boolean=false;


  constructor(
  	public httpService: HttpService,
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public session: Session,
    public popoverController: PopoverController
  ) { }

  ngOnInit() {
  	this.restauranteId = this.navParams.get('restauranteId');
  	this.httpService.getRestaurante(this.restauranteId).then((res) => {
  		this.restaurante = res;
  		this.mesas = new Array(this.restaurante.quantidadeMesas);
  	});
  }

  reservar(){
    this.session.get('cliente').then(res => {
      let mesa = this.mesaEscolhida + 1;

    	this.cliente = res;
      this.mesa = {mesa: mesa,
                   restauranteId: this.restauranteId,
                   clienteId: this.cliente._id};

      this.session.createMesaCheckin(this.mesa);

      this.popoverController.dismiss();
    });
  }

}
