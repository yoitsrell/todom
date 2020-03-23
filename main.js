const todoList = []

function printToDo(text){
    let ul = document.querySelector('.todo-list')
    let li = document.createElement('li')
    
    li.innerText = text;
    ul.appendChild(li)
}

function addOne(todo){
    todoList.push(todo)
}

function addSomething(){
    let text = document.querySelector('.todo-input');
    let textAdded = text.value;
    
    addOne(textAdded)
    printToDo(textAdded)
}

//const addButton = document.getElementsByClassName('.add-todo')
const addButton = document.querySelector('.add-todo')
addButton.addEventListener('click', addSomething)

function clearAll(){
    location.reload()
}

const clearButton = document.querySelector('.remove-all')
clearButton.addEventListener('click', clearAll)

function removeSomething(input){
    let text = document.querySelector('.index-input')
    let textRemoved = text.value
    
    removeOne(textRemoved, input)
    printToDo(textRemoved)
}

const removeButton = document.querySelector('.remove-todo')
removeButton.addEventListener('click', removeOne)

function removeOne(i){
    todoList.splice(i,0)
}


function printIndy(){
    for(const todo of todoList){
        printToDo(todo)
    }
}