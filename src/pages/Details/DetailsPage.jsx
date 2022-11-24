import React from "react";
import { useEffect } from "react";
import "./DetailsPage.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Loading from "../Loading/Loading";
const DetailsPage = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/");
  const [Details, setdetails] = useState([]);
  const [border_country, setbordercountry] = useState([]);
  const country = pathname[pathname.length - 1];
  const [loading, setloading] = useState(true);
  const navi = useNavigate();
  const searchbyname = async () => {
    let url = `https://restcountries.com/v3.1/name/${country}?fullText=true`;
    let data = await fetch(url);
    let res = await data.json();
    if (res) {
      setdetails(res);
      setloading(false);
    } else {
      setloading(false);
    }
  };
  const Search_by_code = async () => {
    setloading(true);
    let url = `https://restcountries.com/v3.1/alpha?codes=${Details[0]?.borders.join(
      ","
    )}`;
    let data = await fetch(url);
    let res = await data.json();
    if (res.length >= 1) {
      setloading(false);
      setbordercountry(res);
    } else {
      setloading(false);
    }
  };
  useEffect(() => {
    const page = document.getElementById("main_detailspage_container");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.id = "main_detailspage_container_show";
          }
        });
      },
      {
        root: document.body,
      }
    );
    obs.observe(page);
    searchbyname();
  }, []);
  useEffect(() => {
    Search_by_code();
  }, [Details]);

  //* --------------------------------------------------------

  //   Since the language data is in object format insted of array and every country has different language key-value pair we used this function
  const languages = Details[0]?.languages;
  const looplanguage = () => {
    if (languages) {
      const Language = [];
      Object.values(languages).forEach((val) => {
        Language.push(val);
      });
      return Language.join(", ");
    }
  };

  const NativeName = Details[0]?.name.nativeName;
  const loopNativeName = () => {
    const Nativename = [];
    for (const Name in NativeName) {
      Nativename.push(`${NativeName[Name].official}`);
    }
    if (Nativename.length > 1) {
      return Nativename[1];
    } else {
      return Nativename[0];
    }
  };
  const currencies = Details[0]?.currencies;
  const loopCurrencies = () => {
    for (const currency in currencies) {
      return `${currencies[currency].name}`;
    }
  };
  return (
    <>
      <div id="main_detailspage_container">
        <div className="back">
          <button
            onClick={() => {
              navi("/");
            }}
          >
            <i className="fa-solid fa-arrow-left"></i> Back
          </button>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className="details_container">
            <div className="country_image">
              <img src={Details[0]?.flags.png} alt="" />
            </div>
            <div className="details_country_info">
              <div>
                <div className="details_country_name">
                  <p>{Details[0]?.name.official}</p>
                </div>
                <div className="wrapper-1">
                  <div className="other_details">
                    <p>
                      <span>Native Name: </span>
                      {loopNativeName()}
                    </p>
                    <p>
                      <span>Population: </span>
                      {Details[0]?.population.toLocaleString()}
                    </p>
                    <p>
                      <span>Region: </span>
                      {Details[0]?.region}
                    </p>
                    <p>
                      <span>Sub Region: </span>
                      {Details[0]?.subregion}
                    </p>
                    <p>
                      <span>Capital: </span>
                      {Details[0]?.capital}
                    </p>
                  </div>
                  <br />
                  <br />
                  <div className="details_bottom_container">
                    <p>
                      <span>Top Level Domian: </span>
                      {Details[0]?.tld[0]}
                    </p>
                    <p>
                      <span>Currencies: </span>
                      {loopCurrencies()}
                    </p>
                    <p>
                      <span>Languages: </span>
                      {looplanguage()}
                    </p>
                  </div>
                </div>
                <div className="border_country">
                  <p>Border Countries:</p>
                  <div className="border_country_name">
                    {border_country?.map((bcountry) => {
                      return (
                        <p key={bcountry.name.common}>{bcountry.name.common}</p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DetailsPage;
