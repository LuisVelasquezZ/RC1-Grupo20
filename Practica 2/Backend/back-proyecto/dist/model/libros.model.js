"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let librosSchema = new Schema({
    ISBN: {
        type: String,
        required: [true, 'ISBN is required.']
    },
    titulo: {
        type: String,
        required: [true, 'Titulo is required.']
    },
    autor: {
        type: String,
        required: [true, 'Autor is required.']
    },
    precio: {
        type: Number,
        required: [true, 'Precio is required.']
    },
    cantidad: {
        type: Number,
        required: [true, 'Cantidad is required.']
    }
});
module.exports = mongoose.model('Libros', librosSchema);
