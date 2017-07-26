import React, { Component } from 'react';
import Slide from './slide'
import './slider.css'

export default class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 300,
      height: 800,
      images: ['nature-1.jpg', 'nature-2.jpg', 'nature-3.jpg', 'nature-4.jpg', 'nature-5.jpg', 'nature-6.jpg']
    }
  }

  slideLeft() {
    let last = this.state.images.slice(-1)
    let rest = this.state.images.slice(0, -1)
    let images = [last, ...rest]
    this.setState({images: images});
  }

  slideRight() {
    let [first, ...rest] = this.state.images;
    let images = [...rest, first];
    this.setState({images: images});
  }

  renderArrows() {
    return (
      <div className="slider-arrows">
        <a className="arrow left" onClick={() => this.slideLeft()}>
          <img src={require('./img/arrow-left.png')} />
        </a>
        <a className="arrow right" onClick={() => this.slideRight()}>
          <img src={require('./img/arrow-right.png')} />
        </a>
      </div>
    )
  }

  renderSlides() {
    const images = this.state.images;
    return (
      <div className="slider-items">
        {
          images.map((image, index) => {
            return (
              <Slide image={image} width={this.state.width} height={this.state.height} key={index} />
            )
          })
        }
      </div>
    )
  }

  render() {
    return (
      <div className="slider">
        {this.renderArrows()}
        {this.renderSlides()}
      </div>
    )
  }
}