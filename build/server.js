'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var app_1 = __importDefault(require('./app'));
// Constants
var port = 3000;
var host = '0.0.0.0';
// Start server
app_1.default.listen(port, host, function () {
  return console.log('Server is listening on port ' + port + '!');
});
//# sourceMappingURL=server.js.map
