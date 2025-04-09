import { createServer } from 'node:http';
import {sumar, restar, dividir, multiplicar} from './calculos.js';
const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write("Hola");
  res.write(sumar(5,3).toString()); // imprimimos la funcion sumar y la convertimos en un string
  res.write(restar(8,6).toString());
  res.write(multiplicar(3,11).toString());
  res.write(dividir(30,5).toString());
  res.end(""); // respuesta final vacía
});

server.listen(8082, '127.0.0.1', () => {
});

