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
import RecImg5 from "../images/galaxyS2Back.jpg";
import RecImg6 from "../images/galaxyS4Back.jpg";
import RecImg7 from "../images/galaxyS7Back.jpg";
import RecImg8 from "../images/Note9Back.jpg";

class App extends Component {
  state = {
    carousel1: {
      images: [CarImg1, CarImg2, CarImg3],
      titles: ["Galaxy Note9", "Galaxy Note10", "Galaxy Fold"],
      describes: ["자급제 Open", "더욱 새로워진 Note", "Fold 그 이상의 가치"],
      animationTime: 250,
      slideInterval: 3000,
    },
    recom1: {
      images: [RecImg1, RecImg2, RecImg3, RecImg4],
      images2: [RecImg5, RecImg6, RecImg7, RecImg8],
      describes: ["Galaxy S2", "Galaxy S4", "Galaxy S7", "Galaxy Note 9"],
    },
    header: {
      product: [
        "갤럭시 5G",
        "가전",
        "모바일",
        "TV",
        "IT",
        "오디오",
        "소모품",
        "이벤트",
        "닷컴핫딜",
      ],
      service: ["스토리", "멤버십", "고객지원", "비즈니스"],
      icon: [
        "https://img.icons8.com/material-outlined/48/000000/user--v1.png",
        "https://img.icons8.com/material-outlined/48/000000/shopping-cart.png",
        "https://img.icons8.com/material-outlined/48/000000/search.png",
      ],
    },
  };

  render() {
    const { carousel1, recom1, header } = this.state;

    return (
      <Wrapper
        carousel={
          <Carousel
            animationTime={carousel1.animationTime}
            slideInterval={carousel1.slideInterval}
            titles={carousel1.titles}
            describes={carousel1.describes}
          >
            {carousel1.images.map((item, index) => {
              return <img src={item} key={index} alt="images" />;
            })}
          </Carousel>
        }
        recom={
          <Recom
            images={recom1.images}
            images2={recom1.images2}
            describes={recom1.describes}
          ></Recom>
        }
        header={
          <Header
            product={header.product}
            service={header.service}
            icon={header.icon}
          ></Header>
        }
      >
        <Recom2 />
        <Search />
      </Wrapper>
    );
  }
}

export default App;
