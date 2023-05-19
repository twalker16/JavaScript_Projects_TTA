var globalVar = 6 // set global variable
function forLocal(){
    var localVar = 7//set local variable
}
// console.log(globalVar + localVar) // error  because localVar is local to forLocal function

function getTime(){
    if (new Date().getHours()<18){ // checks to see if a condition is true, if it is true it will do everything between these curly brackets
        document.getElementById('click').innerHTML = "Idk man, it's daytime I guess..." 
    }else{ // if the condition is not true it will do the following
        document.getElementById('click').innerHTML = "Shhhhh... I'm trying to sleep"
    }
}

function getTime2(){//see above
    if (new Date().getHours()>6){
        document.getElementById('thirdP').innerHTML = "Idk man, it's daytime I guess..."
    }else{
        document.getElementById('thirdP').innerHTML = "Shhhhh... I'm trying to sleep"
    }
}

function Time_Function(){
    var Time = new Date().getHours() // gets hour from a 24 hour clock
    var Reply;
    if(Time <12 == Time>0){ // checks for condition bwtween 1am and 11 am
        Reply="It's Morning time"
    }else if(Time>=12 == Time <18){ // checks for condition between 12pm and 5pm
        Reply="It's the afternoon"
    }else{
        Reply="It's evening"
    }

    document.getElementById("Time_of_day").innerHTML=Reply
}

document.querySelector("#input").addEventListener('click', getTime2)