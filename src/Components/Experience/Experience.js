import React, { useEffect } from "react";
import "./Experience.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Experience() {
    useEffect(() => {
        AOS.init({duration: 1500});
    }, []);



    return (
        // make a grid for the experience work in the companies
        <div className="experience">
  
    <div className="row" data-aos="fade-right" >
    <h2 className="experience-title">Experience</h2>
<div className="col-md-6 mt-3 mt-md-0 ">
<div className="card">
    <div className="card-body">
        <h5 className="card-title">Software Engineer intern</h5>
        <h6 className="card-subtitle mb-2 text-muted">Advanced Computer Technology (ACT)</h6>
        <p className="card-subtitle mb-2 text-muted">From: August 2021 to: September 2021</p>      
        </div>

</div>

</div>

<div className="col-md-6 mt-3 mt-md-0">
<div className="card">
    <div className="card-body">
        <h5 className="card-title">Mobile Develober intern</h5>
        <h6 className="card-subtitle mb-2 text-muted">Metas Architectural Studio</h6>
        <p className="card-subtitle mb-2 text-muted">From: Feburary 2022 to: March 2023</p>         
        </div>

</div>

</div>




    </div>
    </div>

    );
}

export default Experience;