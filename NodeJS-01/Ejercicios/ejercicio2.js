import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

server.listen(8081, '127.0.0.1', () => {
});

let a = 4+5;
let b = 3-6;
let c = 2*7;
let d = 20/4;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
