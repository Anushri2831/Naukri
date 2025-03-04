import React from "react";
import "./JobDescription.css";
import Tags from "./Tags";

const JobDescription = () => {
  return (
    <div className="jobDescription">
      <h3>Job description</h3>
      <p><strong>Unacademy - Bangalore</strong></p>
      <p>Position: Senior Finance Executive Revenue</p>

      <h4>Job Description</h4>
      <ul>
        <li>Conduct a three-way revenue reconciliation (Revenue to Record).</li>
      </ul>
      <a href="#">read more</a>

      <h4>Key Skills</h4>
      <p>Skills highlighted with ‘★’ are preferred key skills</p>
      <div className="skills">
        <Tags text="CA" />
        <Tags text="Revenue Reconciliation" />
        <Tags text="GST Filing" />
        <Tags text="GST" />
        <Tags text="Revenue Recognition" />
      </div>
    </div>
  );
};

export default JobDescription;