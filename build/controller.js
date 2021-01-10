'use strict';
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k];
          },
        });
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v });
      }
    : function (o, v) {
        o['default'] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, '__esModule', { value: true });
var Utils = __importStar(require('./utils'));
exports.default = {
  // created maze form on frontend
  create: function (req, res) {
    res.status(200).sendFile(__dirname + '/views/index.html');
  },
  // calculate maze turns
  show: function (req, res, next) {
    try {
      // parse maze string.
      var mazeMap = Utils.parseRequest(req.body.maze);
      // main count logic
      var turns = Utils.mazeTurnsCounter(mazeMap);
      // return success response
      res.status(200).json({ data: turns });
    } catch (error) {
      // catch server error
      res.status(500).json({ error: 'Invalid input' });
      // for watch error on server console
      next(error);
    }
  },
};
//# sourceMappingURL=controller.js.map
