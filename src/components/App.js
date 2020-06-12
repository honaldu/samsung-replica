import React, { Component } from "react";
import Wrapper from "./Wrapper";
import Header from "./Header";
import Carousel from "./Carousel";
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
      animationTime: 250,
      slideInterval: 3000,
    },
    Carousel2: {},
  };

  render() {
    const { Carousel1 } = this.state;

    return (
      <Wrapper
        carousel={
          <Carousel
            animationTime={Carousel1.animationTime}
            slideInterval={Carousel1.slideInterval}
            titles={Carousel1.titles}
            describes={Carousel1.describes}
          >
            {Carousel1.images.map((item, index) => {
              return <img src={item} key={index} alt="images" />;
            })}
          </Carousel>
        }
      >
        <Header />
        <Recom />
        <Recom1 />
        <Search />
      </Wrapper>
    );
  }
}

export default App;
