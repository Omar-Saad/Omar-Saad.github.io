import React, { useEffect } from "react";
import "./Experience.css";
import AOS from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";

function Experience() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    // make a grid for the experience work in the companies
    <div className="experience">
      <div className="row" data-aos="fade-right">
        <h2 className="experience-title">Experience</h2>
        <ExperienceCard
          title="Software Engineer"
          company="Ejada Systems"
          date="From: August 2023 to: Present"
        />
        <ExperienceCard
          title="Software Engineer intern"
          company="Advanced Computer Technology (ACT)"
          date="From: August 2021 to: September 2021"
        />
        <ExperienceCard
          title="Mobile Develober intern"
          company="Metas Architectural Studio"
          date="From: Feburary 2022 to: March 2023"
        />
      </div>
    </div>
  );
}

function ExperienceCard(props) {
  return (
    <div className="col-md-6 mt-3 mt-md-0">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.company}</h6>
          <p className="card-subtitle mb-2 text-muted">{props.date}</p>
        </div>
      </div>
    </div>
  );
}

ExperienceCard.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Experience;
