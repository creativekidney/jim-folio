import React from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import WorkSlide from '../../presentational/workSlide';
import { fetchWorkData } from '../../../actions/work';
import { getWorkItems } from '../../../reducers/work';
import { getCurrentSlide } from '../../../reducers/app';

class Work extends React.Component {
  componentDidMount() {
    const { fetchWork } = this.props;
    fetchWork();
  }

  render() {
    const { items, curSlide } = this.props;

    const workSlides = items.map((work, key) =>
      (
        <WorkSlide
          active={curSlide === key + 1}
          pos={key + 1}
          key={work.get('id')}
          color={work.get('color')}
          backgroundColor={work.get('backgroundColor')}
          client={work.get('client')}
          title={work.get('title')}
          images={work.get('images')}
          copy={work.get('copy')}
        />
      ),
    );

    return (
      <div>
        {workSlides}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: getWorkItems(state.work),
  curSlide: getCurrentSlide(state.app),
});

const mapDispatchToProps = dispatch => ({
  fetchWork: dispatch(fetchWorkData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Work);

Work.propTypes = {
  items: React.PropTypes.instanceOf(List).isRequired,
  curSlide: React.PropTypes.number.isRequired,
  fetchWork: React.PropTypes.func,
};

Work.defaultProps = {
  fetchWork: () => {},
};
