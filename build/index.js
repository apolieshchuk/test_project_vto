"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// Express
var app = express_1.default();
// константы
var port = 3000;
var host = '0.0.0.0';
// Application routing
app.use('/', function (req, res) {
    res.status(200).send({ data: 'Hello on A.Polieshchuk Server' });
});
// Start server
app.listen(port, host, function () { return console.log("Server is listening on port " + port + "!"); });
//# sourceMappingURL=index.js.map