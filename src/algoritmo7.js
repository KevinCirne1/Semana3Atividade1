//Item G
//Algoritmo 7


let estudantes =[     //Cria a variavel "estudantes" que contem uma lista com nome e idade dos usuarios
    {nome::"João", idade:15},
    {nome::"Maria", idade:20},
    {nome::"Felipe", idade:22},
    {nome::"Pedro", idade:12},
    {nome::"Joana", idade:18},
   ];
   const details = estudantes.filter((x)=> x.idade >= 18);  //Cria a constante details que são os detalhes do estudantes e usa o filter nos estudantes, armazena as informações dos estudantes na variavel x e usa umaa arrow function, esse filter vai filtrar os Alunos que tem mais de 18 anos
   console.log(details.length); // O length serve pra pegar o tamanho de algo, então o console.log vai imprimir o tamanho dos detalhes
   