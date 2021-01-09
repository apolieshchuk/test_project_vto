import MazeCell from './interfaces';

/**
 * Parse maze-string from input and prepare MazeCell[]
 * @param mazeStr not formated maze string from input
 */
export const parseRequest = (mazeStr: string): MazeCell[][] => {
  // remove whitespaces and quotes
  const maze: string = mazeStr.replace(/[\s"]/g, '');

  // get mazes rows
  const mazeRows: RegExpMatchArray | null = maze.match(/\[[.#,]*\]/g);

  if (!mazeRows) {
    return [];
  }

  // build Maze Map with MazeCells Objects
  const mazeMap = mazeRows.map((row: string, rowIndex: number): MazeCell[] => {
    // maze columns Array with . | # values
    const mazeColumnsRow: string[] = row.replace(/\[(.*)\]/g, '$1').split(',');

    // set MazeCell obj value in every mazeMap cell
    const mazeColumns: MazeCell[] = mazeColumnsRow.map((col: string, colIndex: number) => {
      const mazeCellObj = {
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

/**
 * BFS algorithm
 *
 * @param mazeMap maze schema
 * @param endPoint end {x, y} index position in maze
 * @param queue bfs queue
 */
const bfs = (mazeMap: MazeCell[][], endPoint: MazeCell, queue: MazeCell[]): number => {
  // get current vertex
  const vertex: MazeCell | undefined = queue.shift();

  // break recursion condition
  if (!vertex) {
    return -1;
  }
  if (vertex === endPoint) {
    return endPoint.distance;
  }

  // get neighbors. If neighbor doesnt exists - push undefined
  const neighbours: (MazeCell | undefined)[] = [];
  neighbours.push(mazeMap[vertex.y - 1] ? mazeMap[vertex.y - 1][vertex.x] : undefined); // top
  neighbours.push(mazeMap[vertex.y + 1] ? mazeMap[vertex.y + 1][vertex.x] : undefined); // bot
  neighbours.push(mazeMap[vertex.y][vertex.x - 1]); // left.
  neighbours.push(mazeMap[vertex.y][vertex.x + 1]); // right

  // do bfs for every neighbour cell
  neighbours.forEach((cell: MazeCell | undefined) => {
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
export const mazeTurnsCounter = (mazeMap: MazeCell[][]): number => {
  const startPoint: MazeCell = mazeMap[0][0];
  const endPoint: MazeCell = mazeMap[mazeMap.length - 1][mazeMap[0].length - 1];
  const turns = bfs(mazeMap, endPoint, [startPoint]);
  return turns;
};
