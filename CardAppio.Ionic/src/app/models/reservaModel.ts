export class Model {
    constructor(objeto?) {
        Object.assign(this, objeto);
    }
}

export class Reserva extends Model {
    _id: string;
    clienteId: string;
    restauranteId: string;
    restauranteNome: string;
    quantidadeMesas: number;
    dataReserva: Date;
}
