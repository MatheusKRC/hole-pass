interface ClassicGame {
  background: string,
  desc: string,
  character: string,
  name: string,
  className: string
}

interface PlanCardsI {
  img: string,
  name: string,
  benefits: Array<Array<string>>,
  value: string,
  id: string
}

export type { ClassicGame, PlanCardsI };
