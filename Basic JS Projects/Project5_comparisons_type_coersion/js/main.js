document.write(typeof(6)) // writes variable type
document.write("<br>")//break in page
document.write("I ate " + 6 + " apples")// coercion of int data type into string 
document.write("<br>")
document.write(6E999) // infinity
document.write("<br>")
document.write(-6E999) // negative infinity
document.write("<br>")
document.write(6>9) // using greater than
document.write("<br>")
document.write(6<9)// using less than

console.log(6>9) //logs into the console using greater than
console.log(6==9) //compares two values regardless of type
console.log(9=="9")// compares two values regardless of type

console.log(9===9) //compares type and value
console.log(9==="6")
console.log(9==="9")
console.log(9===6)

console.log(3===3 && 4===4)// tests and conditions
console.log(3===2 && 4===4)
console.log(3===2 || 4===4)// tests or conditions
console.log(3===2 || 4===!4)

console.log(6!=9)// using not operator
console.log(6!=6)