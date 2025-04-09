import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

server.listen(8081, '127.0.0.1', () => {
});

let suma = sumar(4,5)
function sumar(p1, p2){ // funcion que suma dos parametros
    return p1+p2;
}
console.log(suma);

let resta = restar(3,6)
function restar(p1, p2){
    console.log(p1-p2); // imprimimos resta
}

let producto = multiplicar(2,7)
function multiplicar(p1, p2){
    console.log(p1*p2); // imprimimos multiplicacion
}

let cociente = dividir(20,4)
function dividir(p1, p2){
    console.log(p1/p2); // imprimimos division
}