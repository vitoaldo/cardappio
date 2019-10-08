import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Session } from '../session/session';
import { Cliente } from '../models/clienteModel';
import { AlertService } from '../services/alert.service';
import { NavController } from '@ionic/angular';


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
  restauranteId: string;
  quantidadePessoas: number;
  cliente: Cliente;

  constructor(private httpService: HttpService,
    private route: ActivatedRoute,
    public session: Session,
    private alert: AlertService,
    private navCtrl: NavController) {
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
    };
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.restauranteId = params["restauranteId"];
    });
    this.session.get('cliente').then((res) =>{
      this.cliente = res;
    });
  }

  confirmarAgendamento() {
    this.httpService.postReserva(this.dataEscolhida, this.restauranteId, this.cliente._id, this.quantidadePessoas).then(res =>{
      this.alert.showToast('Reserva efetuada com sucesso!');
      this.navCtrl.navigateRoot('tabs/reservas');
    });
  }

}
