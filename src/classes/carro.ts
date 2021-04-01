interface ICarro {
  modelo: string;
  ano: number;
}

export default class Carro2 implements ICarro {
  constructor(public readonly modelo: string, public readonly ano: number) {}

  showModelo() {
    return this.modelo;
  }
}