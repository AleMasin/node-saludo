function saludo(name = "Alejandro") {
    return `Hola, ${name}`;
  }
  
console.log('------------------------------------');
console.log(saludo());
console.log('------------------------------------');

module.exports = {
  saludo
};