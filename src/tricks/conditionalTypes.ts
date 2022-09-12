interface Animal {
  name: string
}

interface Human {
  firstName: string
  lastName: string
}

type GetRequiredInformation<TType> = TType extends Animal
  ? { age: number }
  : TType extends Human ? {
    socialSecurity: number
  } : never

export type RequiredInformationForAnimal = GetRequiredInformation<Animal>

export type RequiredInformationForHiman = GetRequiredInformation<Human>

export type RequiredInformationForBird = GetRequiredInformation<{
  kind: 'bird'
}>
