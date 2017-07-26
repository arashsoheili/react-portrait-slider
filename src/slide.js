import React, { Component } from 'react';

export default class Slider extends Component {
  render() {
    const width = this.props.width || 300;
    const height = this.props.height || 600;
    const backgroundImage = require(`./img/${this.props.image}`);
    const styles = {
      imageBackground: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        float: 'left',
        width: `${width}px`,
        height: `${height}px`
      }
    }
    return (
      <div className="slide" style={styles.imageBackground}></div>
    )
  }
}