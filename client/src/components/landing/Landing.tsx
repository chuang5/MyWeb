import React, {useState} from "react";
import { Redirect } from "react-router-dom";
import { initialTodos } from "../../mockups/initialTodos";
import { TodoList } from "../todoList/TodoList";

interface Props{
    authentication : Authentication,
    currentUser : User
}

export const Landing : React.FC<Props> = ({authentication, currentUser}) => {
    if(!authentication.isAuthenticated){
        return <Redirect to='/' />
    }
    return (
        <div>
            <h1>Welcome back! {currentUser.username}</h1>
            <h2>Belowe is your Todo List</h2>
            <TodoList todos={initialTodos} />
        </div>
    )
}