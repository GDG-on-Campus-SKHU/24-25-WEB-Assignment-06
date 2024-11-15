type Person = {
  id: number,
  name: string,
  age: number,
  gender: string,
  favorite: string
}

type AddPersonFunc = (person: Person) => void;