import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../utils/requestSlice";

const Request = () => {
  const dispatch = useDispatch();
  const request = useSelector((store) => store.request);


//   to accept or reject a connection reques
  const reviewRequest = async(status,requestId) => {
    console.log(status,requestId)
    try{
        const res = axios.post(BASE_URL+"/request/review/"+status +"/"+requestId, {}, {withCredentials:true})

        const updatedRequest = request.filter((req) => req.fromUserId._id !== requestId);
        dispatch(addRequest(updatedRequest));
        
    }catch(error){
        console.error(error);
    }
  }

  const fetchRequest = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/recieved", {
        withCredentials: true,
      });
      dispatch(addRequest(res.data.data));
    } catch (error) {}
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  if (!request || request.length === 0) return <h1 className="text-center mt-4">No Pending Request</h1>;

  return (
    <div className="w-full flex flex-col items-center">
        <h1 className="mt-3 text-2xl font-semibold">Connection Requests</h1>
      {request.map((request,i) => {
        const { _id,firstName, lastName, photoUrl, age, gender, about } = request.fromUserId;
        return (
          <div key={i} className="m-4 flex w-xl py-3 px-6 rounded bg-base-300 ">
            <img src={photoUrl} className="w-18 rounded-full" alt="photo" />
            <div className=" py-2 px-4 flex flex-col gap-y-0.5 w-full">
              <p className="font-bold">
                {firstName} {lastName}
              </p>
              <p>{about}</p>
              {age && gender && <p>{age + ", " + gender}</p>}
            </div>
            <div className="flex items-center gap-2">
                <button className="btn btn-primary" onClick={() => reviewRequest("rejected",_id)}>Reject</button>
                <button className="btn btn-secondary" onClick={() => reviewRequest("accepted",_id)}>Accept</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Request;
