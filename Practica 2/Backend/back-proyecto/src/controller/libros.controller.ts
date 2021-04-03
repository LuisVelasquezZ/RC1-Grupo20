import { Request, Response } from 'express';
const Libros = require('../model/libros.model')

export default class LibrosController {
    private static _instance: LibrosController;

    constructor() {
    }

    public static getInstance() {
        return this._instance || ( this._instance = new this() );
    }

    /**
     * OBTENER TODOS LOS CASOSs
     */
    getAll = (req: Request, res: Response) =>  {
        Libros.find().sort({$natural:-1})
        .exec((err:any, data:any) => {
            if(err) {
                res.status(400).json({
                    ok: false,
                    status: 400,
                    error: err
                });
            } else {
                res.json(data);
            } 
        })
    }

    /**
     * OBTENER UN CASO
     */
    getSingle = (req: Request, res: Response) => {
        let body = {
            id : req.params.id
        }
        
        Libros.find({_id: body.id})
        .exec((err:any, data:any) => {
            if(err) {
                res.status(400).json({
                    ok: false,
                    status: 400,
                    error: err
                });
            } else {
                res.json(data[0]);
            } 
        })
    }

    /**
     * CREAR CASO
     */
    create = (req: Request, res: Response) => {
        let casos = new Libros({
            ISBN: req.body.ISBN,
            titulo: req.body.titulo,
            autor: req.body.autor,
            precio: req.body.precio,
            cantidad: req.body.cantidad,
        });

        casos.save((err:any, dataDB:any) => {
            if(err) {
                res.status(400).json({
                    ok: false,
                    status: 400,
                    error: err
                });
            } else {
                res.json({
                    ok: true,
                    status: 200,
                    data: dataDB
                });
            }            
        });  
    }

    /**
     * ACTUALIZAR CASOS
     */
    update = (req: Request, res: Response) => {
        let body = {
            id: req.params.id,
            ISBN: req.body.ISBN,
            titulo: req.body.titulo,
            autor: req.body.autor,
            precio: req.body.precio,
            cantidad: req.body.cantidad,
        }

        Libros.findOneAndUpdate(body.id, body, (err:any, dataDB:any) => {
            if(err) {
                res.status(400).json({
                    ok: false,
                    status: 400,
                    error: err
                });
            } else {
                res.json({
                    ok: true,
                    status: 200,
                    data: dataDB
                });
            }  
        })
    }

    /**
     * ELIMINAR CASOS
     */
    delete = (req: Request, res: Response) => {
        let body = {
            id: req.params.id,
            estado: false
        }

        Libros.findOneAndDelete(body.id, body, (err:any, dataDB:any) => {
            if(err) {
                res.status(400).json({
                    ok: false,
                    status: 400,
                    error: err
                });
            } else {
                res.json({
                    ok: true,
                    status: 200,
                    data: dataDB
                });
            }  
        })
    }
}