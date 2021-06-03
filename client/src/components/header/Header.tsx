import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { IoIosLogIn } from "react-icons/io";

import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
    authentication: Authentication
}

const logout = (e: React.MouseEvent) => {
    localStorage.removeItem('token');
    window.location.href = '/'
}

export const Header: React.FC<Props> = ({ authentication }) => {
    return (
        <Navbar bg='dark' expand='md' variant='dark' sticky='top'>
            <Navbar.Brand href='/' style={{marginLeft: '1%'}}> MyWeb</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                {
                    authentication.isAuthenticated ? (
                        <Nav.Link onClick={logout}><IoIosLogIn className="icon" />Logout</Nav.Link>
                    ) : (
                        <Nav>
                            <Nav.Link href='/'><IoIosLogIn className="icon" />Login</Nav.Link>
                            <Nav.Link href='signup'><IoIosLogIn className="icon" />Signup</Nav.Link>
                        </Nav>
                    )
                }

            </Navbar.Collapse>
        </Navbar>
    )
}