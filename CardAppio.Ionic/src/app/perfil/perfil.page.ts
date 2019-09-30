import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Session } from '../session/session';
import { Cliente } from '../models/clienteModel';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

   constructor(
  	public navCtrl: NavController,
  	public session: Session
  ){}


  nome:string;
  email:string;
  foto:string;

  cliente: Cliente;

  
  ngOnInit() {
    
  }

  ionViewWillEnter() {
  	this.session.exist().then(res => {
  		if(!res){
  			this.navCtrl.navigateForward('/');
  		}
	  });

  	this.session.get().then(res => {
        this.cliente = new Cliente(res);
	  	this.nome = this.cliente.nomeCompleto; 
	  	this.email = this.cliente.email; 
      this.foto = this.cliente.foto; 
    });
  }

  logout(): void {
  	this.session.remove();
	  this.navCtrl.navigateForward('/');
  }
}
