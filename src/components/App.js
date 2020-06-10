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
    images: [img1, img2, img3], // 이미지 목록
    animationTime: 300, // 애니메이션 시간
    slideInterval: 3000, // 몇초 뒤 넘길 지
  };

  render() {
    const { images, animationTime, slideInterval } = this.state;
    return (
      <Wrapper
        carousel={
          <Carousel animationTime={animationTime} slideInterval={slideInterval}>
            {images.map((item, index) => {
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
