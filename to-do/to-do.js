import { getUser } from '../local-storage-utils.js';
import { getToDos } from '../local-storage-utils.js';
import { setToDos } from '../local-storage-utils.js';

let userId = 1;

const todoForm = document.querySelector('form');

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(todoForm);
    
    
    const toDoMessage = formData.get('to-do');
    const todosArray = getToDos();

    console.log(todosArray);

    todosArray.push(
        {
            id: userId
        }
    );
    console.log(todosArray);
        
    setToDos(todosArray);

    userId++;
});