"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, resp) {
        resp.send('Hola bonita!!!');
    }
}
exports.indexController = new IndexController();
