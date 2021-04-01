//let o escopo é do bloco

let seraQuePode = "?";
console.log(seraQuePode);

let estaFrio = true;
if (estaFrio) {
  let acao = "colocar o casaco";
  console.log(acao);
}

const cpf: string = "123.456.000-99";
console.log(cpf);

var segredo = "externo!";
function revelar() {
  const segredo = "interno";
  console.log(segredo);
}
revelar();
console.log(segredo);

const subtrair = (n1: number, n2: number): number => n1 - n2;
console.log(subtrair(5, 4));

function contagemRegressiva(
  inicio: number = 5,
  fim: number = inicio - 5
): void {
  console.log(inicio);
  while (inicio > fim) {
    inicio--;
    console.log(inicio);
  }
  console.log("fim");
}
contagemRegressiva(5);

const numbers = [1, 10, 99, -5, 200, 1034];
console.log(Math.max(...numbers));

const turmaA: string[] = ["joao", "maria", "fernanda"];
const turmaB: string[] = ["Fernando", "miguel", "lorena", ...turmaA];
console.log(turmaB);

function retornarArray(...args: number[]): number[] {
  return args;
}

const numeros = retornarArray(1, 2, 4, 5, 6, 345, 623);
console.log(numeros);

// Rest & Spread (Tupla)
const tupla: [number, string, boolean] = [1, "abc", false];
function tuplaParam1(a: number, b: string, c: boolean): void {
  console.log(`1 ${a}, ${b}, ${c}`);
}
tuplaParam1(...tupla);

function tuplaParam2(...params: [number, string, boolean]) {
  console.log(`2 ${params[0]} ${params[1]}, ${params[2]} `);
}
tuplaParam2(...tupla);

// Destructuring (array)
const caracteristicas = ["Motor Zetec 1.8", 2020];
const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);

// Destructuring (objeto)
const item = {
  nome: "SSD 480GB",
  preco: 200,
  caracteristicas: {
    w: "importado",
  },
};
const {
  nome: n,
  preco: p,
  caracteristicas: { w },
} = item;
console.log(n);
console.log(p);
console.log(w);
