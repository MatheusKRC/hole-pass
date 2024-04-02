import { ActualPlan } from './user';

interface PlanI {
  name: string,
  src: string,
  link: string,
  plan: string,
}

interface PlanComponentI {
  games: Array<PlanI> | Array<ActualPlan>,
  plan:string,
  button:string,
  boxSize:string,
  nameSize:string,
  logoSize:string,
  planSize:string
}

export type { PlanI, PlanComponentI };
