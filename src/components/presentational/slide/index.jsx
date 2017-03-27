import React from 'react';
import { List } from 'immutable';
import { Element } from 'react-scroll';
import styles from './slide.scss';

class Slide extends React.Component {
  render() {
    const { backgroundColor, color, h1, h2, pos, children } = this.props;

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
        {children}
      </Element>
    );
  }
}

Slide.propTypes = {
  h1: React.PropTypes.string.isRequired,
  h2: React.PropTypes.string.isRequired,
  color: React.PropTypes.string.isRequired,
  backgroundColor: React.PropTypes.string.isRequired,
  pos: React.PropTypes.number.isRequired,
  children: React.PropTypes.node.isRequired,
};

Slide.defaultProps = {
  images: new List(),
};

export default Slide;
