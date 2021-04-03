"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const libros_controller_1 = __importDefault(require("../controller/libros.controller"));
const libros = express_1.Router();
libros.get('/libros', libros_controller_1.default.getInstance().getAll);
libros.get('/libros/:id', libros_controller_1.default.getInstance().getSingle);
libros.post('/libros', libros_controller_1.default.getInstance().create);
libros.put('/libros/:id', libros_controller_1.default.getInstance().update);
libros.delete('/libros/:id', libros_controller_1.default.getInstance().delete);
exports.default = libros;
