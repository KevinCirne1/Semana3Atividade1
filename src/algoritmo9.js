//item i
//algoritmo 9




let students = [ //cria a variavel students que contem uma lista com o nome dos students e a média(average) deles
    {name:"Smith", average:80},
    {name:"Jenny", average:69},
    {name:"John", average:35},
    {name:"Tiger", average:55}
   ];
   const output = student.map((student)=>{  //cria uma constante "output" e usa o map no student para pegar o nome e media de um estudante por vez, se fosse studants pegaria as informações de todos os students, usa uma arrow function
       if(student.marks < 60){  //usa o if que vai dar uma condição,  se as marks(notas?) dos students for menor que 60
           student.average += 20; // a media dos students será maior ou igual a 20
       }
       return student;  //retorna o resultado dos student
   }).filter((student)=> student.average > 60);   //vai filtrar os student em que a média é maior que 60
   console.log(output); //vai imprimir o resultado da variavel output
   
   