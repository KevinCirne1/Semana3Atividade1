// Item B 
//Algoritmo 2

const numbers = [1,2,3,4,5]; // cria uma constante "numbers "com uma lista quevai de 1 a 5
const output = arr.map((x)=>{ // cria uma constante "output" e usa o map para colocar os numeros da lista na variavel x, porém no lugar de arr.map deveria estar numbers.map, pois o nome da lista é numbers, se colocar arr.map não vai armazenar nada

  return x * 2;   // retorna o resultado dos numeros que estão armazenados em x multiplicados pelo numero dois 
});
console.log(numbers);  // imprime  a lista de numeros [1,2,3,4,5], ele não vai retornar os numeros multiplicados por 2 porque esses numeros estão armazenados na constante output.


