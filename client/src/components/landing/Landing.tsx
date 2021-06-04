import axios from "axios";
import React, {useState} from "react";
import { Redirect } from "react-router-dom";
import { BASE_SERVER_URL } from "../../config";
import { initialTodos } from "../../mockups/initialTodos";
import { TodoList } from "../todoList/TodoList";

interface Props{
    authentication : Authentication
}

export const Landing : React.FC<Props> = ({authentication}) => {
    if(!authentication.isAuthenticated){
        return <Redirect to='/' />
    }
    // const loadCurrentUser = () => {
    //     console.log("try to fetch data")
    //     var name : string
    //     axios.get(BASE_SERVER_URL + '/user/me', {
    //         headers: {
    //             token: localStorage.getItem('token')
    //         }
    //     }).then(res => {
    //         console.log("User found", res);
    //         name = res.data.username;
    //         authentication = {
    //             isAuthenticated : true,
    //             username : res.data.username
    //         }
    //         authentication.username = res.data.username
    //     }).catch((err) => {
    //         console.log("user not found", err);
    //     })
    //     console.log(authentication.username)
    // }
    // const cu = loadCurrentUser();
    return (
        <div>
            {/* {cu} */}
            <h1>Welcome back! {authentication.username}</h1>
            <h2>Belowe is your Todo List</h2>
            <TodoList todos={initialTodos} />
        </div>
    )
}