import React from 'react';
import { List } from 'immutable';
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
    const { client, title, color, backgroundColor, images } = this.props;

    return (
      // <LazyLoadChildren index={index}>
      <Slide
        h1={client}
        h2={title}
        color={color}
        backgroundColor={backgroundColor}
        images={images}
      />
      // </LazyLoadChildren>
    );
  }
}

WorkSlide.propTypes = {
  client: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  color: React.PropTypes.string.isRequired,
  backgroundColor: React.PropTypes.string.isRequired,
  images: React.PropTypes.instanceOf(List).isRequired,
};

export default WorkSlide;
