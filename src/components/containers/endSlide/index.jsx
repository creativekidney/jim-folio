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
            free to get in touch<br />
            made by blah™<br />
            +44 7855 427 917
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
