import axios from "axios";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { BASE_SERVER_URL } from "../../utils/config";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";

interface Props {
    authentication: Authentication
}

export const Login: React.FC<Props> = ({ authentication }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            case 'username':
                setUsername(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);
        }
    }
    const login = (e: React.MouseEvent) => {
        e.preventDefault();
        const user: User = {
            username: username,
            password: password
        }
        axios.post(BASE_SERVER_URL + '/login', user)
            .then(response => {
                console.log(response);
                localStorage.setItem('token', response.data.token)
                authentication = {
                    ...authentication,
                    isAuthenticated: true
                }
                window.location.href = '/home'
            })
            .catch((err) => {
                console.log("user not found", err);
            })
    }
    if (authentication.isAuthenticated) {
        return <Redirect to='/home' />
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
                <Button variant='primary'
                    type='submit'
                    onClick={login}
                >
                    Login
                </Button>
            </form>
        </div>
    )
}