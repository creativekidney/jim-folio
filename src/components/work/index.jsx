import React from 'react';
// import styles from './work.scss';
import WorkSlide from '../workSlide';
import data from '../../data/projects.json';

class Work extends React.Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const workSlides = data.work.map(piece =>
      (
        <WorkSlide
          key={piece.id}
          color={piece.color}
          backgroundColor={piece.backgroundColor}
          client={piece.client}
          title={piece.title}
          images={piece.images}
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

export default Work;
