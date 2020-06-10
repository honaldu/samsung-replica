import React, { Component } from "react";

import "./Carousel.scss";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 1, // 페이지 인덱스
      transitionDuration: props.animationTime, // animationtime duration으로 state 화
    };
    this.elements = this.createClones(props.children); // props 로 받은 image 들 clone
    this.timeoutObject = null; // 시간 제한 위한 Object?
  }
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
    // 구조분해
    const { next, prev, elements } = this;
    const { activeIndex, transitionDuration } = this.state;
    const translation = (-100 * activeIndex) / elements.length; // -100으로 퍼센테이지에 대응
    const style = {
      transform: "translateX(" + translation.toString() + "%)",
      transitionDuration: transitionDuration / 1000 + "s",
      width: elements.length * 100 + "%",
    };

    return (
      <div className="carousel-container">
        <div
          className="carousel-items"
          style={style}
          onTransitionEnd={this.handleTransitionEnd}
        >
          {React.Children.map(elements, (element, index) => {
            return (
              <div className="carousel-item" key={index}>
                {element}
              </div>
            );
          })}
        </div>
        <div className="indicators">
          {this.props.children.map((child, index) => {
            let indicatorClass = "indicators-item";

            if (index + 1 === activeIndex) {
              indicatorClass += " active";
            }

            return (
              <div
                className={indicatorClass}
                key={index + 1}
                onClick={() => this.setActiveIndex(index + 1)}
              />
            );
          })}
        </div>
        <Arrow onArrowClick={prev} direction="left" />
        <Arrow onArrowClick={next} direction="right" />
      </div>
    );
  }
}

Carousel.defaultProps = {
  animationTime: 600,
};

//Arrow component
const Arrow = (props) => {
  const containerClass = "arrow " + props.direction;
  const iconClass = "fas fa-chevron-" + props.direction;

  return (
    <div onClick={props.onArrowClick} className={containerClass}>
      <i className={iconClass} />
    </div>
  );
};

export default Carousel;
