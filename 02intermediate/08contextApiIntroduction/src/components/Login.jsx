import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {

    const [usernamer, setUsername] = useState('')
    const [password, setPassword] = useState('')

    //now need to push data in context so,
    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ usernamer, password })

    }
    return (
        <div>
            <h2>Login</h2>
            <input
                value={usernamer}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder='usernamer' />
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                placeholder='password' />
            <button
                onClick={handleSubmit}
            >
                Login
            </button>
        </div>
    )
}

export default Login
