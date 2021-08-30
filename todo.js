const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

let newTodo =""

function deleteTodo(event){
 const li = event.target.parentElement;
 li.remove()
}

function paintTodo(){
    const li = document.createElement("li");
    const span = document.createElement("span");
    todoList.appendChild(li);
    li.innerText = newTodo;
    li.appendChild(span);
    span.innerText = "❌";
    span.addEventListener("click",deleteTodo)
 
}

function handleNewTodo(event){
   event.preventDefault();
   newTodo = todoInput.value;
   todoInput.value="";
   paintTodo();
}

todoForm.addEventListener("submit",handleNewTodo)