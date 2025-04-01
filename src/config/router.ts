import { Router } from "express";
const router =Router()

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


router.get('/personas', (req, res) => {
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


router.get('/moon' , (req , res) =>{
    res.send('fredy extraña a moon')
})








         



















export default router