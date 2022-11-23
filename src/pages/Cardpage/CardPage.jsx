import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../../App.css";
import Card from "../CountryCard/Card";
import Loading from "../Loading/Loading";
const CardPage = () => {
  const [country, setcountry] = useState([]);
  const [loading, setloading] = useState(true);
  const GetCountry = async () => {
    let url = "https://restcountries.com/v3.1/all";
    let data = await fetch(url);
    let res = await data.json();
    if (res) {
      setloading(false);
    } else {
      setloading(false);
    }
    setcountry(res);
  };
  const searchbyregion = async (region) => {
    setloading(true);
    let url = `https://restcountries.com/v3.1/region/${region}`;
    let data = await fetch(url);
    let res = await data.json();
    if (res) {
      setloading(false);
    } else {
      setloading(false);
    }
    setcountry(res);
  };
  const searchbyname = async (country) => {
    setloading(true);
    let url = `https://restcountries.com/v3.1/name/${country}`;
    let data = await fetch(url);
    let res = await data.json();
    if (res) {
      setloading(false);
    } else {
      setloading(false);
    }
    setcountry(res);
  };
  useEffect(() => {
    GetCountry();
    const regions = document.querySelectorAll(".continents");
    regions.forEach((region) => {
      region.addEventListener("click", (e) => {
        searchbyregion(e.target.innerHTML);
      });
    });
    const input = document.querySelector("#input");
    input.addEventListener("keypress", (key) => {
      if (key.key === "Enter") {
        searchbyname(input.value);
      }
    });
  }, []);
  return (
    <>
      <div className="card_page">
        {loading ? (
          <Loading />
        ) : (
          <div className="card_holder">
            {country?.map((c) => {
              return (
                <Card
                  img={c.flags.png}
                  key={c.name.official}
                  name={c.name.official}
                  population={c.population}
                  capital={c.capital ? c.capital : "None"}
                  region={c.region}
                  commonname={c.name.official}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default CardPage;
