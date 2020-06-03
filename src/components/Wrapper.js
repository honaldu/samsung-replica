import React from "react";
import "./Wrapper.scss";
import Header from "./Header";
import Carousel1 from "./Carousel1";
import Recom from "./Recom";
import Recom1 from "./Recom1";

const Wrapper = () => {
  return (
    <div>
      <Header />
      <Carousel1 />
      <Recom />
      <Recom1 />
    </div>
  );
};
export default Wrapper;
