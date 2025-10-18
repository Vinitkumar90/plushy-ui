import React, { useState } from "react";
import UserCard from "./UserCard";
import { BASE_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import axios from "axios";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [gender, setGender] = useState(user.gender);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);

  const saveProfile = async () => {
    try {
      setError("");
      const res = await axios.put(
        BASE_URL + "/profile/update",
        {
          photoUrl,
          age,
          gender,
          about,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      const i = setTimeout(() => {
        setShowToast(false);
      }, 2000);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const handleChange = (e) => {
    setGender(e.target.value);
  };

  return (
    <div className="flex justify-center my-10 ">
      <div className="card bg-base-300 mx-10 w-96 shadow-xl">
        <div className="card-body">
          <h1 className="card-title justify-center text-3xl">Edit Profile</h1>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-lg">First Name</legend>
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
              <legend className="fieldset-legend text-lg ">Last Name</legend>
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
              <legend className="fieldset-legend text-lg ">Photo Url</legend>
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
              <legend className="fieldset-legend text-lg ">Age</legend>
              <input
                type="number"
                className="input"
                placeholder="Enter your age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </fieldset>
          </div>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-lg ">Gender</legend>
              <select
                value={gender}
                onChange={handleChange}
                className="border border-gray-700 px-3 py-2 rounded"
              >
                <option value="male" className="bg-slate-800 text-white">
                  Male
                </option>
                <option value="female" className="bg-slate-800 text-white">
                  Female
                </option>
                <option value="others" className="bg-slate-800 text-white">
                  Others
                </option>
              </select>
            </fieldset>
          </div>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-lg ">About</legend>
              <textarea
                className="textarea"
                placeholder="About"
                onChange={(e) => setAbout(e.target.value)}
                value={about}
              />
            </fieldset>
          </div>
          <p className="text-sm text-red-500 font-semibold">{error}</p>
          <button onClick={saveProfile} className="btn btn-primary mt-2">
            Update Profile
          </button>
        </div>
      </div>
      {/* sending state variable here for control */}
      <UserCard user={{ firstName, lastName, photoUrl, age, about, gender }} />
      {/* toast here daisy */}
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-info">
            <span>Profile Updated Successfully</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
