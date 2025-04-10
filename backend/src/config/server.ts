import express from 'express';
import colors from 'colors';
import morgan from 'morgan';
import sequelize from './db'; 
import router from './router';

async function connectDB() {
    try {
        await sequelize.authenticate(); 
        console.log(colors.blue.bold('Conexión exitosa a la Base de datos echo por Alex'));

      
        try {
            const [results, metadata] = await sequelize.query('SELECT * FROM evento  ');
            console.log('Datos de ejemplo:', results);
        } catch (error) {
            console.error('Error al ejecutar la consulta:', error);
        }
    } catch (error) {
        console.error('Error al conectar a la BD:', error);
        console.log(colors.red.bold('Falló la conexión a la BD'));
    }
}

connectDB();

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use('/',router);


export default app;
