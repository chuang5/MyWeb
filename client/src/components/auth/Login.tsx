import axios from "axios";
import React, { useState } from "react";
import { BASE_SERVER_URL } from "../../config";

export const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [res, setRes] = useState('');
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch(e.target.name){
            case 'username':
                setUsername(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);
        }
        // console.log(e.target.name + " is changed: " + e.target.value);
    }
    const login = (e : React.MouseEvent) => {
        e.preventDefault();
        const user : User = {
            username : username,
            password : password
        }
        axios.post(BASE_SERVER_URL + '/login', user)
            .then(response => {
                console.log(response);
                console.log(response.data);
                setRes(response.data)
            })
    }
    return (
        <div>
            <h1>Welcome to Login form</h1>
            <form>
                <label>Username: 
                    <input 
                        type='text'
                        name='username'
                        value={username}
                        onChange={handleOnChange} 
                    />
                </label>
                <label>Password: 
                <input 
                        type='text'
                        name='password'
                        value={password}
                        onChange={handleOnChange} 
                    />
                </label>
                <button 
                    type='submit'
                    onClick={login}
                >
                    Login
                </button>
            </form>
        </div>
    )
}