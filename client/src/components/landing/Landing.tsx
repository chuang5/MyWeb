import axios from "axios";
import React, {useState} from "react";
import { Redirect } from "react-router-dom";
import { BASE_SERVER_URL } from "../../config";
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
    const loadCurrentUser = () => {
        axios.request({
            method: 'GET',
            url: BASE_SERVER_URL + '/user/me',
            data: {
                token: localStorage.getItem('token')
            }
        }).then(res => {
            console.log("User found", res);
            currentUser.username = res.data.username;
            currentUser.password = res.data.password;
        }).catch((err) => {
            console.log("user not found", err);
        })
    }
    return (
        <div>
            {loadCurrentUser}
            <h1>Welcome back! {currentUser.username}</h1>
            <h2>Belowe is your Todo List</h2>
            <TodoList todos={initialTodos} />
        </div>
    )
}