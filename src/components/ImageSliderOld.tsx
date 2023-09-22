import React, { Component } from 'react';

interface ImageSliderProps {
  images: any;
}

interface ImageSliderState {
  currentIndex: number;
}

class ImageSlider extends Component<ImageSliderProps, ImageSliderState> {
  constructor(props: ImageSliderProps) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  handleNext = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % this.props.images.length,
    }));
  };

  handlePrev = () => {
    this.setState((prevState) => ({
      currentIndex:
        (prevState.currentIndex - 1 + this.props.images.length) %
        this.props.images.length,
    }));
  };

  render() {
    const { images } = this.props;
    const { currentIndex } = this.state;

    return (
      <div>
        <button onClick={this.handlePrev}>Prev</button>
        <img src={images[currentIndex]} alt="Current" />
        <button onClick={this.handleNext}>Next</button>
      </div>
    );
  }
}

export default ImageSlider;
