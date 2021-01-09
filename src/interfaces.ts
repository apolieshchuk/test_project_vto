/**
 * Maze cell interface:
 * x - x-position
 * y - y-position
 * distance - distance from start point
 * isWall - true if it's disabled cell (wall)
 */
export default interface MazeCell {
  x: number;
  y: number;
  distance: number;
  isWall: boolean;
}
