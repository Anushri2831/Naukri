import React from "react";
import "./RelatedJobs.css";

const jobs = [
  { title: "Korean Educator", experience: "1-5 Yrs", location: "Bengaluru (Domlur)", posted: "19 days ago" },
  { title: "Sales Manager/ Senior Sales Manager", experience: "2-5 Yrs", location: "Delhi / NCR", posted: "24 days ago" },
  { title: "Business Development Manager", experience: "3-5 Yrs", location: "Varanasi", posted: "30 days ago" }
];

const RelatedJobs = () => {
  return (
    <div className="relatedJobs">
      <h3>Unacademy roles you might be interested in</h3>
      <ul>
        {jobs.map((job, index) => (
          <li key={index} className="jobItem">
            <h4>{job.title}</h4>
            <p>📅 {job.experience} | 📍 {job.location}</p>
            <span>Posted {job.posted}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedJobs;