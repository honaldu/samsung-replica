import React, { Component } from "react";

import "./Carousel.scss";

// UI 컴포넌트 생성, state 값 활용, 수명 주기 함수 활용위해 class 로 컴포넌트 생성
class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 1, // index 값 생성
      transitionDuration: props.animationTime, // props 로 애니메이션 시간 받음
    };
    this.elements = this.createClones(props.children); // props 로 받은 html 태그들 카피
    this.timeoutObject = null; // timer 생성 위한 값
  }

  createClones(children) {
    const length = children.length; // children 의 수
    const last = Object.assign({}, children[length - 1]); // Object.assign : 객체 병합 메소드. 첫번째 인자는 타겟, 두번째 인자부터 마지막 인자까지는 소스 오브젝트. 소스 오브젝트는 타겟 오브젝트에 병함.
    const first = Object.assign({}, children[0]);

    return [last, ...children, first]; // last,first 인덱싱 한 카피본 생성
  }

  // 컴포넌트 마운트 시 바로 인터벌 시작
  componentDidMount() {
    this.startSlideInterval();
  }

  // props 로 받은 slideInterval 이 false 아닐 시 timeoutObject 값 설정
  startSlideInterval() {
    if (this.props.slideInterval) {
      this.timeoutObject = setTimeout(this.next, this.props.slideInterval);
    }
  }

  // 시간 초기화 함수
  clearSlideInterval() {
    if (this.timeoutObject) {
      clearTimeout(this.timeoutObject);
    }
  }

  // Index 시작, 끝 발생 시 transition
  handleTransitionEnd = () => {
    const length = this.elements.length;
    const activeIndex = this.state.activeIndex;

    // index 가 첫번째에서 그 전으로 갈 시
    if (activeIndex === 0) {
      this.setState({
        transitionDuration: 0, // 사진이 바로 변경 된 뒤 애니메이션 실행
        activeIndex: length - 1,
      });
    }
    // index 가 마지막에서 그 다음으로 갈 시
    else if (activeIndex === length - 1) {
      this.setState({
        transitionDuration: 0, // 사진이 바로 변경 된 뒤 애니메이션 실행
        activeIndex: 1,
      });
    }

    // 시간 초기화 후 다시 실행
    this.clearSlideInterval();
    this.startSlideInterval();
  };

  // index 값 통제
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
      transform: `translateX(${translation.toString()}%)`,
      transitionDuration: `${transitionDuration / 1000}s`,
      width: `${elements.length * 100}%`,
    };

    return (
      <div className="carousel-wrapper">
        <div
          className="carousel-items"
          style={style}
          onTransitionEnd={this.handleTransitionEnd}
        >
          {elements.map((element, index) => {
            // clone mapping 작업.
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
            // props 로 받은 children 개수 만큼 indicator 생성
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
