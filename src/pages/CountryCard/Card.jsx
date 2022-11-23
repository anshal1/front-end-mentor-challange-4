import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";
const Card = (props) => {
  const navi = useNavigate();
  return (
    <>
      <div
        className="card"
        onClick={() => {
          navi(`/details/${props.commonname}`);
        }}
      >
        <div className="country_img">
          <img src={props.img} alt="Country Image not available" />
        </div>
        <div className="country_info">
          <div className="country_name">
            <p>{props.name}</p>
          </div>
          <div className="other_info">
            <p>
              <span>Population: </span>
              {props.population}
            </p>
            <p>
              <span>Region: </span>
              {props.region}
            </p>
            <p>
              <span>Capital: </span>
              {props.capital}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
