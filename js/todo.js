const toDoFrom = document.querySelector("#todo-form");
const toDoInput = toDoFrom.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
   localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}



function deleteToDo (event){
const li = event.target.parentElement;
li.remove();
toDos=toDos.filter(toDO =>  toDO.id !== parseInt( li.id));
saveToDos();
}


function paintToDo(newTodo){
const li = document.createElement("li");
li.id = newTodo.id;
const span = document.createElement("span");
span.innerHTML = newTodo.text;
const button = document.createElement("button");
button.innerText = "❌";
li.appendChild(span);
li.appendChild(button);
button.addEventListener("click",deleteToDo)
toDoList.appendChild(li);
}

function handleToDo (event) {
event.preventDefault();
const newTodo = toDoInput.value;
toDoInput.value="";
const newTodoObiect ={
    text:newTodo,
    id: Date.now(),
}
toDos.push(newTodoObiect);
paintToDo(newTodoObiect);
saveToDos();
}

toDoFrom.addEventListener("submit",handleToDo);


function sayhello (item){
    console.log("this is the turn of", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);
 
if(savedToDos !== null ){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}



function sexyFilter(){

}
