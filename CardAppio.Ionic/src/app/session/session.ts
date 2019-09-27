import { Storage } from "@ionic/storage";
import { Injectable } from '@angular/core';
import { Cliente } from '../models/clienteModel';

@Injectable({
    providedIn: 'root'
})
export class Session {

    constructor(public storage: Storage){

    }

    create(cliente: Cliente) {
        this.storage.set('cliente', cliente);
    }

    get(): Promise<any> {
        return this.storage.get('cliente');
    }

    remove() {
        this.storage.remove('cliente');
    }

    exist(): Promise<boolean> {
        return this.get().then(res => {
            if(res) {
                return true;
            } else {
                return false;
            }
        });
    }
}