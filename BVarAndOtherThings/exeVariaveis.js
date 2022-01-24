let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

console.log (varA, varB, varC);

let varAB = varB; //B
let varBC = varC; //C
let varCA = varA; //C

varA = varAB;
varB = varBC;
varC = varCA;

console.log (varA, varB, varC);

[varA, varB, varC] = [varB, varC, varA]

console.log (varA, varB, varC);