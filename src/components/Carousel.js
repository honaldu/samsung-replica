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
  next = () => {
    this.setActiveIndex(this.state.activeIndex + 1);
  };
  prev = () => {
    this.setActiveIndex(this.state.activeIndex - 1);
  };
  render() {
    const { activeIndex, transitionDuration } = this.state;
    const elements = this.elements;
    const translation = (-100 * activeIndex) / elements.length;

    const style = {
      transform: `translateX(${translation.toString()}%)`,
      transitionDuration: `${transitionDuration / 1000}s`,
      width: `${elements.length * 100}%`,
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
              indicatorClass += "active";
            }
            return (
              <div
                className={indicatorClass}
                key={index + 1}
                onClick={() => this.setActiveIndex(index + 1)}
              ></div>
            );
          })}
        </div>
        <Arrow onArrowClick={this.prev} diretion="left">
          &#10094;
        </Arrow>
        <Arrow onArrowClick={this.next} diretion="rigth" />
      </div>
    );
  }
}
Carousel.defaultProps = {
  animationTime: 600,
};
const Arrow = (props) => {
  const containerClass = `arrow${props.diretion}`;
  const iconClass = `fas fa-chevron-${props.diretion}`;

  return (
    <div onClick={props.onArrowClick} className={containerClass}>
      <i className={iconClass} />
    </div>
  );
};

export default Carousel;
