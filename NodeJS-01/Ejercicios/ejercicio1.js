import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

server.listen(8081, '127.0.0.1', () => {
});

console.log("Hola mundo desde Node.js"); 
console.log("Fin");
