import { Component, OnInit } from '@angular/core';


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

  constructor() {
  this.customPickerOptions = {
    buttons: [{
      text: 'Save',
      handler: (date) => {
        let today = new Date();
        if (date > today){
          console.log('Data valida!', date);
        }
        else {
          console.log('DATA INVALIDA', date);
        }
      }
    }, {
      text: 'Log',
      handler: () => {
        console.log('Clicked Log. Do not Dismiss.');
        return false;
      }
    }]
  }
  }

  ngOnInit() {
  }

}
