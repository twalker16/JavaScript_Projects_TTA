let activePlayer = 'X'
let selectedSquares = []
const body = document.body

function place(squareNum){
    if(!selectedSquares.some(element=>element.includes(squareNum))){
        let select = document.getElementById(squareNum)
        if(activePlayer==='X'){
            select.style.backgroundImage ='url("./img/x.png")'
        }else{
            select.style.backgroundImage ='url("./img/o.png")'
        }
        selectedSquares.push(squareNum +  activePlayer)
        checkWinConditions()

        if(activePlayer === "X"){
            activePlayer="O"
        }else{
            activePlayer="X"
        }
        audio('./media/place.mp3')
        if(activePlayer === 'O'){
            disableClick()
            setTimeout(function(){computerTurn()}, '1000')
        }
        return true
    }
    function computerTurn(){
        let success = false
        let pickASquare;
        while(!success){
            pickASquare = String(Math.floor(Math.random()*9))

            if(place(pickASquare)){
                place(pickASquare)
                success=true
            }
        }
    }
}

function checkWinConditions(){
    if(arrayIncludes('0X', '1X', '2X')){drawWinLine(50,100,558,100)}
    else if(arrayIncludes('3X', '4X', '5X')){drawWinLine(50,304,558,304)}
    else if(arrayIncludes('6X', '7X', '8X')){drawWinLine(50,508,558,508)}
    else if(arrayIncludes('0X', '3X', '6X')){drawWinLine(100,50,100,558)}
    else if(arrayIncludes('1X', '4X', '7X')){drawWinLine(304,50,304,558)}
    else if(arrayIncludes('2X', '5X', '8X')){drawWinLine(508,50,508,558)}
    else if(arrayIncludes('2X', '4X', '6X')){drawWinLine(100,508,510,90)}
    else if(arrayIncludes('0X', '4X', '8X')){drawWinLine(100,100,520,520)}

    else if(arrayIncludes('0O', '1O', '2O')){drawWinLine(50,100,558,100)}
    else if(arrayIncludes('3O', '4O', '5O')){drawWinLine(50,304,558,304)}
    else if(arrayIncludes('6O', '7O', '8O')){drawWinLine(50,508,558,508)}
    else if(arrayIncludes('0O', '3O', '6O')){drawWinLine(100,50,100,558)}
    else if(arrayIncludes('1O', '4O', '7O')){drawWinLine(304,50,304,558)}
    else if(arrayIncludes('2O', '5O', '8O')){drawWinLine(508,50,508,558)}
    else if(arrayIncludes('2O', '4O', '6O')){drawWinLine(100,508,510,90)}
    else if(arrayIncludes('0O', '4O', '8O')){drawWinLine(100,100,520,520)}

    else if(selectedSquares.length>=9){
        audio('./media/tie.mp3')
        setTimeout(function (){resetGame()}, '500')
    }

    function arrayIncludes(a,b,c){
        const aBool = selectedSquares.includes(a)
        const bBool = selectedSquares.includes(b)
        const cBool = selectedSquares.includes(c)

        if(aBool === true && bBool === true && cBool === true ){
            return true
        }
    }
}

function disableClick(){
    body.style.pointerEvents = 'none'
    setTimeout(function () { body.style.pointerEvents='auto'}, 1000)
}

function audio(url){
    let audio = new Audio(url)
    audio.play()
}

function drawWinLine(x1,y1,x2,y2){
    const canvas = document.getElementById('win-lines')
    const c = canvas.getContext('2d')
    let x=x1,
    y=y1;

    function animateLine(){
        const animationLoop = requestAnimationFrame(animateLine)
        c.clearRect(0,0,608,608)
        c.beginPath()
        c.moveTo(x1, y1)
        c.lineTo(x,y)
        c.lineWidth = 10
        c.strokeStyle = 'rgba(70,255,33,.8)'
        c.stroke()
        if(x1<=x2 && y1<=y2){
            if(x<x2){
                x+=10
            }
            if(y<y2){
                y+=10
            }
            if(x>=x2 && y>=y2){cancelAnimationFrame(animationLoop)}
        }

        if(x1<=x2 && y1>=y2){
            if(x<x2){
                x+=10
            }
            if(y>y2){
                y-=10
            }
            if(x>=x2 && y<=y2){cancelAnimationFrame(animationLoop)}
        }
    }
    function clear(){
        const animationLoop = requestAnimationFrame(clear)
        c.clearRect(0,0,608,608)
        cancelAnimationFrame(animationLoop)
    }
    disableClick()
    audio('./media/winGame.mp3')
    animateLine()
    setTimeout(function(){clear(); resetGame();}, 1000)
}

function resetGame(){
    for(let i=0; i<9; i++){
        let square = document.getElementById(`${i}`)
        square.style.backgroundImage=''
    }
    selectedSquares=[]
}