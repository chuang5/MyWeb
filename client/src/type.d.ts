interface Todo {
    text: string;
    complete: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (text: string) => void;

interface User {
    username: string;
    password: string;
}

interface Authentication {
    isAuthenticated: boolean
    username: string
}