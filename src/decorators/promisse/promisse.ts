import fetch from "node-fetch";

function esperar3sPromisse() {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve("3s depois promisse....");
    }, 3000);
  });
}

// esperar3sPromisse().then((dado) => console.log(dado));

fetch("https://swapi.dev/api/people/1")
  .then((res) => res.json())
  .then((personagens) => personagens.films)
  .then((films) => console.log(films));
