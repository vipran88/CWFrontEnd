import React from "react";

const CardComponent = ({ imagePath }) => {
  return (
    <div className="col-md-4">
        <div className="card shadow border-0 p-4">
          <div className="card-icon">
            <img src={imagePath} />
            <div className="card-title mt-4">
              <h3>Cutting Edge Solutions</h3>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
              aliquid alias, explicabo eum earum obcaecati blanditiis accusamus,
              eos reprehenderit quam voluptates, culpa omnis commodi tempore
              dicta magni! Velit, ipsa omnis.
            </p>
          </div>
        </div>
    
    </div>
  );
};

export default CardComponent;
