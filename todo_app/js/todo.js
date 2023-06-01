function getDate(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    document.querySelector('#date').innerHTML = today
}
getDate()

function get_todos(){
    var todos = new Array;
    var todos_str = localStorage.getItem('todo')
    if(todos_str!== null){
        todos=JSON.parse(todos_str)
        console.log(todos)
    }
    return todos
}

function add(){
    var task= document.getElementById('task').value

    var todos = get_todos()
    todos.push(task)
    console.log(JSON.stringify(todos))
    localStorage.setItem('todo', JSON.stringify(todos))
    document.getElementById("task").value = ""
    show()
    return false
}

function remove(e){
    let {target} = e
    let todos = get_todos()

    let id=target.id
    let val=target.val

    document.getElementById(`${id}`).remove()
    let index = todos.indexOf(val)
    console.log(todos)
    todos.splice(index,1)
    console.log(todos)

    localStorage.setItem('todo', JSON.stringify(todos))
    document.getElementById("task").value = ""
    show()
    return
}

function eventListeners(){
    let list = document.getElementsByClassName('remove')
    for(let i =0; i<list.length; i++){
        list[i].addEventListener('click', remove)
    }
}

function show(){
    var todos = get_todos()
    var html = '<ul>'
    for(var i = 0; i<todos.length; i++){
        html += '<li>' + todos[i] + '<button class="remove" id="'+i+'">X</button></li>'
    }
    html += '</ul>'
    document.getElementById('todos').innerHTML = html
    eventListeners()
    
}


document.getElementById('add').addEventListener('click', add);
document.getElementsByClassName
show()