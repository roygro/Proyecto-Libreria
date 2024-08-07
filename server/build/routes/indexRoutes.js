"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexControllers_1 = require("../controllers/indexControllers");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)(); //se esta creando la propiedad que guardara el objeto devuelto y se inicializa esta propiedad en la misma línea de código.
        this.config();
    }
    config() {
        this.router.get('/', indexControllers_1.indexController.index); //esta creando un aruta para mi aplicación del servidor para la ruta inicial y se devuelve el mensaje Hello.
    }
}
const indexRoutes = new IndexRoutes;
exports.default = indexRoutes.router;
