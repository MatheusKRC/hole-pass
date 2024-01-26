import { PlanI } from './planPage';

interface NewGamesI {
  game: string,
  classname: string,
  gameName: string
}

interface GamesI {
  games: Array<PlanI>
}

interface HandleChange {
  target: HTMLInputElement
}

type HandleChangeFunction = (event:HandleChange) => void;

export type { NewGamesI, HandleChange, HandleChangeFunction, GamesI };
