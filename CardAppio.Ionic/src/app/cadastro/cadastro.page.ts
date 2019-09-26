import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpService } from '../services/http.service';
import { Session } from '../session/session';
import { Cliente } from '../models/clienteModel';
import { AlertService } from '../services/alert.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
	selector: 'app-cadastro',
	templateUrl: './cadastro.page.html',
	styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

	constructor(
		public navCtrl: NavController,
		public httpService: HttpService,
		public alertService: AlertService,
		public session: Session,
		private camera: Camera
	) { }


cameraOptions: CameraOptions = {
	quality: 100,
	destinationType: this.camera.DestinationType.FILE_URI,
	encodingType: this.camera.EncodingType.JPEG,
	mediaType: this.camera.MediaType.PICTURE
}

takePhoto(){
	this.camera.getPicture(this.cameraOptions).then((imageData) => {
		let base64 = 'data:image/jpeg;base64, ' + imageData;
		this.
	})
}

	nome: string;
	email: string;
	senha: string;

	cliente: Cliente;

	ngOnInit() {
		this.session.exist().then(res => {
			if (res) {
				this.navCtrl.navigateForward('/tabs/perfil');
			}
		});
	}

	signin(): void {
		this.httpService.createAccount(this.nome, this.email, this.senha).then(cliente => {
			if (cliente) {
				this.cliente = new Cliente(cliente);
				this.session.create(this.cliente);
				this.navCtrl.navigateForward('tabs');
			}
			else {
				this.alertService.showAlert("Error:", "Couldn`t create account.");
			}
		});
	}

}
