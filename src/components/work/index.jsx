import React from 'react';
// import styles from './work.scss';

class Work extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      client: props.client,
      title: props.title,
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {}

  clickHandler() {
    this.setState({
      client: 'a different client',
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.client}</h1>
        <h2>{this.state.title}</h2>
        <button onClick={() => this.clickHandler()}>Click me!</button>
      </div>
    );
  }
}

Work.propTypes = {
  client: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
};

export default Work;
