import React from 'react';
import Slider from 'react-slick';
import { List } from 'immutable';

class WorkCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  renderSlider() {
    const images = this.props.images.map(image =>
      (
        <div key={image.get('id')}>
          <img src={`/assets/images/${image.get('src')}`} alt={image.get('alt')} />
        </div>
      ),
    );

    const settings = {
      dots: true,
      arrows: false,
    };

    return (
      <Slider {...settings}>
        { images }
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
};

export default WorkCarousel;
