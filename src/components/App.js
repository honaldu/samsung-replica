import React, { Component } from "react";
import Wrapper from "./Wrapper";
import Header from "./Header";
import Carousel from "./Carousel";
import Recom from "./Recom";
import Recom2 from "./Recom1";
import Search from "./Search";
import CarImg1 from "../images/note9.jpg";
import CarImg2 from "../images/note10.jpg";
import CarImg3 from "../images/fold.jpg";
import RecImg1 from "../images/galaxyS2.jpg";
import RecImg2 from "../images/galaxyS4.jpeg";
import RecImg3 from "../images/galaxyS7.jpg";
import RecImg4 from "../images/note9.jpeg";

class App extends Component {
  state = {
    Carousel1: {
      images: [CarImg1, CarImg2, CarImg3],
      titles: ["Galaxy Note9", "Galaxy Note10", "Galaxy Fold"],
      describes: ["자급제 Open", "더욱 새로워진 Note", "Fold 그 이상의 가치"],
      animationTime: 250,
      slideInterval: 3000,
    },
    Recom1: {
      images: [RecImg1, RecImg2, RecImg3, RecImg4],
      images2: [RecImg4,RecImg3,RecImg2,RecImg1],
      describes: ["Galaxy S2", "Galaxy S4", "Galaxy S7", "Galaxy Note 9"],
    },
  };

  render() {
    const { Carousel1, Recom1 } = this.state;

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
        recom={
          <Recom
            images={Recom1.images}
            images2={Recom1.images2}
            describes={Recom1.describes}
          ></Recom>
        }
      >
        <Header />
        <Recom2 />
        <Search />
      </Wrapper>
    );
  }
}

export default App;
