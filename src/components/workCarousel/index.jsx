/* global $ */
import React from 'react';
import Slider from 'react-slick';
import { List } from 'immutable';
import styles from './workCarousel.scss';

class WorkCarousel extends React.Component {
  static renderSlide(image) {
    return (
      <div className={styles.slide} key={image.get('id')}>
        <img src={`/assets/images/${image.get('src')}`} alt={image.get('alt')} />
      </div>
    );
  }

  constructor(props) {
    super(props);

    this.state = {};
  }

  getCopyMarkup() {
    const { copy } = this.props;
    return { __html: copy };
  }


  renderSlider() {
    const { active } = this.props;

    let slides;

    if (active) {
      slides = this.props.images.map(image =>
        this.constructor.renderSlide(image),
      );

      slides = slides.push(
        <div className={styles.slide} key="-1">
          <div className={styles.synopsis}>
            <p dangerouslySetInnerHTML={this.getCopyMarkup()} />
          </div>
        </div>,
      );
    } else {
      slides = this.constructor.renderSlide(this.props.images.first());
    }

    const settings = {
      dots: true,
      dotsClass: styles.dots,
      arrows: true,
      customPaging: () => <a>dot</a>,
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
  active: React.PropTypes.bool.isRequired,
};

export default WorkCarousel;
