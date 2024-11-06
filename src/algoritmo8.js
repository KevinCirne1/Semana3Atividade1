//Item h
//Algoritmo 8

const users=[  //Cira uma constante Users que contem uma lista com o nome, sobrenome e idade dos usuarios
    {firstName:"john", lastName:"colben", age:26},
    {firstName:"jimmy", lastName:"fred", age:75},
    {firstName:"sam", lastName:"boston", age:50},
    {firstName:"ronald", lastName:"bristh", age:26},  
  ];
  const output=users.filter((x)=>x.age<30).map((x)=>x.firstName); //Cria a constante "output" e usa o filter no users que contem a lista de usuarios, armazena as informações dentro da variavel x, usa uma arrow function, e o filter vai filtrar somente os estudantes que tiverem menos de 30 anos, usa o map e uma arrow function para só pegar o nome do usuario

  console.log(output); // Vai imprimir output, o resultado será o (nome dos alunos) que tiverem (menos de 30 anos)
  