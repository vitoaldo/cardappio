export class Model {
  constructor(objeto?) {
      Object.assign(this, objeto);
  }
}

export class Cliente extends Model {
    _id: string;
    nomeCompleto: string;
    email: string;
    senha: string;
    dataCadastro: string;
}