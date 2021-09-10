import { setUser } from './local-storage-utils.js';
import { getUserArray } from './local-storage-utils.js';
import { setUserArray } from './local-storage-utils.js';
import { getUser } from './local-storage-utils.js';

const userForm = document.querySelector('form');

userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(userForm);
    const user = {
        username: formData.get('username'),
        password: formData.get('password'),
        todos: []
    };
    //get current username for the query parameter
    const currentUsername = formData.get('username');

    // get the userArray, which will create one if it doesn't
    //already exist
    const userArray = getUserArray();

    userArray.push(user);

    setUserArray(userArray);

    window.location = `./to-do/?username=${currentUsername}`;
});

const testname = getUser('yosi');
console.log(testname);