import React from 'react';
import { connect } from 'react-redux';
import { Map, List } from 'immutable';
import './endSlide.scss';
import Slide from '../../presentational/slide';

class EndSlide extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    const { about, items } = this.props;

    return (
      <Slide
        pos={items.size + 1}
        h1={about.get('name', '')}
        h2={about.get('jobTitle', '')}
        instagram
        color={about.get('color', '#fff')}
        backgroundColor={about.get('backgroundColor', '#fff')}
      >
        <div>
          <p>
            Well done,<br />
            you made it.
          </p>
          <p>
            Please feel<br />
            free to <a href="mailto:Jimtownsend74@gmail.com" target="_blank" rel="noopener noreferrer">get in touch</a><br />
            <a href="http://www.madebyblah.com" target="_blank" rel="noopener noreferrer">made by blah</a>&#8482;<br />
            <a href="tel:+447855427917">+44 7855 427 917</a>
          </p>
        </div>
      </Slide>
    );
  }
}

const mapStateToProps = state => ({
  about: state.work.about,
  items: state.work.items,
});

export default connect(
  mapStateToProps,
)(EndSlide);

EndSlide.propTypes = {
  about: React.PropTypes.instanceOf(Map).isRequired,
  items: React.PropTypes.instanceOf(List).isRequired,
};
