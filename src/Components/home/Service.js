import React from "react";

import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { img, name, description, price } = service;
  const navigate = useNavigate();
  return (
    <div className="card-group col-sm-12 col-md-6 col-lg-4 g-5">
      <div class="card">
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{description}</p>
          <p class="card-text"><span className="">{price}</span> BDT per person</p>
          <button class="btn btn-primary" onClick={() => navigate("/checkout")}>
            CHECKOUT{" "}
          </button>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;