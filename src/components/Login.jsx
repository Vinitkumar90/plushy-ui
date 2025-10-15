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

  const [emailId, setEmail] = useState("vinitkumar@modi.com");
  const [password, setPassword] = useState("Vinitkumar@123");
  const[err, setErr] = useState("");

  
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
      setErr(err.response.data.error || 
        "Something went wrong"
      )
      console.log(err.message);
    }
  };

  return (
    <div className="bg-base-100 min-h-screen flex flex-col items-center justify-center pb-40">
      <div className="card bg-base-200 w-96 shadow-sm">
        <div className="card-body p-6">
          <h2 className="text-3xl text-center mb-4 font-thin">Login</h2>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-lg font-thin">
                Email Id
              </legend>
              <input
                type="text"
                className="input"
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
                className="input"
                placeholder="Enter your password here"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
          </div>
          <div className="text-center">
            <p className="text-red-500 font-semibold text-start">{err}</p>
            <button
              className="btn btn-soft btn-primary"
              onClick={handleLogin}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
