export type Person = {
  id: number,
  name: string,
  age: number,
  gender: string,
  favorite: string
}

export type AddPersonFunc = (person: Person) => void;