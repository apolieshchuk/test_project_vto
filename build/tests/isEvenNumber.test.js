'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var isEvenNumber_1 = __importDefault(require('./isEvenNumber'));
describe('isEvenNumber Tests', function () {
  it('Its an even number', function () {
    [2, 4, 6, 100, 200, 0].map(function (n) {
      return expect(isEvenNumber_1.default(n)).toEqual(true);
    });
  });
  it('Its an odd number', function () {
    [3, 1, 1232141, 113, 11, 5].map(function (n) {
      return expect(isEvenNumber_1.default(n)).toEqual(false);
    });
  });
});
//# sourceMappingURL=isEvenNumber.test.js.map
