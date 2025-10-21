import axios from 'axios';
import React from 'react'
import { BASE_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { removeUserFromFeed } from '../utils/feedSlice';


const UserCard = ({user,show=true}) => {
  const{_id,firstName, lastName, photoUrl, age, gender, about} = user;
  const dispatch = useDispatch();

  const handleSendRequest = async(status,toUserId) =>{
    try{
      const res = await axios.post(BASE_URL + "/request/send/" + status + "/" + toUserId,{},{withCredentials:true})
      dispatch(removeUserFromFeed(toUserId))
    }
    catch(error){

    }
  }


  return (
    <div className="card bg-base-300 w-96  shadow-md  h-fit pb-2">
  <figure>
    <img src={photoUrl} className='rounded w-full' alt='photo' />
  </figure>
  <div className="flex flex-col items-center gap-2 mt-2">
    <h2 className="card-title text-2xl">{firstName+ " " + lastName}</h2>
    <p>{about}</p>
    {/* if agen and gender is present then only show */}
    {age && gender && <p>{age + ", " + gender}</p>}
  {
    
      <div className="card-actions justify-center gap-3  my-4">
   { 
    show && (
    <>
    <button className='btn btn-primary' onClick={()=>handleSendRequest("ignored",_id)}>Ignore</button>
    <button className='btn btn-secondary' onClick={() => handleSendRequest("interested",_id)}>Interested</button>
    </>
    )
    }
  </div>
    
  }
  </div>
</div>
  )
}
export default UserCard
