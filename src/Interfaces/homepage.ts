interface ClassicGame {
  background: string,
  desc: string,
  character: string,
  name: string
}

interface PlanCardsI {
  img: string,
  name: string,
  benefits: Array<Array<string>>,
  value: string
}

export type { ClassicGame, PlanCardsI };
