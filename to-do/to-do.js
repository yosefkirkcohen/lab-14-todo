
import { getToDos } from '../local-storage-utils.js';
import { setToDos } from '../local-storage-utils.js';
import { addToDo } from '../local-storage-utils.js';
import { renderList } from './to-do-utils.js';

let todoId = 1;

const todoForm = document.querySelector('form');

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(todoForm);
    
    
    const toDoMessage = formData.get('to-do');
    const todosArray = getToDos();

    addToDo(todosArray, toDoMessage, todoId);

    setToDos(todosArray);

    todoId++;
});

renderList();