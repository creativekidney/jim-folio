import React from 'react';
import Slider from 'react-slick';
import { List } from 'immutable';
import styles from './workCarousel.scss';

class WorkCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  getCopyMarkup() {
    const { copy } = this.props;
    return { __html: copy };
  }

  renderSlider() {
    let slides = this.props.images.map(image =>
      (
        <div className={styles.slide} key={image.get('id')}>
          <img src={`/assets/images/${image.get('src')}`} alt={image.get('alt')} />
        </div>
      ),
    );

    slides = slides.push(
      <div className={styles.slide} key="-1">
        <div className={styles.synopsis}>
          <p dangerouslySetInnerHTML={this.getCopyMarkup()} />
        </div>
      </div>,
    );

    const settings = {
      dots: true,
      arrows: false,
    };

    return (
      <Slider {...settings}>
        { slides }
      </Slider>
    );
  }

  render() {
    if (this.props.images.size < 1) { return null; }

    return (
      this.renderSlider()
    );
  }
}

WorkCarousel.propTypes = {
  images: React.PropTypes.instanceOf(List).isRequired,
  copy: React.PropTypes.string.isRequired,
};

export default WorkCarousel;
