import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpService } from '../services/http.service';
import { NavController } from '@ionic/angular';
import { Session } from '../session/session';
import { PopoverController } from '@ionic/angular';
import { FazerPedidoComponent } from '../fazer-pedido/fazer-pedido.component';
import { CheckinComponent } from '../checkin/checkin.component';
import { Mesa } from '../models/mesaModel';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.page.html',
  styleUrls: ['./restaurante.page.scss'],
})
export class RestaurantePage implements OnInit {

  constructor(
  	private route: ActivatedRoute,
  	public httpService: HttpService,
  	public navCtrl: NavController,
  	public session: Session,
    public popoverController: PopoverController
  ) { }

  restaurante:any;
    id:string;
    nome:string;
    email:string;
    local:string;
    foto:string;
    quantidadeMesas:number;
    selectedStars:Array<number>;
    unSelectedStars:Array<number>;
    
  avaliacoes:any;
  plates:any;
  mesaExist:boolean=false;
  mesa: Mesa;

  ngOnInit() {
    
  }

  ionViewWillEnter() {
  	this.session.exist('cliente').then(res => {
  		if(!res){
    		this.navCtrl.navigateForward('/');
    	}
	  	this.route.queryParams.subscribe(params => {
  		  this.id = params["id"];
		    this.httpService.getRestaurante(this.id).then(restaurante => {
		    	this.restaurante = restaurante;
          this.nome = this.restaurante.nome;
          this.email = this.restaurante.email;
          this.local = this.restaurante.local;
          this.foto = this.restaurante.foto;
          this.quantidadeMesas = this.restaurante.quantidadeMesas;
          this.httpService.getAvaliacaoByRestaurante(this.restaurante._id).then(res => {
            let nota:number=0;
            this.avaliacoes = res;
            this.avaliacoes.forEach((avaliacao) => {
              nota+=avaliacao.nota;
              nota = nota/this.avaliacoes.length;
            });
            this.selectedStars=new Array(nota);
            this.unSelectedStars=new Array(5 - nota);
          });
		    });
        this.httpService.getPlates(this.id).then(plates => {
          this.plates = plates;
        });
  		});
      this.session.exist('mesa').then(res => {
        if (res) {
          this.mesaExist = true;
          this.session.get('mesa').then(mesa => {
            if (mesa) {
              this.mesa = mesa;
            }
          });
        }
      });
  	});
  }

  reservar_mesa(id: string): void{
    //TODO
    //fazer toda a leitura/validacao do qr aqui
    //colocar a mesa atual na sessao
    //depois direcionar para a tela de pratos
  }

  read_qr_code(id: string): void{
    //TODO
    //fazer toda a leitura/validacao do qr aqui
    //colocar a mesa atual na sessao
    //depois direcionar para a tela de pratos
    // this.datePicker.show({
    //   date: new Date(),
    //   mode: 'date'
    // }).then(
    //   date => console.log('Got date: ', date),
    //   err => console.log('Error occurred while getting date: ', err)
    // );
  }

  async order(id: string, ev: any) {
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

  async check_in(id: string, ev: any) {
      const popover = await this.popoverController.create({
        component: CheckinComponent,
        componentProps: {
          restauranteId: id  
        },
        event: ev,
        translucent: true
      });
      popover.present();
  }

}
