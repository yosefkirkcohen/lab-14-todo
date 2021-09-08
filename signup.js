import { setUser } from './local-storage-utils.js';
import { USER } from './local-storage-utils.js';

const userForm = document.querySelector('form');

userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(userForm);
    const user = {
        username: formData.get('username'),
        password: formData.get('password'),
        todos: []
    };

    setUser(user);
    window.location = './to-do';
});
