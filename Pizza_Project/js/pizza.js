function getReceipt(){
    var text1 = "<h3>You Ordered:</h3>"
    var runningTotal=0
    var sizeTotal=0
    var sizeArray=document.getElementsByClassName('size')
    for(let i =0; i<sizeArray.length; i++){
        if(sizeArray[i].checked){
            var selectedSize=sizeArray[i].value
            text1 = text1+selectedSize+'<br>'
        }
    }
    if(selectedSize === 'Personal Pizza'){
        sizeTotal=6
    } else if(selectedSize === 'Small Pizza'){
        sizeTotal=8
    } else if(selectedSize === 'Medium Pizza'){
        sizeTotal=10
    } else if(selectedSize === 'Large Pizza'){
        sizeTotal=12
    } else if(selectedSize === 'XL Pizza'){
        sizeTotal=14
    }
    runningTotal = sizeTotal
    console.log(selectedSize + ' = $'+sizeTotal)
    
    getTopping(runningTotal, text1)
}

function getTopping(runningTotal, text1){
    var toppingTotal = 0;
    var selectedTopping = []
    var toppingArray = document.getElementsByClassName('toppings')
    for(let i=0; i<toppingArray.length; i++){
        if(toppingArray[i].checked){
            selectedTopping.push(toppingArray[i].value)
            text1=text1+toppingArray[i].value+"<br>"
        }
    }
    var toppingCount = selectedTopping.length
    if(toppingCount>1){
        toppingTotal = toppingCount-1
    }else{
        toppingTotal=0
    }
    runningTotal=runningTotal+toppingTotal
    document.getElementById("showText").innerHTML=text1
    document.getElementById("totalPrice").innerHTML="<h3>Total: <strong>$" + runningTotal+".00</strong></h3>"
}