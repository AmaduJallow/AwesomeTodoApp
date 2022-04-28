const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);


function addTodo(e) {
    console.log('Todo');
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText = `${todoInput.value}`;
    todoDiv.appendChild(newTodo);

    // Check Mark
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton);



    todoList.appendChild(todoDiv);


    todoInput.value = "";
    e.preventDefault();
}

function deleteCheck(event) {

    if (event.target.parentElement.classList.contains('trash-btn')) {
        event.target.parentElement.parentElement.classList.add('fall');

        event.target.parentElement.parentElement.addEventListener('transitionend', () => {
            event.target.parentElement.parentElement.remove();
        });

    }
    else if (event.target.classList.contains('trash-btn')) {
        event.target.parentElement.classList.add('fall');

        event.target.parentElement.addEventListener('transitionend', () => {
            event.target.parentElement.remove();
        });

    }

    if (event.target.parentElement.classList.contains('complete-btn')) {
        const todo = event.target.parentElement.parentElement;
        todo.classList.toggle('completed');

    }
    else if (event.target.classList.contains('complete-btn')) {
        const todo = event.target.parentElement;
        todo.classList.toggle('completed');
    }

    event.preventDefault();
}

