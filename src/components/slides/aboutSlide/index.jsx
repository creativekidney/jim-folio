import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import './aboutSlide.scss';
import Slide from '../slide';

class AboutSlide extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    const { about } = this.props;

    return (
      <Slide
        h1={about.get('name', '')}
        h2={about.get('jobTitle', '')}
        color={about.get('color', '#fff')}
        backgroundColor={about.get('backgroundColor', '#fff')}
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

const mapStateToProps = state => ({
  about: state.work.about,
});

export default connect(
  mapStateToProps,
)(AboutSlide);

AboutSlide.propTypes = {
  about: React.PropTypes.instanceOf(Map).isRequired,
};
