function sumar(p1, p2) { // funcion que suma dos parametros
    return p1 + p2; 
  }
  
function restar(p1, p2) { // funcion que resta dos parametros
    return p1 - p2; 
  }
  
function multiplicar(p1, p2) { // funcion que multiplica dos parametros
    return p1 * p2;
  }
  
function dividir(p1, p2) { // funcion que divide dos parametros
    return p1 / p2;
  }
 
module.exports = { // exportar funciones
    sumar: sumar,
    restar: restar,
    multiplicar: multiplicar,
    dividir: dividir
  };