import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/clienteModel';
import { HttpService } from '../services/http.service';
import { Session } from '../session/session';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.page.html',
  styleUrls: ['./reserva.page.scss'],
})
export class ReservaPage implements OnInit {

  constructor(private httpService: HttpService, public session: Session) { }

  reservas: ReservaPage;
  cliente: Cliente;

  ngOnInit() {
    // this.session.get('cliente').then(res => {
    //   this.cliente = new Cliente(res);
    //   this.httpService.getReservas(this.cliente._id).then(reservas => {
    //     this.reservas = reservas;
    //     this.reservas.forEach((obj) => {

    //     }
    //   });
    // });
  }



}
