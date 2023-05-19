function sentence(){
    var part1="This "
    var part2="is "
    var part3="a "
    var part4="complete "
    var part5="sentence."

    var whole = part1.concat(part2,part3,part4,part5)
    document.getElementById('something').innerHTML = whole
}

function sliceMethod(){
    var sentence = "All work and no play makes me a dull boy"
    var section = sentence.slice(27,30)
    document.getElementById("slice").innerHTML=section
}

function upper(){
    let phrase = document.getElementById('upper').textContent
    phrase = phrase.toUpperCase()
    document.getElementById('upper').textContent = phrase
}

function searchMethod(){
    let text = document.getElementById('search').innerHTML
    const regex = /[^\w\s]/g;
    let result = text.search(regex)
    document.getElementById('search').innerHTML = result
}

function nums(){
    let num = 42
    document.getElementById('nums').innerHTML = num.toString()
}

function perc(){
    let num = 3.141592
    document.getElementById('perc').innerHTML = num.toPrecision(3)
}

function fix(){
    let num = 3.141592
    document.getElementById('fix').innerHTML = num.toFixed(3)
}

function val(){
    let val = new String("Hello, World")
    document.getElementById('val').innerHTML = val.valueOf()
}