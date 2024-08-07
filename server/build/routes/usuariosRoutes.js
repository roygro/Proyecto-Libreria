"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usuariosControllers_1 = __importDefault(require("../controllers/usuariosControllers"));
const express_1 = require("express");
class UsuariosRoutes {
    constructor() {
        this.router = (0, express_1.Router)(); //se esta creando la propiedad que guardara el objeto devuelto y se inicializa esta propiedad en la misma línea de código.
        this.config();
    }
    config() {
        this.router.get('/', usuariosControllers_1.default.index); //esta creando un aruta para mi aplicación del servidor para la ruta inicial y se devuelve el mensaje Hello.
        this.router.post('/', usuariosControllers_1.default.create);
    }
}
const usuariosRoutes = new UsuariosRoutes;
exports.default = usuariosRoutes.router;
