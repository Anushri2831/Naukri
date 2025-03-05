import React from "react";
import "./JobListing.css";
import Button from "./Button";
import {BiStar} from 'react-icons/bi';
import {BiBriefcase} from 'react-icons/bi';
import { FaRupeeSign } from "react-icons/fa";
import {RiMapPinLine} from 'react-icons/ri';

const JobListing = () => {
  return (
    <div className="jobListing">
      <div className="header">
        <h2>Senior Finance Executive Revenue To Record CA Freshers</h2>
        <div className="unc" style={{right:"12px"}}>
      <img src="data:image/jpeg;base64,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" height="40px" width="50px"></img>
        <p className="un" style={{color:"blue"}}>Send me jobs like this</p>
        </div>
      </div>
      <div className="unacademy">
       
        <p className="company">Unacademy <BiStar size={12} color={"yellow"} bgcolor={"yellow"}/> 3.0 | 1945 Reviews</p>
        </div>
      <div className="details">
        <span><BiBriefcase /> 0 - 2 years</span>
        <span><FaRupeeSign /> Not Disclosed</span>
        <span><RiMapPinLine /> Bengaluru</span>
      </div>
      <div className="main">
      <div className="meta">
        <p>Posted: <span style={{fontWeight:"bolder" ,color:"black"}}>17 days ago</span> | Openings: <span style={{fontWeight:"bolder" ,color:"black"}}> 2</span> | Applicants: <span style={{fontWeight:"bolder" ,color:"black"}}>884</span></p>
        <div className="actions">
        <Button text="Register to apply" variant="secondary" />
        <Button text="Login to apply" variant="primary" />
      </div>
      </div>
      </div>
      
    </div>
  );
};

export default JobListing;