

import { Router } from 'express';
import sequelize from './db'; 

const router = Router();

router.get('/grupo', async (req, res) => {
    try {
        const [results, metadata] = await sequelize.query('SELECT * FROM evento ');
        res.json(results); 
    } catch (error) {
        console.error('Error al ejecutar la consulta:', error);
        res.status(500).send('Error en la consulta');
    }
});



router.get('/',(req, res)=>{
    res.send('¡hola mundo2 ');
});
 



router.get('/sumar', (req, res)=>{
    res.send('¡sumar!');
});


router.get('/dividir', (req, res) =>{


    function dividir (a,b) {
        return a/b;
    }
    const resultado2=dividir(10,2)
    res.send({resultado2})
})


router.get('/personas1', (req, res) => {
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
        },{
            nombre :'santiago',
            edad: 19,
            nacionalidad : 'española'
        },{
            nombre :'alexa',
            edad : 20,
            nacionalidad :'española'
        }
    ];

    res.json(personas);
});

export default router