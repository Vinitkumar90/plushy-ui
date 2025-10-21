import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constant";
import { useNavigate } from "react-router";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // never call a hook inside a function
  const user = useSelector((store) => store.user);

  const [emailId, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [signup, setSignup] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    if (user) {
      navigate("/feed");
    }
  }, []);

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        {
          withCredentials: true,
        } //allow to set cookies for cross domain
      );
      dispatch(addUser(res.data.user));
      navigate("/feed");
    } catch (err) {
      setErr(err.response.data.error || "Something went wrong");
      console.log(err.message);
    }
  };

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.newUser));
      navigate("/profile");
    } catch (err) {
      setErr(err.response.data.error || "Something went wrong");
      console.log(err.message);
    }
  };

  return (
    <div className="bg-base-100 min-h-screen flex flex-col items-center justify-center pb-40">
      <div className="card bg-base-200 w-96 shadow-sm">
        <div className="card-body p-6">
          <h2 className="text-3xl text-center mb-4 font-thin">
            {signup ? "Signup" : "Login"}
          </h2>
          {signup && (
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-lg font-thin">
                  First Name
                </legend>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Enter you first name here"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </fieldset>
            </div>
          )}
          {signup && (
            <div>
              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend text-lg font-thin">
                  Last name
                </legend>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Enter you last name here"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </fieldset>
            </div>
          )}
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-lg font-thin">
                Email Id
              </legend>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter you email here"
                value={emailId}
                onChange={(e) => setEmail(e.target.value)}
              />
            </fieldset>
          </div>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-lg font-thin">
                Password
              </legend>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter your password here"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
          </div>
          <div>
            <p className="text-red-500 font-semibold text-start">{err}</p>
            <button className="btn  btn-primary w-full" onClick={signup ? handleSignUp : handleLogin}>
              Submit
            </button>
            <p
              className=" cursor-pointer mt-3 hover:underline"
              onClick={() => setSignup(!signup)}
            >
              {signup
                ? "Already signup ? Login here"
                : "New account ? Signup here"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

// test login here  vinitkumar@modi.com   Vinitkumar@123
  