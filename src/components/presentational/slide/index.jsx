import React from 'react';
import { List } from 'immutable';
import { Element } from 'react-scroll';
import instragramImg from '../../../assets/images/instagram.png';
import styles from './slide.scss';

class Slide extends React.Component {
  render() {
    const { backgroundColor, color, h1, h2, pos, children, instagram } = this.props;

    let instagramEl = null;

    if (instagram) {
      instagramEl = (<a className={styles.instagram} href="https://www.instagram.com/made_by_blah/" target="_blank" rel="noopener noreferrer">
        <img src={instragramImg} alt="" />
      </a>);
    }

    return (
      <Element
        name={`slide${pos}`}
        className={styles.slide}
        style={{
          backgroundColor,
          color,
        }}
      >
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h1 className={styles.h1}>{h1}</h1>
            <h2 className={styles.h2}>{h2}</h2>
          </div>
          <div className={styles.headerRight}>
            {instagramEl}
          </div>
        </div>
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
  instagram: React.PropTypes.bool,
};

Slide.defaultProps = {
  images: new List(),
  instagram: false,
};

export default Slide;
