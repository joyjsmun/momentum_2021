const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

let todos =[];

function deleteTodo(event){
 const li = event.target.parentElement;
 li.remove()
}

function saveTodo(){
    localStorage.setItem("todos",JSON.stringify(todos));
}

function paintTodo(todo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    todoList.appendChild(li);
    li.innerText = todo;
    li.appendChild(span);
    span.innerText = "❌";
    span.addEventListener("click",deleteTodo)
}

function handleNewTodo(event){
   event.preventDefault();
   let newTodo = todoInput.value;
   todos.push(newTodo)
   todoInput.value="";
   paintTodo(newTodo);
   saveTodo();
}

const savedTodos = localStorage.getItem("todos");

if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}

todoForm.addEventListener("submit",handleNewTodo);