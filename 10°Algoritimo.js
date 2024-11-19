/*
 Crie um vetor de 10 números e peça para o usuário qual número ele deseja verificar se existe no vetor. 
 Caso exista, o programa deve mostrar todos os índices que ele se encontra.

 Dicas: Use dois vetores - Use um laços de repetição
*/

let numeros = [5, 3, 7, 12, 5, 9, 5, 18, 23, 5];

let numeroProcurado = parseInt(prompt("Digite o número que deseja verificar:"));

let indicesEncontrados = [];


for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === numeroProcurado) {
        indicesEncontrados.push(i);  
    }
}

if (indicesEncontrados.length > 0) {
    console.log("O número " + numeroProcurado + " foi encontrado nos índices: " + indicesEncontrados.join(", "));
} else {
    console.log("O número " + numeroProcurado + " não foi encontrado no vetor.");
}
