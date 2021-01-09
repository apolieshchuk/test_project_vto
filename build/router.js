'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var controller_1 = __importDefault(require('./controller'));
var express = require('express');
var router = express.Router();
// main routes
router.get('/', controller_1.default.create);
router.post('/maze', controller_1.default.show);
exports.default = router;
//# sourceMappingURL=router.js.map
