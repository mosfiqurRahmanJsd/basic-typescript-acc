// any, number, string, boolean, object, tuple, enum, undefined, 
// null, void, never, unknown
let myName: string = 'Mosfiqur Rahman'; 
let age: number; 
age = 12; 
let isHungry: boolean = false; 


type StringOrNumber = number | string; 
let studentId: StringOrNumber = 45245; 
studentId = 'WEB4-45245'


interface Person {
    name: string, 
    age: number,
    hobby ?: string
}

type PersonType = {name: string, age: number, hobby: string}


let person: Person = {
    name: 'Mosfiqur Rahman', 
    age: 26, 
    hobby: 'Sleeping'
}


let person2: Person = {
    name: 'Someone', 
    age: 26, 
    hobby: 'COdeing'
}


// Array
const numbers: (number | string)[] = [33, 40, 65, 85, 65, 'mosfiqur', 'shuvo']


const persons: Person[] = [
    {
        name: 'mosfiqur', 
        age: 23, 
        hobby: 'codeing'
    }, 
    {
        name: 'jhankar', 
        age: 23, 
        hobby: 'codeing'
    }, 
    {
        name: 'solayman sadhin', 
        age: 23, 
        hobby: 'codeing'
    }
]




// function

const greeting = (name: string): void => {
    console.log(`Hello ${name}`)
}
greeting('Mosfiqur');


const add = (a: number, b: number): number => {
    return a + b; 
}


const introduce = (person: Person): void => {
    console.log(`Hello, my name is ${person.name}`)
}

introduce({
    name: 'mosfiqur rahman', 
    age: 26
})



