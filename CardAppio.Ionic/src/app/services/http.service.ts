import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { SpinnerService } from './spinner.service';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient,
    private spinnerService: SpinnerService,
    private alertService: AlertService) { }
}
