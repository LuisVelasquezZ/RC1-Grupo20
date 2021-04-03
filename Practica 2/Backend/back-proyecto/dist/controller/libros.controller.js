"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Libros = require('../model/libros.model');
class LibrosController {
    constructor() {
        /**
         * OBTENER TODOS LOS CASOSs
         */
        this.getAll = (req, res) => {
            Libros.find().sort({ $natural: -1 })
                .exec((err, data) => {
                if (err) {
                    res.status(400).json({
                        ok: false,
                        status: 400,
                        error: err
                    });
                }
                else {
                    res.json(data);
                }
            });
        };
        /**
         * OBTENER UN CASO
         */
        this.getSingle = (req, res) => {
            let body = {
                id: req.params.id
            };
            Libros.find({ _id: body.id })
                .exec((err, data) => {
                if (err) {
                    res.status(400).json({
                        ok: false,
                        status: 400,
                        error: err
                    });
                }
                else {
                    res.json(data[0]);
                }
            });
        };
        /**
         * CREAR CASO
         */
        this.create = (req, res) => {
            let casos = new Libros({
                ISBN: req.body.ISBN,
                titulo: req.body.titulo,
                autor: req.body.autor,
                precio: req.body.precio,
                cantidad: req.body.cantidad,
            });
            casos.save((err, dataDB) => {
                if (err) {
                    res.status(400).json({
                        ok: false,
                        status: 400,
                        error: err
                    });
                }
                else {
                    res.json({
                        ok: true,
                        status: 200,
                        data: dataDB
                    });
                }
            });
        };
        /**
         * ACTUALIZAR CASOS
         */
        this.update = (req, res) => {
            let body = {
                id: req.params.id,
                ISBN: req.body.ISBN,
                titulo: req.body.titulo,
                autor: req.body.autor,
                precio: req.body.precio,
                cantidad: req.body.cantidad,
            };
            Libros.findOneAndUpdate(body.id, body, (err, dataDB) => {
                if (err) {
                    res.status(400).json({
                        ok: false,
                        status: 400,
                        error: err
                    });
                }
                else {
                    res.json({
                        ok: true,
                        status: 200,
                        data: dataDB
                    });
                }
            });
        };
        /**
         * ELIMINAR CASOS
         */
        this.delete = (req, res) => {
            let body = {
                id: req.params.id,
                estado: false
            };
            Libros.findOneAndDelete(body.id, body, (err, dataDB) => {
                if (err) {
                    res.status(400).json({
                        ok: false,
                        status: 400,
                        error: err
                    });
                }
                else {
                    res.json({
                        ok: true,
                        status: 200,
                        data: dataDB
                    });
                }
            });
        };
    }
    static getInstance() {
        return this._instance || (this._instance = new this());
    }
}
exports.default = LibrosController;
