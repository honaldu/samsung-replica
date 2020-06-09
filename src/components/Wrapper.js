import React from "react";
import "./Wrapper.scss";
import Header from "./Header";
import Recom from "./Recom";
import Recom1 from "./Recom1";
import Search from "./Search";

const Wrapper = ({ carousel }) => {
  return (
    <div>
      <Header />
      {carousel}
      <Recom />
      <Recom1 />
      <Search />
    </div>
  );
};
export default Wrapper;
