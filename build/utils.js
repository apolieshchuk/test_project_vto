'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.mazeTurnsCounter = exports.parseRequest = void 0;
/**
 * Parse maze-string from input and prepare MazeCell[].
 *
 * @param mazeStr JSON array row string
 */
var parseRequest = function (mazeStr) {
  // try parse JSON Array from frontend. If parse error, controller will catch it
  var mazeRows = JSON.parse(mazeStr);
  // check empty arrays
  if (!mazeRows.length) {
    throw new Error();
  }
  // build Maze Map with MazeCells Objects
  var mazeMap = mazeRows.map(function (row, rowIndex) {
    // maze columns Array with . | # values
    // const mazeColumnsRow: string[] = row.replace(/\[(.*)\]/g, '$1').split(',');
    // set MazeCell obj value in every mazeMap cell
    var mazeColumns = row.map(function (col, colIndex) {
      var mazeCellObj = {
        x: colIndex,
        y: rowIndex,
        distance: 0,
        isWall: col === '#',
      };
      return mazeCellObj;
    });
    return mazeColumns;
  });
  return mazeMap;
};
exports.parseRequest = parseRequest;
/**
 * BFS algorithm
 *
 * @param mazeMap maze schema
 * @param endPoint end {x, y} index position in maze
 * @param queue bfs queue
 */
var bfs = function (mazeMap, endPoint, queue) {
  // get current vertex
  var vertex = queue.shift();
  // break recursion condition
  if (!vertex) {
    return -1;
  }
  if (vertex === endPoint) {
    return endPoint.distance;
  }
  // get neighbors. If neighbor doesnt exists - push undefined
  var neighbours = [];
  neighbours.push(mazeMap[vertex.y - 1] ? mazeMap[vertex.y - 1][vertex.x] : undefined); // top
  neighbours.push(mazeMap[vertex.y + 1] ? mazeMap[vertex.y + 1][vertex.x] : undefined); // bot
  neighbours.push(mazeMap[vertex.y][vertex.x - 1]); // left.
  neighbours.push(mazeMap[vertex.y][vertex.x + 1]); // right
  // do bfs for every neighbour cell
  neighbours.forEach(function (cell) {
    // work only with exists neihbours
    if (!cell) return;
    if (cell.distance === 0 && !cell.isWall) {
      // eslint-disable-next-line no-param-reassign
      cell.distance = vertex.distance + 1;
      if (mazeMap[0][0] !== cell) {
        queue.push(cell);
      }
    }
  });
  return bfs(mazeMap, endPoint, queue);
};
/**
 *  Main function for find shortest way
 */
var mazeTurnsCounter = function (mazeMap) {
  var startPoint = mazeMap[0][0];
  var endPoint = mazeMap[mazeMap.length - 1][mazeMap[0].length - 1];
  var turns = bfs(mazeMap, endPoint, [startPoint]);
  return turns;
};
exports.mazeTurnsCounter = mazeTurnsCounter;
//# sourceMappingURL=utils.js.map
