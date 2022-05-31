"use strict";
let _id = 5;
let firstName = 'Pawel';
let x = "hello";
let age;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "hello"];
//tuple
let person = [_id, firstName, true];
//tuple array
let employee;
employee = [
    [1, firstName],
    [2, 'brad'],
];
//union
let product_id;
//enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Down);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Down);
const user = {
    id: _id,
    name: firstName
};
//type assertion
let cid = 1;
let customerId = cid;
//let customerId = cid as number
//functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
//void
function log(message) {
    console.log(message);
}
log('hello');
const user1 = {
    id: _id,
    name: firstName
};
log(user1.id);
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//classes 
class Person {
    constructor(id, userName) {
        this.id = id;
        this.userName = userName;
    }
    register() {
        return `${this.userName} is now registered`;
    }
}
const brad = new Person(1, "Brad");
const pawel = new Person(2, "Pawel");
console.log(brad.id, pawel.id);
console.log(brad, pawel);
console.log(brad.register());
//subclasses
class Employee extends Person {
    constructor(id, userName, position) {
        super(id, userName);
        this.position = position;
    }
}
const emp = new Employee(3, "Pablo", 'Developer');
console.log(emp.register());
//generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Brad', 'Pawel', 'John']);
strArray.push('abc');
strArray.push('def');
numArray.push(2);
console.log(strArray);
console.log(numArray);
