import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const { userid } = useParams()
    return (
        <div className='text-center text-white bg-gray-800 p-6'>
            User : {userid}
        </div>
    )
}

export default User
