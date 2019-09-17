import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { SpinnerService } from './spinner.service';
import { AlertService } from './alert.service';
import { NetworkService } from './network.service';
import { Promise } from 'q';
import { httpResultModel } from '../models/httpResultModel';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient,
    private spinnerService: SpinnerService,
    private alertService: AlertService,
    private networkService: NetworkService) { }

    // public get(url: string): Promise<httpResultModel>{
    //   this.spinnerService.Show('Carregando dados, aguarde...');

    //   return new Promise((resolve) => {
    //     return this.http.send(resolve).then(x =>{

    //     }).catch((error) => {

    //     }
    //     )
    //   });
    // }

}
