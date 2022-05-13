let array: number[] = [1,2,3,4]
let arr: any[] = [1, true, 'Hello']

//tuple
let coder: [number, string, boolean] = [1, 'Aditi', true]
// Tuple Array
let backend: [no: number, tech: string, coder: typeof coder][]

backend = [
    [1, 'ror', [1, 'Aditi', true]],
    [2, 'nodeJS', [2, 'Sakshi', true]]
]
console.log(backend)

//Union hold then one type
let value: number | boolean
value = false

console.log(value)

//enum defines set named constants
enum decisions {
    Wrong,
    Right
}

console.log(decisions.Wrong)

//objects
type User = {
    id: number
    name: string
  }
  
  const user: User = {
    id: 1,
    name: 'Govind',
  }

//Type Assertion tells compiler to treat an entity as diff type
  let uid: any = 1
// let userId = <number>uid
let userId = uid as number

console.log(typeof(userId), userId);
console.log(typeof(uid));

//functions
function addNum(a: number, b: number): number {
    return a + b
  }

console.log(addNum(2,3));

function log(message: string | number): void {
console.log(message)
}

function sayHi(): void { 
    console.log('Hi!')
} 

let message: any = sayHi(); 

//interface 
interface CoderInterface {
    readonly id: number
    name: string
    tech?: string
  }
  
  const coder1: CoderInterface = {
    id: 1,
    name: 'Govind',
  }
  
  //can't be used with unions or primitives
  
  interface MathFunc {
    (x: number, y: number): number
  }
  
  const add: MathFunc = (x: number, y: number): number => x + y
  const sub: MathFunc = (x: number, y: number): number => x - y

  console.log(add(2,2));
  