// function logarClasse(constructor: Function) {
//     console.log(constructor)
// }

// new Eletrodomestico()

// @decorator({a: 'Teste', b: 123})
// class Teste {
//     constructor() {
//         console.log('novo....')
//     }
// }

// function decorator(obj: {a: string, b?: number}){
//     return function(_:Function): void{
//         console.log(obj.a + ' ' +obj.b)
//     }
// }

// @logarObjeto
// class Eletrodomestico {
//   constructor() {
//     console.log("novo....");
//   }
// }

// type constructor = {new (...args: any[]): {}}

// function logarObjeto(constructor: constructor){
//     console.log('carregando....')
//     return class extends constructor {
//         constructor(...args: any[]){
//             console.log('antes...')
//             super(...args)
//             console.log('depois...')
//         }
//     }
// }

// new Eletrodomestico()

// interface Eletrodomestico{
//     imprimir(): void
// }

// @imprimivel
// class Eletrodomestico {
//     constructor() {
//         console.log('novo')
//     }
// }

// function imprimivel(construtor: Function){
//     construtor.prototype.imprimir = function() {
//         console.log(this)
//     }
// }

// new Eletrodomestico().imprimir()

// Desafio Decorator perfilAdmin
const usuarioLogado = {
  nome: "Guilherme Filho",
  email: "guigui@gmail.com",
  admin: false,
};

// @perfilAdmin
// class MudancaAdministrativa {
//   critico() {
//     console.log("Algo crítico foi alterado!");
//   }
// }

// new MudancaAdministrativa().critico();

// function perfilAdmin(constructor: Function) {
//   return class extends constructor {
//     constructor(...args: any[]) {
//       super(...args);
//       if (!usuarioLogado || !usuarioLogado.admin) {
//         throw new Error("serm permissão");
//       }
//     }
//   };
// }
