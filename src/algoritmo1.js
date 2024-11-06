//ITEM A   ALGORITMO 1       


//Cria uma pasta com o Semana3Atividade1

         

const numeros = [1,2,3,4,5]; // Cria uma constante com uma lista que vai de 1 a 5
function calcularDobro(numero) //Cria uma função que vai calcular o dobro de cada numero da lista
{
  return numero*2;  // vai retornar o valor do numero vezes 2
}
const numerosDobro = numeros.map(calcularDobro); //usa o map para fazer uma "copia" da lista de numeros anterior já com a funcionalidade de calcular o dobro, sem a necessidade de criar uma função
console.log(numerosDobro); // vai imprimir o valor do numerosDobro
