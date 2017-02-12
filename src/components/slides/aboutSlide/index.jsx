import React from 'react';
import './aboutSlide.scss';
import Slide from '../slide';
import data from '../../../data/projects.json';

class AboutSlide extends React.Component {
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
        <div>
          <p>
            Hi, my name is Jim Townsend.<br />
            Congratulations on finding my<br />
            online portfolio.
          </p>
          <p>
            I’m a designer/art director currently<br />
            working at BBH London and also one<br />
            half of creative duo made by blah™
          </p>
          <p>
            Please feel free to get in touch<br />
            +44 7855 427 917
          </p>
        </div>
      </Slide>
    );
  }
}

AboutSlide.propTypes = {};

export default AboutSlide;
