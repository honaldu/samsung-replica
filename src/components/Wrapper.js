import React from "react";
import "./Wrapper.scss";

import Recom1 from "./Recom1";
import Search from "./Search";

const Wrapper = ({ carousel, recom, header }) => {
  return (
    <div>
      {header}
      {carousel}
      {recom}
      <Recom1 />
      <Search />
    </div>
  );
};
export default Wrapper;
