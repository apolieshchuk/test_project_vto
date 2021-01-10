'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var express_1 = __importDefault(require('express'));
// Application routing
var router_1 = __importDefault(require('./router'));
// Express
var app = express_1.default();
// Parse JSON bodies (as sent by axios)
app.use(express_1.default.json());
// Application routing
app.use('/', router_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map
