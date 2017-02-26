import React from 'react';
import _isEmpty from 'lodash/isEmpty';
import { List } from 'immutable';
import { Element } from 'react-scroll';
import styles from './slide.scss';
import WorkCarousel from '../../workCarousel';

class Slide extends React.Component {
  renderCarousel() {
    const { images } = this.props;

    if (_isEmpty(images)) { return null; }

    return (
      <div className={styles.carousel}>
        <WorkCarousel images={images} />
      </div>
    );
  }

  render() {
    const { backgroundColor, color, h1, h2, pos } = this.props;

    return (
      <Element
        name={`slide${pos}`}
        className={styles.slide}
        style={{
          backgroundColor,
          color,
        }}
      >
        <h1 className={styles.h1}>{h1}</h1>
        <h2 className={styles.h2}>{h2}</h2>
        {this.renderCarousel()}
      </Element>
    );
  }
}

Slide.propTypes = {
  h1: React.PropTypes.string.isRequired,
  h2: React.PropTypes.string.isRequired,
  color: React.PropTypes.string.isRequired,
  backgroundColor: React.PropTypes.string.isRequired,
  images: React.PropTypes.instanceOf(List),
  pos: React.PropTypes.number.isRequired,
};

Slide.defaultProps = {
  images: new List(),
};

export default Slide;
