// any, number, string, boolean, object, tuple, enum, undefined, 
// null, void, never, unknown
var myName = 'Mosfiqur Rahman';
var age;
age = 12;
var isHungry = false;
var studentId = 45245;
studentId = 'WEB4-45245';
var person = {
    name: 'Mosfiqur Rahman',
    age: 26,
    hobby: 'Sleeping'
};
var person2 = {
    name: 'Someone',
    age: 26,
    hobby: 'COdeing'
};
// Array
var numbers = [33, 40, 65, 85, 65, 'mosfiqur', 'shuvo'];
var persons = [
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
];
// function
var greeting = function (name) {
    console.log("Hello " + name);
};
greeting('Mosfiqur');
var add = function (a, b) {
    return a + b;
};
var introduce = function (_a) {
    var name = _a.name, age = _a.age, hobby = _a.hobby;
    console.log("Hello, my name is " + person.name + ", and i am " + age + " year's old");
};
introduce({
    name: 'mosfiqur rahman',
    age: 26
});
