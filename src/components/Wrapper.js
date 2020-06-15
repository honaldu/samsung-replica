import React from "react";
import "./Wrapper.scss";
import Header from "./Header";
import Recom1 from "./Recom1";
import Search from "./Search";

const Wrapper = ({ carousel, recom }) => {
  return (
    <div>
      <Header />
      {carousel}
      {recom}
      <Recom1 />
      <Search />
    </div>
  );
};
export default Wrapper;
