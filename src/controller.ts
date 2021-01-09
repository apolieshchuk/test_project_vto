import { Request, Response } from 'express';
import * as Utils from './utils';
import MazeCell from './interfaces';

export default {
  // created maze from frontend
  create: (req: Request, res: Response) => {
    res.status(200).sendFile(`${__dirname}/views/index.html`);
  },

  // calculate maze turns
  show: (req: Request, res: Response) => {
    // parse string
    const mazeMap: MazeCell[][] = Utils.parseRequest(req.body.maze);

    // TODO validation maze
    const turns = Utils.mazeTurnsCounter(mazeMap);

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

    res.status(200).send({ data: mazeMap });
  },
};
