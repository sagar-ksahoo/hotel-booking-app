import React from "react";
import Featured from "../components/Featured";
import FeaturedProperties from "../components/FeaturedProperties";
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
        <h1 className="homeTitle">Homes Our Guests Love</h1>
        <FeaturedProperties />
      </div>
    </>
  );
};

export default Home;
