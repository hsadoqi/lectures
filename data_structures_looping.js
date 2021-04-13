// const arr = [1, 2, 3, 4, 5]

// console.log(arr.length)
// console.log(arr.includes(2))
// console.log(arr.includes(6))

// destructive methods

// arr.push(6)
// console.log(arr.push(6))
// console.log("push", arr)

// arr.unshift(0)
// console.log("unshift", arr)

// arr.pop()
// console.log("pop", arr)

// arr.shift()
// console.log("shift", arr)

// non destructive methods

// const animals = ["dog", "cat", "cow", "frog"]

// console.log(animals.slice(2))

// const newAnimals = animals.slice(0, 3)
// first argument is starting index, second argument is end -- non-inclusive

// console.log(newAnimals)

// animals.splice(1, 2, "giraffe")
// first argument is starting index, second argument is how many elements 
// to delete, third is whatever we want to add to 

// console.log(animals)


// copy of array 

// const animals = ["dog", "cat", "cow", "frog"]

// const newAnimals = [...animals]

// console.log(newAnimals)

// // combine two arrays 

// const animalsSquared = [...animals, ...newAnimals]

// console.log(animalsSquared)

// const addZooAnimals = [ "lion", "hippo", "elephant", ...animals]
// console.log(addZooAnimals)

// const strArray = [..."hello"]
// console.log(strArray)

// console.log(Math.max(...[12, 36, 25]))

// const arr = [1, 2, 3, 4, 5]

// function sum(...nums){
//     let val = 0 
//     for(let n of nums){
//         val += n
//     }
//     console.log(val)
// }

// sum(...arr)

const messages = ["hi", "hello", "goodbye", "see ya"]

// let i = messages.length-1
// while(i > 0){
//     console.log(messages[i])
//     i--
// }


// let i = 0 
// do {
//     console.log('hi')
//     i++
// } while (i < 5)

// for(let i = messages.length-1; i >= 0; i--){
//     console.log(messages[i])
// }


// object literal 

const person = {
    name: "John Doe", 
    age: 24, 
    eyes: "blue"
}

// console.log(person)

// const x = person

// x.student = false

// person.speak = function(){
//     console.log("hello")
// }


// console.log(person)

// object constructor 

// const child = new Object({name: "Mary Doe"})

// person.child = child

// console.log(person.child.name)

// blueprint for a type of object we create ourselves 

// function Person(first, last, age, eye, ...children){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//     this.speak = function(){
//         console.log(`Hi my name is ${this.firstName}`)
//     }
//     this.children = [...children]
// }

// this is the object that "owns" the code 
// in an object, the value of "this" is the object itself 


// const mother = new Person("Jane", "Doe", 45, "green")
// const mary = new Person("Mary", "Doe", 12, "blue")
// const peter = new Person("Peter", "Doe", 16, "green")
// const father = new Person("John", "Doe", 50, "blue", mary, peter)


// father.speak()
// mother.speak()

// console.log(father)
// mary.speak()

// for...of loop 

// const statement = "tuesdays are great!"
// for(let char of statement){
//     console.log(char)
// }

// const array = ["a", 1, "c", "dog"]
// for(let potato of array){
//     console.log(potato)
// }

// const animals = [
//     {
//         type: "cat",
//         size: "small",
//         weight: 5,
//     },
//     {
//         type: "dog",
//         size: "small",
//         weight: 10,
//     },
//     {
//         type: "lion",
//         size: "medium",
//         weight: 150,
//     },
//     {
//         type: "elephant",
//         size: "big",
//         weight: 5000,
//     },
// ];

// for(let animal of animals){
//     console.log(animal.size)
// }

// const user = {
//     name: "Michael", 
//     age: 23, 
//     eyeColor: "blue", 
//     birthday: function(){
//         this.age++
//     }
// }

// for(const key in user){
//     console.log(user[key])
// }

// const arr = ["hi", "hello", "goodbye"]

// for(let key in arr){
//     console.log(`${++key}. ${arr[key]}`)
// }