import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-fazer-reserva',
  templateUrl: './fazer-reserva.page.html',
  styleUrls: ['./fazer-reserva.page.scss'],
})
export class FazerReservaPage implements OnInit {
  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];
  customPickerOptions: any;
  dataEscolhida: any;

  constructor(private httpService: HttpService) {
    this.customPickerOptions = {
      buttons: [{
        text: 'Escolher data',
        handler: (date) => {
          this.dataEscolhida = date;
        }
      }, {
        text: 'Fechar',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }
  }

  ngOnInit() {
  }

  confirmarAgendamento() {
    // this.httpService.postReserva()
  }

}
