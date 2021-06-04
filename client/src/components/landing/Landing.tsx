import axios from "axios";
import React, {useState} from "react";
import { Redirect } from "react-router-dom";
import { BASE_SERVER_URL } from "../../utils/config";
import { initialTodos } from "../../mockups/initialTodos";
import { TodoList } from "../todoList/TodoList";

interface Props{
    authentication : Authentication
}

export const Landing : React.FC<Props> = ({authentication}) => {
    if(!authentication.isAuthenticated){
        return <Redirect to='/' />
    }
    return (
        <div>
            {/* {cu} */}
            <h1>Welcome back! {authentication.username}</h1>
            <h2>Belowe is your Todo List</h2>
            <TodoList todos={initialTodos} />
        </div>
    )
}