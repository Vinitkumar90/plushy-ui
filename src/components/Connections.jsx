import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addConnections } from '../utils/connectionSlice'

const Connections = () => {
    const dispatch = useDispatch();
    const connections = useSelector((store) => store.connection)

    const fetchConnections = async () => {
        try{
            const res = await axios.get(BASE_URL+"/user/total/connections",{withCredentials:true})
            console.log(res.data.connections)
            dispatch(addConnections(res.data.connections))
        }catch(error){
            console.error(error.message)
        }
    }

    useEffect(()=>{
        fetchConnections()
    },[]);

    if(!connections)return; //like loading until connections have arrived

    if(connections.length === 0) return <h1>No Connections Found</h1>

  return (
    <div className='flex flex-col items-center' >
        <h1 className='text-2xl text-center my-2'>Connections</h1>
    <div className='rounded m-2 '>
        {
            connections.map((connection,i) => (
                <div key={i} className='m-4 flex  py-3 px-6 rounded bg-base-300 '>
                    <img src={connection.photoUrl} className='w-18 rounded-full' alt="photo" />
                    <div className=' py-2 px-4 flex flex-col gap-y-0.5 w-full'>
                    <p className="font-bold">{connection.firstName} {connection.lastName}</p> 
                    <p>{connection.about}</p>
                   {connection.age && connection.gender && <p>{connection.age +", "+ connection.gender}</p>}
                    </div>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Connections