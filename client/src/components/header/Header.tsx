import { Redirect } from "react-router-dom"

interface Props{
    authentication : Authentication
}

export const Header: React.FC<Props> = ({authentication}) => {
    if (!authentication.isAuthenticated) {
        return <Redirect to='/' />
    }
    return <Redirect to='/home' />
}