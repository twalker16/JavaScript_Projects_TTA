// alert('Hello, World 2')
// window.alert("Again")
var x = "Hello, World"//defines a var
// document.write(x)
var string = "This is a string"//defines a variable
window.alert(string) //alerts "This is a string"
var sent1 ="This is the beginning of the string ", sent2 = "and this is the end of the string"// defines 2 variables on one line
document.write(sent1+sent2)//concatenates a  string
// document.write("Lisa told Bart, \"Knock it off, Bart! Or I'll tell dad!\" <br>\"Eat my chorts!\" Bart responded.")
var b="This is a " + "example of concat"+"enation" //concatenates a  string
// document.write(b)
var dog="Luna", cat="Pheobe", bird="word" // defines 3 variables on one line
// document.write(dog)
document.write(6+9) // writes 15 on the page
function newAlert(){
    alert("Yes this is a monster made of spaghetti that flies.")
}
document.querySelector('figure').addEventListener('click', newAlert)