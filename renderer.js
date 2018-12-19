// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var loki = require('lokijs');
var db = new loki('db.json');
var clientes = db.addCollection('clientes');

clientes.insert({
    nome: 'Anderson Ribeiro',
    email: 'andersonribeiro.sifacisa@gmail.com'
});

db.save()