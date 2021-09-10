import { getUser } from '../local-storage-utils.js';

const userForm = document.querySelector('form');

userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(userForm);
    const userName = formData.get('username');
    const passWord = formData.get('password');

    const user = getUser(userName);

    if (user.password === passWord) {
        window.location = '../to-do/';
    } else {
        alert('Incorrect username or password');
    }
    
});