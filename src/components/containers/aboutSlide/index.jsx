import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import './aboutSlide.scss';
import Slide from '../../presentational/slide';
import { fetchAboutData } from '../../../actions/about';
import { getAboutInfo } from '../../../reducers/about';

class AboutSlide extends React.Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    const { about } = this.props;

    return (
      <Slide
        pos={0}
        h1={about.get('name', '')}
        h2={about.get('jobTitle', '')}
        instagram
        color={about.get('color', '#fff')}
        backgroundColor={about.get('backgroundColor', '#fff')}
      >
        <div>
          <p>
            Hi, my name is Jim&nbsp;Townsend.<br />
            Congratulations on finding my
            online&nbsp;portfolio.
          </p>
          <p>
            I’m a designer/art director currently
            working at BBH London and also one
            half of creative duo <a href="http://www.madebyblah.com" target="_blank" rel="noopener noreferrer">made by blah</a>&#8482;
          </p>
          <p>
            Please feel free to <a href="mailto:Jimtownsend74@gmail.com" target="_blank" rel="noopener noreferrer">get in touch</a><br />
            <a href="tel:+447855427917">+44 7855 427 917</a>
          </p>
        </div>
      </Slide>
    );
  }
}

const mapStateToProps = state => ({
  about: getAboutInfo(state.about),
});

const mapDispatchToProps = dispatch => ({
  fetchData: dispatch(fetchAboutData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AboutSlide);

AboutSlide.propTypes = {
  about: React.PropTypes.instanceOf(Map).isRequired,
  fetchData: React.PropTypes.func,
};

AboutSlide.defaultProps = {
  fetchData: () => {},
};
