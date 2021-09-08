
import { getToDos } from '../local-storage-utils.js';
import { setToDos } from '../local-storage-utils.js';
import { addToDo } from '../local-storage-utils.js';

let todoId = 1;

const todoForm = document.querySelector('form');

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(todoForm);
    
    
    const toDoMessage = formData.get('to-do');
    const todosArray = getToDos();

    addToDo(todosArray, toDoMessage, todoId);

    setToDos(todosArray);

    //Render todo list here
    const listContainer = document.getElementById('todo-list');
    listContainer.textContent = '';
    

    for (let todoObj of todosArray) {
        const messageP = document.createElement('p');
        const todoMessage = todoObj.todo;
        messageP.textContent = todoMessage;
        listContainer.append(messageP);
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Completed';
        listContainer.append(completeButton);
    }


    todoId++;
});