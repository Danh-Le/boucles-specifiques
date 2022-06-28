// // 01 - Map Double
// const array = [1, 2, 3, 4, 5]
// const double = array.map((array) => {
//     return array *2
// })
// console.log(double)

// // 02 - Map Names
// const longNames = [
//     {
//         firstName: "Jane",
//         lastName: "Doe"
//     },
//     {
//         firstName: "John",
//         lastName: "Smith"
//     }
// ]
// const shortNames = longNames.map((longName) => {
//     return "name: " + longName.firstName + " " + longName.lastName
// })
//     console.log(shortNames)

// // 03 - Filter Numbers
// const array = [1, "toto", 34, "javascript", 8]
// const numbers = array.filter((number) => {
//     return typeof number === "number"
// })
// console.log(numbers)

// // 04 - Filter Even
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// const even = numbers.filter((number) => {
//     return number = number % 2 === 0
// })
// console.log(even)

// 05 - Cake
// const cake = 
// [
// 	{
// 		name: "cake",
// 		flavor: "vanilla",
// 		status: "available"
// 	},
// 	{
// 		name: "brownie",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// 	{
// 		name: "pie",
// 		flavor: "strawberry",
// 		status: "available"
// 	},
// 	{
// 		name: "muffin",
// 		flavor: "pistachio",
// 		status: "available"
// 	},
// 	{
// 		name: "donut",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// ]
// const chocolates = cake.filter((cake) => {
//     return cake.flavor === "chocolate"
// })
//     console.log(chocolates)
// const soldOut = chocolates.filter((chocolate) => {
//     return chocolate.status = (status = "sold out!")
// })
// console.log(soldOut)

// // 06 - Cake v2
// const cake = 
// [
// 	{
// 		name: "cake",
// 		flavor: "vanilla",
// 		status: "available"
// 	},
// 	{
// 		name: "brownie",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// 	{
// 		name: "pie",
// 		flavor: "strawberry",
// 		status: "available"
// 	},
// 	{
// 		name: "muffin",
// 		flavor: "pistachio",
// 		status: "available"
// 	},
// 	{
// 		name: "donut",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// ]
// const pie = cake.find((cake) => {
//     return cake.name === "pie"
// })
//     console.log(pie)

// // 07 - Factorielle forEach
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// let factorielle = 9
// numbers.forEach((number) => {
//     factorielle *= number
// })
//     console.log(factorielle)

// // 08 - Chess board
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7]
// numbers.forEach((num, i) => {
//     numbers.forEach((j) => {
//         if ((j + i) % 2 == 0) {
//             num += `[ ]`
//         } else {
//             num += `[x]`
//         }
//     })
//     console.log(num)
// })

// // 09 - Exercice 3 Bis
// const array = [12, 55, "hello", true, { isStudent: false }, 3]
// const numbers = array.filter((number) => {
//     return typeof number === "number"
// })
// console.log(numbers)