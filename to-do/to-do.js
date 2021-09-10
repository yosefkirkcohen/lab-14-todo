
import { getToDos } from '../local-storage-utils.js';
import { setToDos } from '../local-storage-utils.js';
import { addToDo } from '../local-storage-utils.js';
import { renderList } from './to-do-utils.js';

//do search param thing here
const paramData = new URLSearchParams(window.location.search);
const currentUsername = paramData.get('username');


renderList(currentUsername);

const todoForm = document.querySelector('form');

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(todoForm);
    const toDoMessage = formData.get('to-do');
    
//THIS IS THE CURRENT PROBLEM!!!
    addToDo(toDoMessage, currentUsername);

    const todoInput = document.getElementById('to-do');
    todoInput.value = '';

    renderList(currentUsername);
});

setToDos([1, 2, 3, 4, 5], 'yosiman');
