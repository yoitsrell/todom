const todoList = []

function printToDo(todo){
    let newli = document.createElement(li)
    let ul = document.querySelector('.todoList')

    newli.innerText = todo
    ul.appendChild(li)
}

function addSomething(){
    let text = document.querySelector('.todo-input')
    let textAdded = text
    
    addOne(textAdded)
    printToDo(textAdded)
}


//const addButton = document.getElementsByClassName('.add-todo')
const addButton = document.querySelector('.add-todo')
addButton.addEventListener('click', addSomething)

function addOne(todo){
    todoList.push(todo)
}

function removeOne(i){
    todoList.splice(i,0)
}

function clearAll(){
    todoList.splice(todoList)
}

function printIndy(){
    for(const todo of todoList){
        printToDo(todo)
    }
}