/*
Primitivos (imutáveis) - string, number, boolean, undefined, symbol,
null (bigint, symbol) - Valores copiados
Referência (mutável) - array, object, function - Passados por referência
*/
const a = {
    nome: 'dfgffg',
    sobrenome: 'ferere'
  };
  const b = a;
  
  b.nome = 'João';
  console.log(a);
  console.log(b);


 const NOME = 'Gustavo' //String
 const NOME2 = "Gustavo" //String
 const NOME3 = `Gustavo` //String

 const num = 10;        //number
 const num1 = 10.43     //number

 let nomeAluno; // undefined = não aponta para local nenhum da memória

 let sobrenome = null;  //nulo - > não aponta para local nenhum da memória
 

 //para ver o tipo de uma variavel utiliza a funçao typeof
 console.log(typeof NOME)
