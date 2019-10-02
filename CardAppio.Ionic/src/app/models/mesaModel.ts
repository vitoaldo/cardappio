export class Model {
  constructor(objeto?) {
      Object.assign(this, objeto);
  }
}

export class Mesa extends Model {
    mesa: number;
    restauranteId: string;
    clienteId: string;
}