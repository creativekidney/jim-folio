import React from 'react';
// import styles from './work.scss';
import WorkSlide from '../slides/workSlide';
import data from '../../data/projects.json';

class Work extends React.Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const workSlides = data.work.map((work, index) =>
      (
        <WorkSlide
          key={work.id}
          index={index}
          color={work.color}
          backgroundColor={work.backgroundColor}
          client={work.client}
          title={work.title}
          images={work.images}
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
