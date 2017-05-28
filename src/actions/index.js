export const ADD_TODO = 'add_todo';

let nextTodoId = 0;

export function addTodo(text) {
    console.log("Action text:", text)
    return {
      type: ADD_TODO,
      id: nextTodoId++,
      text
    }
}
