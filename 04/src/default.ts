export type Person = {name: string, age: number}

export const makePerson = (name: string, age: number = 10): Person => ({name, age})
console.log(makePerson('Jack'))
console.log(makePerson('Jane', 33))

const printPerson = ({name, age}: Person): void => console.log(`name: ${name}, age: ${age}`)

printPerson({name: 'Jack', age: 10})