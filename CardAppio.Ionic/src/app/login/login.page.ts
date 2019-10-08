import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TabsPage } from '../tabs/tabs.page';
import { AlertService } from '../services/alert.service';
import { HttpService } from '../services/http.service';
import { Session } from '../session/session';
import { Cliente } from '../models/clienteModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public alertService: AlertService,
    public httpService: HttpService,
    public session: Session
  ) { }

  cliente: Cliente;
  email: string;
  password: string;
  tipoAcesso: boolean = true;

  
  ngOnInit() {
    
  }

  ionViewWillEnter() {
  }

  logar(): void {
    
    if (this.tipoAcesso === true) {
      this.httpService.verifyCanLogin(this.email, this.password).then(cliente => {
        if (cliente) {
          this.cliente = new Cliente(cliente);
          this.session.createCliente(this.cliente);
          this.navCtrl.navigateForward('tabs');
        }
        else {
          this.alertService.showAlert("Error:", "the user or the password doesn't exist.");
        }
      });
    }
    else {
      
    }
  }

  signup(): void {
    this.navCtrl.navigateForward('cadastro');
  }

  forget_pass(): void {
    if (this.email) {

    } else {
      this.alertService.showAlert("Error:", "Fill email field to recover password.");
    }
  }

  escolheTipo(): void {
    if (this.tipoAcesso === true) {
      this.tipoAcesso = false;
    }
    else {
      this.tipoAcesso = true;
    }
  }
}
