import React from "react";
import "./Wrapper.scss";
import Header from "./Header";
import Carousel from "./Carousel";
import Recom from "./Recom";
import Recom1 from "./Recom1";
import Search from "./Search";

const Wrapper = () => {
  return (
    <div>
      <Header />

      <Carousel />
      <Recom />
      <Recom1 />
      <Search />
    </div>
  );
};
export default Wrapper;
