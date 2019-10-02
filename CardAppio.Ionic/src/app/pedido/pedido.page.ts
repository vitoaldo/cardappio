import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpService } from '../services/http.service';
import { NavController } from '@ionic/angular';
import { Session } from '../session/session';
import { PopoverController } from '@ionic/angular';
import { AvaliarComponent } from '../avaliar/avaliar.component';
import { FazerPedidoComponent } from '../fazer-pedido/fazer-pedido.component';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {

  constructor(
  	private route: ActivatedRoute,
  	public httpService: HttpService,
  	public navCtrl: NavController,
  	public session: Session,
    public popoverController: PopoverController
  ) { }


  id:string;
  pedido:any;
  observacao:string;
  status:string;
  prato:any;
  titulo:any;
  foto:string;

  ngOnInit() {
    
  }

  ionViewWillEnter() {
  	this.session.exist().then(res => {
  		if(!res){
    		this.navCtrl.navigateForward('/');
    	}
	  	this.route.queryParams.subscribe(params => {
  		  this.id = params["id"];
        this.httpService.getPedido(this.id).then(pedido => {
          this.pedido = pedido;
          this.observacao = this.pedido.observacao;
          this.status = this.pedido.status;
          this.httpService.getPrato(this.pedido.prato).then(res => {
            this.prato = res;
            this.titulo = this.prato.titulo;
            this.foto = this.prato.foto;
          });
		    });
  		});
  	});
  }

  cancelar_pedido(id: string){
    this.httpService.changePedidoStatus(id, "Cancelado").then(pedido => {
      this.pedido = pedido;
      this.status = this.pedido.status;
    });
  }

  async avaliar_pedido(id: string, ev: any){
      const popover = await this.popoverController.create({
        component: AvaliarComponent,
        componentProps: {
          pedido: this.pedido  
        },
        event: ev,
        translucent: true
      });
      popover.present();
  }

  async refazer_pedido(id: string, ev: any){
      const popover = await this.popoverController.create({
        component: FazerPedidoComponent,
        componentProps: {
          pratoId: id  
        },
        event: ev,
        translucent: true
      });
      popover.present();
  }

}
