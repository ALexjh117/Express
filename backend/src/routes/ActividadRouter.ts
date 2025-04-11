

import { Router } from 'express';

import { ActividadControllers } from '../controllers/ActividadController';


const router = Router();



router.get('/' , ActividadControllers.getAll);



export default router

