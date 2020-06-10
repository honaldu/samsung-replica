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
    carousel1: {
      images: [img1, img2, img3],
      animationTime: 300,
      slideInterval: 3000,
      activeIndex: 1, // 페이지 인덱스
      transitionDuration: animationTime,
    },
  };

  elements = this.createClones(props.children); // props 로 받은 image 들 clone
  timeoutObject = null; // 시간 제한 위한 Object?

  // img 복제
  createClones(children) {
    const length = children.length; // img length 값
    const last = Object.assign({}, children[length - 1]); // img last
    const first = Object.assign({}, children[0]); // img first

    return [last, ...children, first]; // first, last 있는 복제 생산
  }

  // 생명 주기 함수
  // 화면에 나오기 전 startSlideInterval 실행
  componentDidMount() {
    this.startSlideInterval();
  }
  // timer 함수
  startSlideInterval() {
    if (this.props.slideInterval) {
      this.timeoutObject = setTimeout(this.next, this.props.slideInterval); // sldieInterval 지날 시 next 함수 실행
    }
  }

  // timer 초기화 함수
  clearSlideInterval() {
    // null 값 아닐 때 실행
    if (this.timeoutObject) {
      clearTimeout(this.timeoutObject);
    }
  }

  handleTransitionEnd = () => {
    const length = this.elements.length; // clone 된 img 숫자
    const activeIndex = this.state.activeIndex; // activeIndex
    // activeIndex = 0 될 시 마지막 페이지
    if (activeIndex === 0) {
      this.setState({ transitionDuration: 0, activeIndex: length });
    }
    // activeIndex = length 될 시 첫번째 페이지
    else if (activeIndex === length - 1) {
      this.setState({ transitionDuration: 0, activeIndex: 1 });
    }
    // timer 설정 및 초기화
    this.clearSlideInterval();
    this.startSlideInterval();
  };

  setActiveIndex = (newIndex) => {
    // newIndex 가 0에서 마지막 인덱스 값일 때
    if (newIndex >= 0 && newIndex <= this.elements.length - 1) {
      this.setState({
        transitionDuration: this.props.animationTime,
        activeIndex: newIndex,
      });
    }
  };
  // next 함수
  next = () => {
    this.setActiveIndex(this.state.activeIndex + 1);
  };
  // prev 함수
  prev = () => {
    this.setActiveIndex(this.state.activeIndex - 1);
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
