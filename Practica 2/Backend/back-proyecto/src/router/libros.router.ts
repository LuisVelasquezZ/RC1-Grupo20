import { Router } from "express";
import LibrosController from "../controller/libros.controller"
const libros = Router();

libros.get('/libros', LibrosController.getInstance().getAll);
libros.get('/libros/:id', LibrosController.getInstance().getSingle);
libros.post('/libros', LibrosController.getInstance().create);
libros.put('/libros/:id', LibrosController.getInstance().update);
libros.delete('/libros/:id', LibrosController.getInstance().delete);

export default libros;