import React from 'react';
import PropTypes from 'prop-types';

const Slider = ({image, width, height}) => {
    const backgroundImage = require(`./img/${image}`);
    const styles = {
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: 'center top',
      backgroundRepeat: 'no-repeat',
      float: 'left',
      width: `${width}px`,
      height: `${height}px`
    }
    return (
      <div className="slide" style={styles}></div>
    )
}

Slider.defaultProps = {
  width: 300,
  height: 600
}

Slider.propTypes = {
  image: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
}

export default Slider;