import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { NavParams, NavController, PopoverController } from '@ionic/angular';
import { Session } from '../session/session';

@Component({
  selector: 'app-avaliar',
  templateUrl: './avaliar.component.html',
  styleUrls: ['./avaliar.component.scss'],
})
export class AvaliarComponent implements OnInit {

  selectedStars:Array<any>=new Array(0);
  unSelectedStars:Array<any>=new Array(5);
  pedido:any;
  prato:any;
  avaliacao:any;

  constructor(
  	public httpService: HttpService,
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public session: Session,
    public popoverController: PopoverController
  ) { }

  ngOnInit() {
  	this.pedido = this.navParams.get('pedido');
  	this.httpService.getRating(this.pedido._id).then((res) => {
		this.avaliacao = res;
		this.selectedStars = new Array(this.avaliacao.nota);
	  	this.unSelectedStars = new Array(5 - this.selectedStars.length);
  	});
  }

  set_rating(rating: number, selected: boolean){
  	let definedValue:number = selected ? rating + 1 : (this.selectedStars.length) + (rating + 1);

  	this.httpService.getPrato(this.pedido.prato).then((prato) => {
  		this.prato = prato;
	  	this.httpService.createOrUpdateRating(this.pedido._id, this.prato.restauranteId, definedValue).then((res) => {
			this.selectedStars = new Array(definedValue);
		  	this.unSelectedStars = new Array(5 - this.selectedStars.length);
	  	});
  	});
  }

}
