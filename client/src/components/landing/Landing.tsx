import React, {useState} from "react";
import { initialTodos } from "../../mockups/initialTodos";
import { TodoList } from "../todoList/TodoList";

export const Landing : React.FC = () => {
    return (
        <div>
            <h1>Welcome back!</h1>
            <h2>Belowe is your Todo List</h2>
            <TodoList todos={initialTodos} />
        </div>
    )
}