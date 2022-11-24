import React from "react";
import { useEffect } from "react";
import CardPage from "../Cardpage/CardPage";
import Dropdown from "../Dropdown/Dropdown";
import "./Home.css";
const Home = () => {
  useEffect(() => {
    const home = document.getElementById("home");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.id = "home_show";
        }
      });
    });
    if (home) {
      obs.observe(home);
    }
  }, []);
  return (
    <>
      <div id="home">
        <Dropdown />
        <CardPage />
      </div>
    </>
  );
};

export default Home;
