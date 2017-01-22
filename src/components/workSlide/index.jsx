import React from 'react';
import styles from './workSlide.scss';
import WorkCarousel from '../workCarousel';

class WorkSlide extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <div
        className={styles.work}
        style={{
          backgroundColor: this.props.backgroundColor,
          color: this.props.color,
        }}
      >
        <h1>{this.props.client}</h1>
        <h2>{this.props.title}</h2>
        <div className={styles.carousel}>
          <WorkCarousel images={this.props.images} />
        </div>
      </div>
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
