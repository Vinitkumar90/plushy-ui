import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import axios from "axios";
import { BASE_URL } from "../utils/constant";

const Navbar = () => {
  const userState = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async() => {
   try{
    await axios.post(BASE_URL+ "/logout" , {}, {withCredentials:true});
    dispatch(removeUser());
    navigate("/");
   }catch(err){

   }
  };
  return (
    <>
      <div className="navbar bg-base-300 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-2xl">
            <span className=" text-neutral-200 font-light italic">Plushy </span>
            🍇
          </a>
        </div>
        {userState && (
          <div className="flex gap-2 items-center">
            <p className="font-thin italic text-neutral-200">
              Welcome, {userState.firstName}
            </p>
            <div className="dropdown dropdown-end mr-8 flex gap-2 items-center">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={userState.photoUrl}
                  />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 mt-36 w-48 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
