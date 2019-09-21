import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpService } from '../services/http.service';
import { NavController } from '@ionic/angular';
import { Session } from '../session/session';

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
  	public session: Session
  ) { }

  id:string;
  nome:any;
  email:any;
  local:any;
  quantidadeMesas:any;

  ngOnInit() {
  	this.session.exist().then(res => {
  		if(!res){
    		this.navCtrl.navigateForward('/');
    	}
	  	this.route.queryParams.subscribe(params => {
		    this.id = params["id"];
		    this.httpService.getRestaurante(this.id).then(restaurante => {
		    	this.nome = restaurante.nome;
		    	this.email = restaurante.email;
		    	this.local = restaurante.local;
		    	this.quantidadeMesas = restaurante.quantidadeMesas;
		    });
		});
  	});
  }

}
