"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class UsuariosController {
    index(req, resp) {
        database_1.default.query('DESCRIBE usuarios'); //ejecuta una operación sobre la base de datos y muestra la estructura de la tabla 
        resp.json('usuarios'); //Da como resultado una respuesta en json pero envía puro texto pues la tabla aun no tiene datos .
    }
    create(req, resp) {
        resp.json({ text: 'Creating a user' });
    }
}
const usuariosController = new UsuariosController();
exports.default = usuariosController;
