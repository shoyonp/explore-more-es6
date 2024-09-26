/**
 * 1. var let const 
 * 2. default parameter
 * 3. template string
 * 4. arrow function
 * 5. destructuring and spread operator
 * 6. object.keys, object.values, object.entries
 * 7. for of used in array and string
 * 8. for in loop used in object 
 */

const  a = 56;
const numbers = [56, 93, 39]
const person = {
    name: 'Purna'
}

const message = `Hi, ${person.name} has a: ${a} access to ${numbers[2]}`

if(true){

}


const square = x => x * x;
const sum = (a, b) =>  a + b;


const {age, z, ...others} = {x: 2, y: 5, z: 3, name: 'Purna', age: 19 }

const [first, second, ...remaining] = ['Purna', 'Bou', 'Aparna', 'Punu'] 