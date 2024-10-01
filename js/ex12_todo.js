const toDoForm = document.getElementById("todo-form");
const toDoList  = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input")

const TODOS_KEY = "todos";

let toDos =  [];
function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}
function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo !== parseInt(li.id));
    saveToDos();
}
function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const button = document.createElement("button");
    button.innerText = "❌";
    const span = document.createElement("span");
    span.innerText  = newToDo.text;
    button.addEventListener("click",deleteToDo);
    li.appendChild(button);
    li.appendChild(span);
    toDoList.appendChild(li);
}
function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text:newToDo,
        id:Date.now(),
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

// function sayHello(item){
//     console.log("this is turn of",item);
// }
 
const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    // parsedToDos.forEach(sayHello);
    parsedToDos.forEach(paintToDo);
}