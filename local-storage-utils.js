export const USER = 'USER';

export function setUser(someUser) {
    const stringyUser = JSON.stringify(someUser);
    localStorage.setItem(USER, stringyUser);
}

export function getUser() {
    const stringyUser = localStorage.getItem(USER);
    const user = JSON.parse(stringyUser);
    return user;
}

export function getToDos() {
    const user = getUser();
    return user.todos;
}

export function setToDos(todoArray) {
    const user = getUser();
    user.todos = todoArray;
    setUser(user);
}

export function addToDo(message) {

    const todosArray = getToDos();

    todosArray.push(
        {
            id: (todosArray.length),
            todo: message, 
            completed: false,
        }
    );
    setToDos(todosArray);
}