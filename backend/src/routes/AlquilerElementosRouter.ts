
import { Router } from 'express';

import { AlquilerElementosControllers} from '../controllers/AlquilerElementos';


const router = Router();



router.get('/', AlquilerElementosControllers.getAll);




export default router

