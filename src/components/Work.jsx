import React from "react";
import "./Styles/Work.css";
import Navbar from "./Navbar";
const WorkExperience = ({ company, position, duration, description }) => {
  return (
    <div className="work-experience">
      <h2 className="position">{position}</h2>
      <p className="company">{company}</p>
      <p className="duration">{duration}</p>
      <p className="description">{description}</p>
    </div>
  );
};

const Work = () => {
  return (
    <div>
      <Navbar />
      <h1>My Work Experience</h1>
      <WorkExperience
        company="BroTecs Technologies Ltd."
        position="Software Engineer L-I"
        duration="March 2023 - Present"
        description="Cloud Engineering & DevSecOps"
      />
      <WorkExperience
        company="BroTecs Technologies Ltd."
        position="Junior Software Engineer"
        duration="March 2022 - February 2023"
        description="Cloud Engineering & DevSecOps"
      />
      <WorkExperience
        company="BroTecs Technologies Ltd."
        position="Intern Software Engineer"
        duration="September 2021 - February 2022"
        description="Cloud Engineering & DevSecOps"
      />
    </div>
  );
};

export default Work;
