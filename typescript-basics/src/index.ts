let _id: number = 5

let firstName: string = 'Pawel'

let x: any = "hello"

let age: number

let ids: number[] = [1,2,3,4,5]

let arr: any[] = [1, true, "hello"]

//tuple
let person: [number, string, boolean] = [_id, firstName, true]

//tuple array
let employee: [number, string][]

employee = [
    [1, firstName],
    [2, 'brad'],
]

//union
let product_id:string | number

//enum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}

console.log(Direction1.Down)

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

console.log(Direction2.Down)

//objects
type User = {
    id: number,
    name: string
}

const user: User = {
    id: _id,
    name: firstName
}

//type assertion
let cid: any = 1
let customerId = <number>cid
//let customerId = cid as number

//functions
function addNum(x: number, y: number): number {
    return x+y
}

console.log(addNum(1, 2))

//void
function log(message: string | number): void {
    console.log(message)
}
log('hello')

//interfaces
interface UserInterface{
    id: number, //can be a 'readonly'
    name: string,
    age?: number
}

const user1: UserInterface = {
    id: _id,
    name: firstName
}
log(user1.id)

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x+y
const sub: MathFunc = (x: number, y: number): number => x-y

interface PersonInterface{
    id: number, //can be a 'readonly'
    userName: string,
    register(): string
}

//classes 
class Person implements PersonInterface{
    id: number
    userName: string

    constructor(id: number, userName: string){
        this.id = id
        this.userName = userName
    }

    register(){
        return `${this.userName} is now registered`
    }
}

const brad = new Person(1, "Brad")
const pawel = new Person(2, "Pawel")

console.log(brad.id, pawel.id)
console.log(brad, pawel)
console.log(brad.register())

//subclasses
class Employee extends Person {
    position: string

    constructor(id: number, userName: string, position: string){
        super(id, userName)
        this.position = position
    }
}

const emp = new Employee(3, "Pablo", 'Developer')

console.log(emp.register())

//generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['Brad', 'Pawel', 'John'])

strArray.push('abc')
strArray.push('def')
numArray.push(2)

console.log(strArray)
console.log(numArray)