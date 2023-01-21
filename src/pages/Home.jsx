import React from "react";
import Featured from "../components/Featured";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PropertyList from "../components/PropertyList";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse other property types</h1>
        <PropertyList />
      </div>
    </>
  );
};

export default Home;
