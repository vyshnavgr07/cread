import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import api from '../api/axiosInterceptor'


const Home = () => {
    const [user,setUser]=useState(null)
    const fetchdata=async()=>{
        try {
            const response=await api.get('/users')
            setUser(response.data.users)
        } catch (error) {
            console.log(error,"err")
        }
    }
    useEffect(()=>{
        fetchdata()
        const intervalId = setInterval(fetchdata, 300000); 
return () => {
          clearInterval(intervalId);
        };
    },[])
     
  return (
    <div className='w-full h-screen bg-gray-900'>
    <Navbar/>
    <div className='flex items-center justify-center w-full h-full bg-gray-900 text-white'>
  {user ? (
    <h1 className='text-4xl font-bold'>
      Welcome, {user?.username}!
    </h1>
  ) : (
    <h1 className='text-2xl font-semibold'>
      Please Sign in
    </h1>
  )}
</div>

    </div>
  )
}

export default Home