import React from "react";
import Announcements from "../components/Announcements";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <Announcements />
      <Navbar />
      <Slider />
      <Categories />
      <Products title="Popular Products" limit={1} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
