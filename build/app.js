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
// Constants
var port = 3000;
var host = '0.0.0.0';
// Start server
app.listen(port, host, function () {
  return console.log('Server is listening on port ' + port + '!');
});
//# sourceMappingURL=app.js.map
