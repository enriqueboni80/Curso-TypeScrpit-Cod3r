class Jogo {
  private arrayJogos: Array<any> = [];

  constructor(private qtdDezena: number, private qtdJogos: number) {
    this.gerarJogos();
  }

  private gerarUmJogo(): number[] {
    let arrayJogo: number[] = [];
    let dezenaSorteada: number;
    let dezenaJaFoiSorteada: boolean = false;

    while (arrayJogo.length < this.qtdDezena) {
      dezenaSorteada = Math.floor(Math.random() * Math.floor(60));
      dezenaJaFoiSorteada = this.verificarSeNumeroJaFoiSorteado(
        dezenaSorteada,
        arrayJogo
      );
      if (!dezenaJaFoiSorteada) {
        arrayJogo.push(dezenaSorteada);
      }
    }
    let jogoOrdenado: number[] = this.ordernarDezenas(arrayJogo);
    return jogoOrdenado;
  }

  private gerarJogos(): void {
    for (let index = 0; index < this.qtdJogos; index++) {
      this.arrayJogos.push(this.gerarUmJogo());
    }
  }

  private verificarSeNumeroJaFoiSorteado(
    dezenaSorteada: number,
    arrayDezenas: number[]
  ): boolean {
    return arrayDezenas.includes(dezenaSorteada);
  }

  private ordernarDezenas(arrayDezenas: number[]): number[] {
    return arrayDezenas.sort((a, b) => a - b);
  }

  public getJogosGerados(): [][] {
    return this.arrayJogos;
  }
}

const jogo = new Jogo(10, 3);
console.log(jogo.getJogosGerados());
