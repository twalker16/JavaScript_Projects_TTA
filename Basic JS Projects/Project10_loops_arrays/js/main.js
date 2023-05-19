function call_loop(){
    num = 1
    string ="12345678910"
    while(num<string.length){
        document.getElementById('loop').innerHTML=num
        num+=1
    }
}

function for_loop(){
    let instruments = ['Guitar', 'Bass', 'Drums', 'Vocals']

    for(let i=0; i<instruments.length; i++){
        document.getElementById('list').innerHTML=  document.getElementById('list').innerHTML + ' ' + instruments[i]
    }
}

let array = [];
function array_func(){
    array[0] = 0
    array[1] = 1
    array[2] = 2
    document.getElementById('array').innerHTML=array
}

function const_func(){
    const newConst = {type: 'string', secondProp:3}

    newConst.type='object'
    newConst.pi=3.14

    document.getElementById('const').innerHTML=newConst.type
    document.getElementById('const').innerHTML=newConst.pi
}

function obj_func(){
    let obj = {type:'Object', val:6, somethingElse:3.14, func: function(){
        return 'Test'
    }}

    document.getElementById('obj').innerHTML=obj.func()

}

function break_func(){
    for (let i = 0; i < 10; i++) {
        if (i === 3) { break; }
        document.write( "The number is " + i + "<br>")
      }
}

function cont_func(){
    for (let i = 0; i < 10; i++) {
        if (i === 3) { continue; }
        document.write( "<p>The number is " + i + "</p><br>")
      }
}