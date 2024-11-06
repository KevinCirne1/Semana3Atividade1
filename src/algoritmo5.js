//Item e
//Algoritmo 5

const users=[    //Cria uma constante "users" que contem uma lista com o first name(Primeiro nome dos usuarios) e o last name(sobenome dos usuarios)
    {firstName:"john", lastName:"colben", age:26},
    {firstName:"jimmy", lastName:"fred", age:75},
    {firstName:"sam", lastName:"boston", age:50},
    {firstName:"ronald", lastName:"bristh", age:26},   
  ];
  const output = users.map((x)=> x.firstName+" "+x.lastName);  //Cria uma constante "output" que usa o map com o users que é o nome da lista com o nome dos usuarios, coloca os nomes e sobrenomes dos usuarios dentro da variavel x e depois usa a arrow function e faz a junção do primeiro nome com o sobrenome pra ficarem juntos
  console.log(output); //imprime o resultado da constantte "output", o resultado vai ser o nome e sobrenome aparecendo juntos 
  