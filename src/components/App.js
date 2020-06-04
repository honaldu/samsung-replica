import React from "react";
import Wrapper from "./Wrapper";
import Header from "./Header";
import Carousel1 from "./Carousel1";
import Recom1 from "./Recom1";
import Search from "./Search";

import Recom from "./Recom";

function App() {
  return (
    <Wrapper>
      <Header />
      <Carousel1 />
      <Recom />
      <Recom1 />
      <Search />
    </Wrapper>
  );
}

export default App;
