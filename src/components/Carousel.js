import React, { Component } from "react";

import "./Carousel.scss";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 1,
      transitionDuration: props.animationTime,
    };
    this.elements = this.createClones(props.children);
    this.timeoutObject = null;
  }

  createClones(children) {
    const length = children.length;
    const last = Object.assign({}, children[length - 1]);
    const first = Object.assign({}, children[0]);

    return [last, ...children, first];
  }

  componentDidMount() {
    this.startSlideInterval();
  }

  startSlideInterval() {
    if (this.props.slideInterval) {
      this.timeoutObject = setTimeout(this.next, this.props.slideInterval);
    }
  }

  clearSlideInterval() {
    if (this.timeoutObject) {
      clearTimeout(this.timeoutObject);
    }
  }

  handleTransitionEnd = () => {
    const length = this.elements.length;
    const activeIndex = this.state.activeIndex;

    if (activeIndex === 0) {
      this.setState({ transitionDuration: 0, activeIndex: length - 2 });
    } else if (activeIndex === length - 1) {
      this.setState({ transitionDuration: 0, activeIndex: 1 });
    }

    this.clearSlideInterval();
    this.startSlideInterval();
  };

  setActiveIndex = (newIndex) => {
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
    const { titles, describes } = this.props;
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
                <div className="carousel-introduce">
                  <div className="carousel-text">
                    <div className="text-title">{titles[index - 1]}</div>
                    <div className="text-describe">{describes[index - 1]}</div>
                    <div className="carousel-button">
                      <a href="/" className="more">
                        더 알아보기
                      </a>
                      <a href="/" className="benefit">
                        구매 혜택 보기
                      </a>
                    </div>
                  </div>
                </div>
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
              <button
                className={indicatorClass}
                key={index + 1}
                onClick={() => this.setActiveIndex(index + 1)}
              >
                {titles[index]}
              </button>
            );
          })}
        </div>
        <Arrow onArrowClick={prev} direction="left" text="&#10094;" />
        <Arrow onArrowClick={next} direction="right" text="&#10095;" />
      </div>
    );
  }
}

Carousel.defaultProps = {
  animationTime: 600,
};

//Arrow component
const Arrow = (props) => {
  return (
    <button onClick={props.onArrowClick} className={props.direction}>
      {props.text}
    </button>
  );
};

export default Carousel;
