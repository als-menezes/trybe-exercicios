//PARTE 1

let a = 5;
let b = 3;

//programa adição
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//PARTE 2

const n1 = 5;
const n2 = 3;

//Maior de dois números
if (n1 > n2) {
    console.log(n1);
} else {
    console.log(n2);
}

//PARTE 3

const a1 = 5;
const a2 = 3;
const a3 = 2;

//Maior de três números
if (a1 > a2 && a1 > a3) {
    console.log(a1);
} else if (a2 > a1 && a2 > a3) {
    console.log(a2);
} else {
    console.log(a3);
}

//PARTE 4

const num1 = 0;

//Positivo e negativo
if (num1 > 0) {
    console.log('positive');
} else if (num1 < 0) {
    console.log('negative');
} else {
    console.log('zero');
}

//PARTE 5 :foguetinho:

const ang1 = 45;
const ang2 = 70;
const ang3 = 65;

//Angulos de um triangulo
if ((ang1 + ang2 + ang3) === 180) {
    console.log('true');
} else {
    console.log('false');
    console.log('ERRO: um dos ângulos está incorreto.');
}

//PARTE 6

let pecaXadrez = 'peao';
let pecaFinal = pecaXadrez.toLowerCase;

if (pecaFinal === 'bispo') {
    console.log('diagonais');
} else if (pecaFinal == 'peao') {
    console.log('apenas para frente');
} else if (pecaFinal === 'torre') {
    console.log('horizontal e vertical');
} else if (pecaFinal === 'cavalo') {
    console.log('movimento em L');
} else if (pecaFinal === 'rei') {
    console.log('qualquer casa adjacente');
} else if (pecaFinal === 'rainha') {
    console.log('diagonais, horizontal e vertical');
} else {
    console.log('ERRO: peça não identificada.');
}