"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const port = 3004;
app.get('/', (req, res) => {
    res.send('hola mundo!');
});
app.get('/personas', (req, res) => {
    const personas = [
        {
            nombre: 'alex',
            edad: 18,
            nacionalidad: 'colombia'
        },
        {
            nombre: 'juan',
            edad: 18,
            nacionalidad: 'mexico'
        }, {
            nombre: 'santiago',
            edad: 19,
            nacionalidad: 'española'
        }, {
            nombre: 'alexa',
            edad: 20,
            nacionalidad: 'española'
        }
    ];
    res.json(personas);
});
app.get('/sumar', (req, res) => {
    function sumar(a, b) {
        return a + b;
    }
    const resultado = sumar(5, 8);
    res.send({ resultado });
});
app.get('/dividir', (req, res) => {
    function dividir(a, b) {
        return a / b;
    }
    const resultado2 = dividir(10, 2);
    res.send({ resultado2 });
});
app.listen(port, () => {
    console.log(`el servidor se esta escuchando ${port}`);
});
//# sourceMappingURL=app.js.map