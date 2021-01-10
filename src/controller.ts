import { Request, Response, NextFunction } from 'express';
import * as Utils from './utils';
import MazeCell from './interfaces';

export default {
  // created maze form on frontend
  create: (req: Request, res: Response) => {
    res.status(200).sendFile(`${__dirname}/views/index.html`);
  },

  // calculate maze turns
  show: (req: Request, res: Response, next: NextFunction) => {
    try {
      // creating MazeMap with mazeCell Objects.
      const mazeMap: MazeCell[][] = Utils.createMazeMap(req.body.maze);

      // main count logic
      const turns = Utils.mazeTurnsCounter(mazeMap);

      // return success response
      res.status(200).json({ data: turns });
    } catch (error) {
      // catch server error
      res.status(400).json({ error: 'Invalid input' });

      // for watch error on server console
      next(error);
    }
  },
};
