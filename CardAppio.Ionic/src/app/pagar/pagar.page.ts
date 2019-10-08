import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { Session } from '../session/session';
import { Cliente } from '../models/clienteModel';

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.page.html',
  styleUrls: ['./pagar.page.scss'],
})
export class PagarPage implements OnInit {

  customPickerOptions:any;
  dataEscolhida:string="MM/YY";
  valorTotal:number=0;

  constructor(
    public httpService: HttpService,
    public navCtrl: NavController,
    public session: Session  	
  ) { 
		this.customPickerOptions = {
		    buttons: [{
		      text: 'Save',
		      handler: (date) => {
		        this.dataEscolhida = date.month.text + '/' + date.year.text; 
		        console.log(this.dataEscolhida);
		      }
		    }]
	    }
	}

  pedidos: any;
  pedidosNaoPagos: any=[];
  cliente: Cliente;

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    this.session.exist('cliente').then(res => {
      if (!res) {
        this.navCtrl.navigateForward('/');
      }
      this.session.get('cliente').then(cliente => {
      	this.cliente = cliente;
	      this.httpService.getPedidos(this.cliente._id).then(pedidos => {
	        this.pedidos = pedidos;
          this.pedidosNaoPagos=[];
          this.valorTotal=0;
          	this.pedidos.forEach((obj, index) => {
	          	if(!(obj.status == 'Concluído' || obj.status == 'Cancelado')){
			        this.valorTotal+=obj.valor;
		            this.httpService.getPrato(obj.prato).then(res => {
		              obj.prato = res;
		            });
		            this.pedidosNaoPagos.push(obj);
	          	}
	          });
	      });
  	  });
    });
  }

  pagar() {
      this.httpService.pagarPedidos(this.cliente._id).then(pedidos => {
        this.session.remove('mesa');
        this.navCtrl.navigateForward('/tabs/perfil');
      });
  }
}
