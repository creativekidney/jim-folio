import React from 'react';
import styles from './endSlide.scss';
import Slide from '../slide';
import data from '../../data/projects.json';

class EndSlide extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    const { name, jobTitle, color, backgroundColor } = data.about;

    return (
      <Slide
        h1={name}
        h2={jobTitle}
        color={color}
        backgroundColor={backgroundColor}
      >
        <p>
          Well done,<br />
          you made it.
        </p>
        <p>
          Please feel<br />
          free to get in touch<br />
          made by blah™<br />
          +44 7855 427 917
        </p>
      </Slide>
    );
  }
}

EndSlide.propTypes = {};

export default EndSlide;
