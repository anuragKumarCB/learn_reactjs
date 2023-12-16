import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {

    const data = useLoaderData()

    return (
        <div className='h-96 max-w-fit mx-auto my-0 bg-gray-100 bg-opacity-50 flex gap-20 justify-center p-10'>
            <img src={data.avatar_url} alt="" />
            <div className='mt-20 text-2xl'>
                <h3 className=''>Github Name : <span className='text-amber-600'>{data.name}</span></h3>
                <h3 className='mt-2'>Github Follower : <span className='text-amber-600'>{data.followers}</span></h3>
                <h3 className='mt-2'>Location : <span className='text-amber-600'>{data.location}</span></h3>
                <h3 className='mt-2'>Public Repo : <span className='text-amber-600'>{data.public_repos}</span></h3>
            </div>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const reponse = await fetch(`https://api.github.com/users/anuragKumarCB`)
    return reponse.json()
}
