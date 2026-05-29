import React from 'react';

import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        {Array.isArray(data.companylogo) ? 
          data.companylogo.map((logo, index) => <img key={index} className="bg-white mb-3 mx-2" src={logo} alt="" width="60" height="60" />) :
          <img className="bg-white mb-3" src={data.companylogo} alt="" width="60" height="60" />
        }
        <p className="lead">
          {data.role}
          <br />
          {data.date}
        </p>

      </div>
    </Col>
  );
}

export default ExperienceCard;