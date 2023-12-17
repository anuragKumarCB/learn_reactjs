import React, { useContext } from 'react'
import UserContext from '../context/UserContext'



const Profile = () => {
    //now to use context data we need to extract it
    const { user } = useContext(UserContext)

    if (!user) return <div>Please Login</div>

    return <div>Welcome : {user.usernamer} Password : <span style={{ textDecoration: 'line-through' }}>{user.password}</span></div>
}

export default Profile
