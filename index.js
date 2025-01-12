// Iteration 1: Names and Input
const hacker1 = "Fernando"
const hacker2 = "Alberto"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let word = ""

for (let i = 0; i < hacker1.length; i++) {
    word += hacker1[i] + " "
}

console.log(word.toUpperCase())

let reverse = ""
for (let i = hacker2.length - 1; i >= 0; i--) {
    reverse += hacker2[i]
}

console.log(reverse)