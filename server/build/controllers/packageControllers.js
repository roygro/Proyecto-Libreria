"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class PackageController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const packages = yield database_1.default.query('SELECT * FROM package'); //ejecuta una operación sobre la base de datos y muestra la estructura de la tabla 
            resp.json(packages); //Da como resultado una respuesta en json pero envía puro texto pues la tabla aun no tiene datos .
        });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body); //antes del resp.json con el texto se coloca esta línea. Cuando angular envia los datos, lo hará mediante este req.body
            yield database_1.default.query('INSERT INTO package set ?', [req.body]); //Con esto ya se dice que va a ir a guardar a la base de datos
            resp.json({ message: 'Package Saved' });
        });
    }
    delete(req, resp) {
        resp.json({ text: 'Deleting  a package' });
    }
    update(req, resp) {
        resp.json({ text: 'Update  a package' });
    }
    getOne(req, resp) {
        resp.json({ text: 'This is a package' + req.params.id });
    }
}
const packageController = new PackageController();
exports.default = packageController;
