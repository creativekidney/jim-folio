import React from 'react';
import { List } from 'immutable';
import _isEmpty from 'lodash/isEmpty';
import styles from './workSlide.scss';
import Slide from '../slide';
import WorkCarousel from '../../workCarousel';
// import LazyLoadChildren from '../../utils/lazyLoadChildren';

class WorkSlide extends React.Component {
  renderCarousel() {
    const { images, copy, active } = this.props;

    if (_isEmpty(images)) { return null; }

    return (
      <div className={styles.carousel}>
        <WorkCarousel
          images={images}
          copy={copy}
          active={active}
        />
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
  active: React.PropTypes.bool.isRequired,
  pos: React.PropTypes.number.isRequired,
  client: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  color: React.PropTypes.string.isRequired,
  backgroundColor: React.PropTypes.string.isRequired,
  images: React.PropTypes.instanceOf(List).isRequired,
  copy: React.PropTypes.string.isRequired,
};

export default WorkSlide;
