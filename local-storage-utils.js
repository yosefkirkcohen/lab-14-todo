export const USER = 'USER';

export function setUser(someUser) {
    const stringyUser = JSON.stringify(someUser);
    localStorage.setItem(USER, stringyUser);
}

//changing so it will get user from userArray and take username
export function getUser(username) {
    const userArray = getUserArray();
    const user = findByUsername(userArray, username);
    return user;
}

//
export function getToDos(username) {
    const user = getUser(username);
    return user.todos;
}
//THIS IS THE CURRENT PROBLEM SPOT!!
export function setToDos(todoArray, username) {
    const userArray = getUserArray();
    
    const user = findByUsername(userArray, username);
    user.todos = todoArray;
    
    setUserArray(userArray);
}

export function addToDo(message, username) {

    const todosArray = getToDos(username);

    todosArray.push(
        {
            id: (todosArray.length),
            todo: message, 
            completed: false,
        }
    );
    setToDos(todosArray, username);
}

export function getUserArray() {
    const stringyUserArray = localStorage.getItem('USERS');

    const userArray = JSON.parse(stringyUserArray);

    if (!userArray) {
        const userArray = [];
        return userArray;
    }
    return userArray;
}

export function setUserArray(userArray) {
    const stringyUserArray = JSON.stringify(userArray);
    localStorage.setItem('USERS', stringyUserArray);
}

export function findByUsername(array, username) {
    return array.find(item => item.username === username);
}