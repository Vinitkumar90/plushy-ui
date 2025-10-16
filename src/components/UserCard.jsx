import React from 'react'

const UserCard = ({user}) => {
    const{firstName, lastName, photoUrl, age, gender, about} = user;
  return (
    <div className="card bg-base-300 w-96  shadow-md ">
  <figure>
    <img src={photoUrl} className='rounded' alt='photo' />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl">{firstName+ " " + lastName}</h2>
    <p>{about}</p>
    {/* if agen and gender is present then only show */}
    {age && gender && <p>{age + ", " + gender}</p>}
    <div className="card-actions justify-center gap-3 my-2">
      <button className='btn btn-primary'>Ignore</button>
      <button className='btn btn-secondary'>Interested</button>
    </div>
  </div>
</div>
  )
}

export default UserCard