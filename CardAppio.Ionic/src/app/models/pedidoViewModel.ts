export class pedidoViewModel {
    prato: string;
    valor: number;

}

export class pedidoTotal {
    pratos: pedidoViewModel[];
    valorFinal: number;

    constructor() {
        this.pratos = {} as pedidoViewModel[];
        this.valorFinal = 0;
    }
}