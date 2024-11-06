//Item F
//Algoritmo 6


const input = prompt();    //cria uma constante input que recebe a função prompt que é uma função que retorna uma string, porém não tem nada passado como argumento dentro dela
const value = parserInt(input); //cria uma constante "value" que recebe a função "parserInt" essa função troca numeros "flutuantes por exemplo "para valores inteiros
const array = new Array(input).fill(null); //cria uma constante "array" que recebe new Array, o new array recebe como paramentro o input e usa o metodo fill que preenche os elementos de u  array com um determinado valor. esse .fill recebe como parametro o NULL que é um valor nulo
let values = new Array(input) //declara a variavel values que recebe um "newArray". o "newArray" recebe como paramentro o input
  .fill(null)  //usa o metodo fill que recebe o null como argumento
  .map((currentValue, index) => index + 1); //usa a função "map" que contém "currentValue e Index" e usa uma uma arrow function que recebe index +1, esse index + 1 vai adicionar 1 ao valor digitado
