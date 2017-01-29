import React from 'react';
import styles from './workSlide.scss';
import WorkCarousel from '../workCarousel';
import Slide from '../slide';

class WorkSlide extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <Slide
        h1={this.props.client}
        h2={this.props.title}
        color={this.props.color}
        backgroundColor={this.props.backgroundColor}
      >
        <div className={styles.carousel}>
          <WorkCarousel images={this.props.images} />
        </div>
      </Slide>
    );
  }
}

WorkSlide.propTypes = {
  client: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  color: React.PropTypes.string.isRequired,
  backgroundColor: React.PropTypes.string.isRequired,
  images: React.PropTypes.arrayOf(React.PropTypes.shape).isRequired,
};

export default WorkSlide;
