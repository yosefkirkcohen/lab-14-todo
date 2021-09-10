import { getToDos, setToDos, getUser } from '../local-storage-utils.js';

export function renderList(username) {
//Render todo list here
    const listContainer = document.getElementById('todo-list');
    listContainer.textContent = '';

//use an 'if completed is true' statement
//button updates local storage only
    const todosArray = getToDos(username);
    for (let todoObj of todosArray) {

        const itemContainer = document.createElement('div');

        const messageP = document.createElement('span');
        const todoMessage = todoObj.todo;
        messageP.textContent = todoMessage;
    
        if (todoObj.completed === true) {
            messageP.style.textDecoration = 'line-through';
        }

        itemContainer.append(messageP);
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Completed';

        completeButton.addEventListener('click', () => {
            todoObj.completed = true;

            setToDos(todosArray);

            renderList(username);
        });

        itemContainer.append(completeButton);
        listContainer.append(itemContainer);
    }
}