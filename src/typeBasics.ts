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