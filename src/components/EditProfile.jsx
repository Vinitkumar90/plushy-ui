import React, { useState } from 'react'
import UserCard from './UserCard';

const EditProfile = ({user}) => {
    const[firstName, setFirstName] = useState(user.firstName);
    const[lastName, setLastName] = useState(user.lastName);
    const[photoUrl, setPhotoUrl] = useState(user.photoUrl);
    const[age, setAge] = useState(user.age);
    const[about, setAbout] = useState(user.about);
    const[gender, setGender] = useState(user.gender)


  return (
    <div className="flex justify-center my-10 ">
    <div className="card bg-base-300 mx-10 w-96 shadow-xl">
      <div className="card-body">
        <h1 className="card-title justify-center text-3xl">Edit Profile</h1>
        <div>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg">
                First Name
            </legend>
            <input
              type="text"
              className="input"
              placeholder="Enter your first name "
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </fieldset>
        </div>
        <div>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg ">
              Last Name
            </legend>
            <input
              type="text"
              className="input"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </fieldset>
        </div>
        <div>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg ">
              Photo Url
            </legend>
            <input
              type="text"
              className="input"
              placeholder="Enter your photo Url"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
            />
          </fieldset>
        </div>
        <div>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg ">
              Age
            </legend>
            <input
              type="text"
              className="input"
              placeholder="Enter your age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </fieldset>
        </div>
        <div>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg ">
              Gender
            </legend>
            <input
              type="text"
              className="input"
              placeholder="Enter your gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </fieldset>
        </div>
        <div>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg ">
              About
            </legend>
            <input
              type="text"
              className="input"
              placeholder="Enter your about"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
          </fieldset>
        </div>
        <button className="btn btn-primary mt-2">Update Profile</button>
      </div>
    </div>
    {/* sending state variable here for control */}
    <UserCard user={{firstName,lastName,photoUrl,age,about,gender}} />
  </div>
  )
}

export default EditProfile