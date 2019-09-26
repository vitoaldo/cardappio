import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SpinnerService } from './spinner.service';
import { AlertService } from './alert.service';
import { NetworkService } from './network.service';
import { httpResultModel } from '../models/httpResultModel';
import { UrlAPIService } from './url-api.service';

@Injectable({
	providedIn: 'root'
})
export class HttpService {

	constructor(private http: HttpClient,
		private spinnerService: SpinnerService,
		private alertService: AlertService,
		private networkService: NetworkService,
		private urlAPI: UrlAPIService) { }

	api = this.urlAPI.getURL();

	verifyCanLogin(email: string, pass: string) {

		let promise = new Promise((resolve, reject) => {

			let body = {
				email: email,
				senha: pass
			};
			console.log('BODY CONSTRUIDO =>', body);
			const headers = new HttpHeaders().set('Content-Type', 'application/json');

			this.http.post(this.api + 'api/cliente/auth', body, { headers: headers })
				.toPromise()
				.then((response) => {
					resolve(response);
				}).catch((error) => {
					this.alertService.showAlert("Error:", "the user or the password doesn't exist.");
				});
		});
		return promise;
	}

  	getPlates() {
	  	let promise = new Promise((resolve, reject) => {
		    this.http.get(this.api + 'api/prato/')
		        .toPromise()
		        .then((response) => {
		        	resolve(response);
		        });
	    });
	    return promise;
  	}

  	getRestaurantes() {
	  	let promise = new Promise((resolve, reject) => {
		    this.http.get(this.api + 'api/restaurante/')
		        .toPromise()
		        .then((response) => {
		        	resolve(response);
		        });
	    });
	    return promise;
  	}

	getRestaurante(id: string) {
		let promise = new Promise((resolve, reject) => {
			this.http.get(this.api + 'api/restaurante/' + id)
				.toPromise()
				.then((response) => {
					resolve(response);
				});
		});
		return promise;
	}

	createAccount(nome: string, email: string, pass: string) {
		let promise = new Promise((resolve, reject) => {

			let body = {
				nomeCompleto: nome,
				email: email,
				senha: pass
			};

			const headers = new HttpHeaders().set('Content-Type', 'application/json');

			this.http.post(this.api + 'api/cliente', body, { headers: headers })
				.toPromise()
				.then((response) => {
					resolve(response);
				}).catch((data) => {
					let fullErrorMessage: string = "";

					for (let valid of data.error.validation) {
						fullErrorMessage += valid.message + ".\n";
					}

					this.alertService.showAlert(data.error.message, fullErrorMessage);
				});
		});
		return promise;
	}

}
