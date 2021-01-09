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
  // created maze from frontend
  create: function (req, res) {
    res.status(200).sendFile(__dirname + '/views/index.html');
  },
  // calculate maze turns
  show: function (req, res) {
    // parse string
    var mazeMap = Utils.parseRequest(req.body.maze);
    // TODO validation maze
    var turns = Utils.mazeTurnsCounter(mazeMap);
    // if (mazeArr.length !== 5)
    // mazeArr = maze.match(/\[[01,ы]{5}\]/g); // get mazes rows
    // maze.map( str => s)
    // const regx = /\[.*\]/g;
    // const formatedInput = maze.match(regx);
    // const regex = /\[[.",#]\]/g;
    // const regx = /(^.*\[)(.*)(\].*$)/g;
    // const formatedInput = req.body.maze.replace(regx, '$2');
    // const formatedInput = req.body.maze.exec(regx, '');
    // const formatedInput = regx.exec(req.body.maze);
    // console.log(parsedMaze);
    res.status(200).send({ data: turns });
  },
};
//# sourceMappingURL=controller.js.map
