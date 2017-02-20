import React from 'react';

class LazyLoadChildren extends React.Component {
  static getElementOffset(el) {
    return el.getBoundingClientRect();
  }

  static getElementSize(el) {
    return { width: el.offsetWidth, height: el.offsetHeight };
  }

  constructor(props) {
    super(props);

    this.state = {
      renderChildren: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', (e) => { this.handleScroll(e); });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', (e) => { this.handleScroll(e); });
  }

  setIsVisible() {
    const offsetTop = this.constructor.getElementOffset(this.el).top;
    const height = this.constructor.getElementSize(this.el).height;

    const topIsVisible = offsetTop < window.innerHeight;
    const bottomIsVisible = offsetTop + height > 0;

    console.log('topIsVisible', topIsVisible, 'bottomIsVisible', bottomIsVisible);

    this.setState({ renderChildren: topIsVisible && bottomIsVisible });
  }

  handleScroll() {
    this.setIsVisible();
  }

  render() {
    const { children } = this.props;

    // we shouldn't render the children, return an empty div
    // if (!this.state.renderChildren) {
    if (false) {
      return (
        <div ref={(el) => { this.el = el; }} />
      );
    }

    // we should render the children, return the children
    return (
      <div ref={(el) => { this.el = el; }}>
        { children }
      </div>
    );
  }
}

LazyLoadChildren.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default LazyLoadChildren;
