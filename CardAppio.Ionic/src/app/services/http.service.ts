import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { HttpClient } from 'selenium-webdriver/http';
import { SpinnerService } from './spinner.service';
import { AlertService } from './alert.service';
import { NetworkService } from './network.service';
import { httpResultModel } from '../models/httpResultModel';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient,
    private spinnerService: SpinnerService,
    private alertService: AlertService,
    private networkService: NetworkService) { }

  	verifyCanLogin(email: string, pass:string) {
	  	let promise = new Promise((resolve, reject) => {

	  		let body = {
				email: email,
				senha: pass
				};

		  	let headers = new HttpHeaders();

	    	headers.append('Content-Type', 'application/x-www-form-urlencoded');

		    this.http.post('http://localhost:3000/api/cliente/auth/', JSON.stringify(body), {headers: headers})
		        .toPromise()
		        .then(
		          res => { 
		            resolve(res);
		          },
		          msg => { 
		            reject(msg);
		          }
		        );
	    });
	    return promise;
  	}

}
