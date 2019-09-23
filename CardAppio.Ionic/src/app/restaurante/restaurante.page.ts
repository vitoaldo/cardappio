import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpService } from '../services/http.service';
import { NavController } from '@ionic/angular';
import { Session } from '../session/session';
// import { DatePicker } from '@ionic-native/date-picker';

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
    // ,
    // public datePicker: DatePicker
  ) { }

  id:string;
  nome:any;
  email:any;
  local:any;
  quantidadeMesas:any;

  plates:any;

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
        this.httpService.getPlates().then(plates => {
          this.plates = plates;
        });
  		});
  	});
  }

  reservar_mesa(id: string): void{
    //TODO
    //fazer toda a leitura/validacao do qr aqui
    //colocar a mesa atual na sessao
    //depois direcionar para a tela de pratos
    console.log(id);
  }

  read_qr_code(id: string): void{
    //TODO
    //fazer toda a leitura/validacao do qr aqui
    //colocar a mesa atual na sessao
    //depois direcionar para a tela de pratos
    console.log(id);
    // this.datePicker.show({
    //   date: new Date(),
    //   mode: 'date'
    // }).then(
    //   date => console.log('Got date: ', date),
    //   err => console.log('Error occurred while getting date: ', err)
    // );
  }

}
