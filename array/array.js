let pilotos = ["Senna", "Prost", "Shumacher", "Lauda"];

console.log([0]);
console.log([3]);

// Acessar o tamanho do array.
console.log(pilotos.length);

// Interável
for (let piloto of pilotos) {
    console.log(piloto);
}

// Adicionar elementos.
pilotos.push('Alonso');
console.log(pilotos);

// Encontrar um elemento.
let senna = pilotos.find(piloto => piloto === "Senna");
console.log(senna);

// Deletar um elemento.
pilotos.splice(1, 1);
console.log(pilotos);