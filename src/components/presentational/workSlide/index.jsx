import React from 'react';
import { List } from 'immutable';
import _isEmpty from 'lodash/isEmpty';
import styles from './workSlide.scss';
import Slide from '../slide';
import WorkCarousel from '../../workCarousel';
// import LazyLoadChildren from '../../utils/lazyLoadChildren';

class WorkSlide extends React.Component {
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
    const { pos, client, title, color, backgroundColor } = this.props;

    return (
      // <LazyLoadChildren index={index}>
      <Slide
        pos={pos}
        h1={client}
        h2={title}
        color={color}
        backgroundColor={backgroundColor}
      >
        {this.renderCarousel()}
      </Slide>
      // </LazyLoadChildren>
    );
  }
}

WorkSlide.propTypes = {
  pos: React.PropTypes.number.isRequired,
  client: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  color: React.PropTypes.string.isRequired,
  backgroundColor: React.PropTypes.string.isRequired,
  images: React.PropTypes.instanceOf(List).isRequired,
};

export default WorkSlide;
