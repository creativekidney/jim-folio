import React from 'react';
import './workSlide.scss';
import Slide from '../slide';
import LazyLoadChildren from '../../utils/lazyLoadChildren';

class WorkSlide extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const { client, title, color, backgroundColor, images, index } = this.props;

    return (
      <LazyLoadChildren index={index}>
        <Slide
          h1={client}
          h2={title}
          color={color}
          backgroundColor={backgroundColor}
          images={images}
        />
      </LazyLoadChildren>
    );
  }
}

WorkSlide.propTypes = {
  client: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  color: React.PropTypes.string.isRequired,
  backgroundColor: React.PropTypes.string.isRequired,
  images: React.PropTypes.arrayOf(React.PropTypes.shape).isRequired,
  index: React.PropTypes.number.isRequired,
};

export default WorkSlide;
