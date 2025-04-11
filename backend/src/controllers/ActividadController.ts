import type { Request , Response } from "express";

export class ActividadControllers{
    static getAll =async (req:Request , res:Response) =>{
        console.log('Desde /api/ hola poncho Vcitor')
    }
}