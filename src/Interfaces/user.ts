interface BlackHoleUser {
  benefits: Array<Array<string>>,
  cpf: string,
  email: string,
  firstName: string,
  lastName: string,
  password: string,
  plan: string,
  planImage: string,
  planName: string,
  planValue: string,
  username: string,
}

interface BlackHoleUserFinal {
  benefits: Array<Array<string>>,
  cpf: string,
  email: string,
  firstName: string,
  lastName: string,
  password: string,
  plan: string,
  purchased: boolean,
  planImage: string,
  planName: string,
  planValue: string,
  username: string,
  desc: string,
}

interface ActualPlan {
  src: string
}

export type { BlackHoleUser, ActualPlan, BlackHoleUserFinal };
