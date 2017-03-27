import React from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import WorkSlide from '../../presentational/workSlide';

const Work = function Work(props) {
  const { items, curSlide } = props;

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
};

const mapStateToProps = state => ({
  items: state.work.items,
  curSlide: state.work.curSlide,
});

export default connect(
  mapStateToProps,
)(Work);

Work.propTypes = {
  items: React.PropTypes.instanceOf(List).isRequired,
  curSlide: React.PropTypes.number.isRequired,
};
