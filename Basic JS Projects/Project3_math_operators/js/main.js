function mathFunc(){
    document.write("6+9 = ")//additon
    document.write(6+9)
    document.write("<br>")

    document.write("6-9 = ")//subtration
    document.write(6-9)
    document.write("<br>")

    document.write("6*9 = ")//multiplication
    document.write(6*9)
    document.write("<br>")

    document.write("6/9 = ")//division
    document.write(6/9)
    document.write("<br>")

    document.write("(6+9)-4*2/3 = ")//multiple operators
    document.write((6+9)-4*2/3)
    document.write("<br>")

    document.write("9%6 = ")//modulus
    document.write(9%6)
    document.write("<br>")

    document.write("-6 = ")//unary
    document.write(-6)
    document.write("<br>")

    document.write("6++ = ")//increment
    var num = 6
    document.write(num++)
    document.write("<br>")

    document.write("6-- = ")//decrement
    document.write(num--)
    document.write("<br>")

    document.write("Random decimal = ")//generate  random decimal
    var randomDec =Math.random()
    document.write(randomDec)
    document.write("<br>")
    
    document.write("Random Number = ")// generate random number
    var randomNum =Math.floor(Math.random() * 100)  
    document.write(randomNum)
    document.write("<br>")
}
// console.log(document.querySelector('body'))
document.getElementById("math").addEventListener('click', mathFunc)
// document.querySelector("#math").addEventListener('click', mathFunc)