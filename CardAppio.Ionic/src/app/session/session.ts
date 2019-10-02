import { Storage } from "@ionic/storage";
import { Injectable } from '@angular/core';
import { Cliente } from '../models/clienteModel';
import { Mesa } from '../models/mesaModel';


@Injectable({
    providedIn: 'root'
})
export class Session {

    constructor(public storage: Storage){

    }

    createCliente(cliente: Cliente) {
        this.storage.set('cliente', cliente);
    }

    createMesaCheckin(mesa: Mesa) {
        this.storage.set('mesa', mesa);
    }

    get(session: string): Promise<any> {
        return this.storage.get(session);
    }

    remove(session: string) {
        this.storage.remove(session);
    }

    exist(session: string): Promise<boolean> {
        return this.get(session).then(res => {
            if(res) {
                return true;
            } else {
                return false;
            }
        });
    }
}