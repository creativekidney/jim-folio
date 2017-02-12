import React from 'react';
import _isEmpty from 'lodash/isEmpty';
import styles from './slide.scss';
import WorkCarousel from '../../workCarousel';

class Slide extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}
  componentWillUnmount() {}

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
    const { backgroundColor, color, h1, h2 } = this.props;

    return (
      <div
        className={styles.slide}
        style={{
          backgroundColor,
          color,
        }}
      >
        <h1 className={styles.h1}>{h1}</h1>
        <h2 className={styles.h2}>{h2}</h2>
        {this.renderCarousel()}
      </div>
    );
  }
}

Slide.propTypes = {
  h1: React.PropTypes.string.isRequired,
  h2: React.PropTypes.string.isRequired,
  color: React.PropTypes.string.isRequired,
  backgroundColor: React.PropTypes.string.isRequired,
  images: React.PropTypes.arrayOf(React.PropTypes.shape),
};

Slide.defaultProps = {
  images: [],
};

export default Slide;
