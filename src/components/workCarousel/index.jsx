import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.css';

// import styles from './workCarousel.scss';

class WorkCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}
  componentWillUnmount() {}

  renderSlider() {
    const images = (this.props.images || []).map(image =>
      (
        <div key={image.id}>
          <img src={`/assets/images/${image.src}`} alt={image.alt} />
        </div>
      ),
    );

    const settings = {
      dots: true,
    };

    return (
      <Slider {...settings}>
        { images }
      </Slider>
    );
  }

  render() {
    if (this.props.images.length < 1) { return null; }

    return (
      this.renderSlider()
    );
  }
}

WorkCarousel.propTypes = {
  images: React.PropTypes.arrayOf(React.PropTypes.shape).isRequired,
};

export default WorkCarousel;
