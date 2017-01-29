import React from 'react';
import styles from './slide.scss';

class Slide extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <div
        className={styles.slide}
        style={{
          backgroundColor: this.props.backgroundColor,
          color: this.props.color,
        }}
      >
        <h1 className={styles.h1}>{this.props.h1}</h1>
        <h2 className={styles.h2}>{this.props.h2}</h2>
        {this.props.children}
        {/* <div className={styles.carousel}>
          <WorkCarousel images={this.props.images} />
        </div> */}
      </div>
    );
  }
}

Slide.propTypes = {
  h1: React.PropTypes.string.isRequired,
  h2: React.PropTypes.string.isRequired,
  color: React.PropTypes.string.isRequired,
  backgroundColor: React.PropTypes.string.isRequired,
  children: React.PropTypes.element.isRequired,
};

export default Slide;
