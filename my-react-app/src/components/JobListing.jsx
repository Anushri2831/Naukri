import React from "react";
import "./JobListing.css";
import Button from "./Button";

const JobListing = () => {
  return (
    <div className="jobListing">
      <div className="header">
        <h2>Senior Finance Executive Revenue To Record CA Freshers</h2>
      <img src="data:image/jpeg;base64,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" height="40px" width="40px"></img>
        <p className="un" style={{color:"blue"}}>Send me jobs like this</p>
      </div>
      <div className="unacademy">
       
        <p className="company">Unacademy ⭐ 3.0 | 1945 Reviews</p>
        </div>
      <div className="details">
        <span>📅 0 - 2 years</span>
        <span>💰 Not Disclosed</span>
        <span>📍 Bengaluru</span>
      </div>
      <div className="meta">
        <p>Posted: 17 days ago | Openings: 2 | Applicants: 884</p>
      </div>
      <div className="actions">
        <Button text="Register to apply" variant="secondary" />
        <Button text="Login to apply" variant="primary" />
      </div>
    </div>
  );
};

export default JobListing;