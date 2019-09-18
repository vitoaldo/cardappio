import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TabsPage } from '../tabs/tabs.page';
import { AlertService } from '../services/alert.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
  	public navCtrl: NavController,
  	public alertService: AlertService,
  	public httpService: HttpService
  ){}

  email:string;
  password:string;
  post;

  ngOnInit() {
  }

  logar(): void {
  	let userEmail = this.email;
  	let userPassword = this.password;

  	this.httpService.verifyCanLogin(userEmail, userPassword).then(posts => {
    	this.post = posts;

    	if(this.post){
    		this.navCtrl.navigateForward('tabs');
	  	}
	  	else{
	  		this.alertService.showAlert("Error:", "the user or the password doesn't exist.");
	  	}
    });
  }
}
