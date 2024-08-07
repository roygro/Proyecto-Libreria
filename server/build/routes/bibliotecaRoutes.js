"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bibliotecaControllers_1 = __importDefault(require("../controllers/bibliotecaControllers"));
const express_1 = require("express");
class BibliotecasRoutes {
    constructor() {
        this.router = (0, express_1.Router)(); //se esta creando la propiedad que guardara el objeto devuelto y se inicializa esta propiedad en la misma línea de código.
        this.config();
    }
    config() {
        this.router.get('/', bibliotecaControllers_1.default.index); //esta creando un aruta para mi aplicación del servidor para la ruta inicial y se devuelve el mensaje Hello.
        this.router.post('/', bibliotecaControllers_1.default.create);
    }
}
const bibliotecasRoutes = new BibliotecasRoutes;
exports.default = bibliotecasRoutes.router;
