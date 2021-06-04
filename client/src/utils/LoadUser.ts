import axios from "axios";
import React, {useState} from "react";
import { BASE_SERVER_URL } from "./config";

const loadCurrentUser = () => {
    console.log("try to fetch data")
    return axios.get(BASE_SERVER_URL + '/user/me', {
        headers: {
            token: localStorage.getItem('token')
        }
    })
}

export const LoadUser = () => {
    const [currentUser, setCurrentUser] = useState('');

    React.useEffect(() => {
        loadCurrentUser().then(res => {
            console.log("User found", res);
            setCurrentUser(res.data.username);
        }).catch((err) => {
            console.log("user not found", err);
        })
    }, []);

    return currentUser;
}