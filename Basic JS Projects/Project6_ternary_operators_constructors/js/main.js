function ride_function(){ // create ternary function
    var height, can_ride;
    height = document.getElementById('height').value
    can_ride= (height < 52) ? "You are too short":"You are tall enough" // ternary syntax
    document.getElementById('ride').innerHTML=can_ride
}

function can_vote(){// create ternary function
    var age, can_vote;
    age = document.getElementById('age').value
    can_vote= (age < 18) ? "You are too young":"You are old enough"
    document.getElementById('vote').innerHTML=can_vote
}

function Dog(breed, name, age, color){ // constructor function
    this.Dog_breed=breed
    this.Dog_name=name
    this.Dog_age=age
    this.Dog_color=color
}

var Luna = new Dog('White German Shepherd', "Luna", 12, "White") // use of new keyword

// var this = 'cannot display'
// console.log(this)
function displayDog(){ // displays Luna
    document.getElementById('new_and_this').innerHTML = Luna.Dog_name + " is a " + Luna.Dog_breed + " who is " + Luna.Dog_age + " years old  with " + Luna.Dog_color +" fur."
}

function nestFunc(){ // example of nested function
    document.getElementById('nested').innerHTML = funcNested()
    function funcNested(){
        return  "This is a little silly"
    }
}