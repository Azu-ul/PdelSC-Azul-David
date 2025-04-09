import { createServer } from 'node:http';
import {sumar, restar, dividir, multiplicar} from './calculos.js';
const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h2 style="text-align:center;">Resultados de Operaciones</h2>')
  const resultadoSuma = sumar(5, 3);
  const resultadoResta = restar(8, 6);
  const resultadoMultiplicacion = multiplicar(3, 11);
  const resultadoDivision = dividir(30, 5);

  // creamos variable html
  const html = `
    <html>
        <head>
            <style>
            table, th, td {
                background-color:pink;
                border: 1px solid black;
                border-collapse: collapse;
            }
            th, td {
                padding: 8px;
            }
            </style>
        </head>
      <body>
        <table>
          <tr>
            <th>Operacion</th>
            <th>Resultado</th>
          </tr>
          <tr>
            <td>5 + 3</td>
            <td>${resultadoSuma}</td>
          </tr>
          <tr>
            <td>8 - 6</td>
            <td>${resultadoResta}</td>
          </tr>
          <tr>
            <td>3 . 11</td>
            <td>${resultadoMultiplicacion}</td>
          </tr>
          <tr>
            <td>30 / 5</td>
            <td>${resultadoDivision}</td>
          </tr>
        </table>
      </body>
    </html>
  `;
  res.end(html); // respuesta final es la variable html
});

server.listen(8082, '127.0.0.1', () => {
});

