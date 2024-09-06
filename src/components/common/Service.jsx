import React from "react";

const Service = ({ nameTag, imagePath }) => {
  return (
    <div className="col-md-3 col-lg-3">
      <div className="item">
        <div className="service-image">
          <img src={imagePath} alt="" className="w-100" />
          <div className="service-body">
            <div className="service-title">
              <h3>{nameTag}</h3>
            </div>
            <div className="service-content">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dignissimos non deserunt eaque ea quod eos, fugiat ex
                perspiciatis quo vel esse deleniti voluptates illo vitae!
                Adipisci quia autem nobis error?
              </p>
            </div>
            <a href="#" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
