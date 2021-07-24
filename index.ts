// any, number, string, boolean, object, tuple, enum, undefined, 
// null, void, never, unknown
let myName: string = 'Mosfiqur Rahman'; 
let age: number; 
age = 12; 
let isHungry: boolean = false; 


type StringOrNumber = number | string; 
let studentId: StringOrNumber = 45245; 
studentId = 'WEB4-45245'


type PersonType = {name: string, age: number, hobby: string}


let person: PersonType = {
    name: 'Mosfiqur Rahman', 
    age: 26, 
    hobby: 'Sleeping'
}


let person2: PersonType = {
    name: 'Someone', 
    age: 26, 
    hobby: 'codeing'
}


