
import { getToDos } from '../local-storage-utils.js';
import { setToDos } from '../local-storage-utils.js';
import { addToDo } from '../local-storage-utils.js';
import { renderList } from './to-do-utils.js';

renderList();

const todoForm = document.querySelector('form');

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(todoForm);
    
    
    const toDoMessage = formData.get('to-do');
    

    addToDo(toDoMessage);
    renderList();
});

