const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

let todos =[];
const TODO_KEY = "todos"

function deleteTodo(event){
const li = event.target.parentElement;
li.remove();
todos = todos.filter((toDo) => toDo.id !== parseInt(li.id));
saveTodo();

}

function saveTodo(){
    localStorage.setItem(TODO_KEY,JSON.stringify(todos));
}

function paintTodo(todo){
    const li = document.createElement("li");
    li.id = todo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = todo.item;
    button.innerText = "❌";
    todoList.appendChild(li);
    button.addEventListener("click",deleteTodo)
}


function handleNewTodo(event){
   event.preventDefault();
   const newTodo = todoInput.value;
   const todosObj = 
       {
           item:newTodo,
           id:Date.now()
        }
    
    todos.push(todosObj);
    todoInput.value="";
   paintTodo(todosObj);
   saveTodo();
}

const savedTodos = localStorage.getItem(TODO_KEY);

if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}

todoForm.addEventListener("submit",handleNewTodo);