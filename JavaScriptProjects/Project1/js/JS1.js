function color_func(){
    var output;
    var color=document.getElementById('color_input').value
    var string = " is a great color!"

    switch(color){
        case "Red":
            output = color+string
        break;
        case "Blue":
            output = color+string
        break;
        case "Yellow":
            output = color+string
        break;
        case "Green":
            output = "SomeBODY once told me.."
        break;
        default:
            output='Please enter a color name exactly as written on the above list'
    }
    document.getElementById('output').innerHTML=output
}

function className_func(){
    var a = document.getElementsByClassName('click')
    a[0].innerHTML="Told you so"
}

var c = document.getElementById("name");
var ctx = c.getContext("2d");


var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "blue");
grd.addColorStop(1, "green");

ctx.fillStyle = grd;
ctx.fillRect(0, 0, 500, 500);

ctx.beginPath();
ctx.arc(250, 250, 250, 0, 2 * Math.PI);
ctx.stroke();