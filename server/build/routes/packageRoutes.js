"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const packageControllers_1 = __importDefault(require("../controllers/packageControllers"));
class PackageRoutes {
    constructor() {
        this.router = (0, express_1.Router)(); //se esta creando la propiedad que guardara el objeto devuelto y se inicializa esta propiedad en la misma línea de código.
        this.config();
    }
    config() {
        this.router.get('/', packageControllers_1.default.list); //esta creando un aruta para mi aplicación del servidor para la ruta inicial y se devuelve el mensaje Hello.
        this.router.get('/', packageControllers_1.default.getOne);
        this.router.post('/', packageControllers_1.default.create);
        this.router.delete('/:id', packageControllers_1.default.delete); //se indica que recibe como parámetro el i del juego para poder eliminarlo
        this.router.put('/:id', packageControllers_1.default.update);
    }
}
const packageRoutes = new PackageRoutes;
exports.default = packageRoutes.router;
