import React, { Component } from "react";
import Wrapper from "./Wrapper";
import Header from "./Header";
import CarouselDIY from "./CarouselDIY";
import Recom1 from "./Recom1";
import Search from "./Search";
import Recom from "./Recom";
import img1 from "../images/note9.jpg";
import img2 from "../images/note10.jpg";
import img3 from "../images/fold.jpg";

class App extends Component {
  state = {
    Carousel1: {
      images: [img1, img2, img3],
      titles: ["Galaxy Note9", "Galaxy Note10", "Galaxy Fold"],
      describes: ["자급제 Open", "더욱 새로워진 Note", "Fold 그 이상의 가치"],
      animationTime: 500,
      slideInterval: 10000,
      timeoutObject: null,
    },
  };
  render() {
    const { Carousel1 } = this.state;
    return (
      <Wrapper
        carousel={
          <CarouselDIY
            images={Carousel1.images}
            titles={Carousel1.titles}
            describes={Carousel1.titles}
          ></CarouselDIY>
        }
      >
        <Header />
        <Recom />
        <Recom1 />
        <Search />
        <CarouselDIY />
      </Wrapper>
    );
  }
}

export default App;
