import MazeCell from './interfaces';

/**
 * Parse maze-string from input and creating MazeMap with mazeCell.
 *
 * @param mazeStr JSON array row string
 */
export const createMazeMap = (mazeStr: string): MazeCell[][] => {
  // try parse JSON Array from frontend. If parse error, controller will catch
  const mazeRows: string[][] = JSON.parse(mazeStr);

  // check empty arrays
  if (!mazeRows.length || !mazeRows[0].length) {
    throw new Error();
  }

  // Build Maze Map with MazeCells Objects.
  return mazeRows.map((row: string[], rowIndex: number): MazeCell[] => {
    // Validate NOT the same rows size
    if (row.length !== mazeRows[0].length) {
      throw new Error();
    }

    // set MazeCell object to all columns cells
    return row.map(
      (col: string, colIndex: number): MazeCell => {
        // Validate COLS content
        if (col !== '.' && col !== '#') {
          throw new Error();
        }

        // init mazeCell Object
        const mazeCellObj = {
          x: colIndex,
          y: rowIndex,
          distance: 0,
          isWall: col === '#',
        };

        return mazeCellObj;
      }
    );
  });
};

/**
 * BFS algorithm
 *
 * @param mazeMap maze schema
 * @param queue bfs queue
 * @param endPoint end {x, y} index position in maze
 */
const bfs = (mazeMap: MazeCell[][], queue: MazeCell[], endPoint: MazeCell): number => {
  // get current vertex
  const vertex: MazeCell | undefined = queue.shift();

  // break recursion condition
  if (!vertex) {
    // if no ways find
    return -1;
  }
  if (vertex === endPoint) {
    // if come to the end point
    return endPoint.distance;
  }

  // get neighbors. If neighbor OUT OF MATRIX INDEX it will be undefined
  let neighbours: (MazeCell | undefined)[] = [];
  neighbours.push(mazeMap[vertex.y - 1] ? mazeMap[vertex.y - 1][vertex.x] : undefined); // top
  neighbours.push(mazeMap[vertex.y + 1] ? mazeMap[vertex.y + 1][vertex.x] : undefined); // bot
  neighbours.push(mazeMap[vertex.y][vertex.x - 1]); // left.
  neighbours.push(mazeMap[vertex.y][vertex.x + 1]); // right
  neighbours = neighbours.filter(Boolean); // filter undefiend neighbours

  // do bfs for every neighbour cell
  neighbours.forEach((cell: MazeCell | undefined) => {
    // skip visited cells(distance > 0) and cells with walls
    if (!cell || cell.distance || cell.isWall) {
      return;
    }

    // eslint-disable-next-line no-param-reassign
    cell.distance = vertex.distance + 1;
    if (mazeMap[0][0] !== cell) {
      queue.push(cell);
    }
  });

  return bfs(mazeMap, queue, endPoint);
};

/**
 *  Main function for find shortest way
 */
export const mazeTurnsCounter = (mazeMap: MazeCell[][]): number => {
  const startPoint: MazeCell = mazeMap[0][0];
  const endPoint: MazeCell = mazeMap[mazeMap.length - 1][mazeMap[0].length - 1];
  const turns = bfs(mazeMap, [startPoint], endPoint);
  return turns;
};
