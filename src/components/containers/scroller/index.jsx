import React from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import _debounce from 'lodash/debounce';
import { Link, animateScroll } from 'react-scroll';
import styles from './scroller.scss';
import { updateCurrentSlide } from '../../../actions/work';

class Scroller extends React.Component {
  static keydownHandler(e) {
    if (e.keyCode !== 38 && e.keyCode !== 40) { return; }
    e.preventDefault();
  }

  constructor(props) {
    super(props);
    this.updateCurrentSlide = _debounce(this.updateCurrentSlide, 400);
    this.scrollHandler = _debounce(this.scrollHandler, 300);
    this.keyupHandler = _debounce(this.keyupHandler, 100);
  }

  componentDidMount() {
    window.addEventListener('scroll', () => this.scrollHandler(), false);
    window.addEventListener('keyup', e => this.keyupHandler(e), false);
    window.addEventListener('keydown', this.constructor.keydownHandler, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
    window.removeEventListener('keyup');
    window.removeEventListener('keydown');
  }

  getWindowHeight() {
    const { items } = this.props;
    const windowHeight = document.documentElement.scrollHeight / (items.size + 2);
    return windowHeight;
  }

  getCurSlide() {
    const doc = document.documentElement;
    const scrollTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

    return Math.round(scrollTop / this.getWindowHeight());
  }

  keyupHandler(e) {
    const { items } = this.props;
    if (e.keyCode !== 38 && e.keyCode !== 40) { return; }
    e.preventDefault();

    const modifier = e.keyCode === 38 ? -1 : 1;
    const nextSlide = (this.getCurSlide() + modifier) % (items.size + 2);
    this.gotoSlide(nextSlide);
  }

  scrollHandler() {
    this.gotoSlide(this.getCurSlide());
  }

  gotoSlide(slide) {
    animateScroll.scrollTo(slide * this.getWindowHeight(), { duration: 150 });
    this.updateCurrentSlide(slide);
  }

  updateCurrentSlide(slide) {
    const { dispatch } = this.props;
    dispatch(updateCurrentSlide(slide));
  }

  render() {
    const { children, items } = this.props;
    const opts = {
      duration: 500,
      smooth: true,
      spy: true,
    };

    return (
      <div>
        {children}
        <div className={styles.nav}>
          <Link
            key={0}
            className={styles.pageDot}
            activeClass={styles.pageDotActive}
            to="slide0"
            spy={opts.spy}
            smooth={opts.smooth}
            duration={opts.duration}
          />
          {items.map((item, key) => {
            const id = item.get('id') + 1;
            return (
              <Link
                key={id}
                className={styles.pageDot}
                activeClass={styles.pageDotActive}
                to={`slide${(key + 1)}`}
                spy={opts.spy}
                smooth={opts.smooth}
                duration={opts.duration}
              />
            );
          })}
          <Link
            key={items.size + 2}
            className={styles.pageDot}
            activeClass={styles.pageDotActive}
            to={`slide${(items.size + 1)}`}
            spy={opts.spy}
            smooth={opts.smooth}
            duration={opts.duration}
          />
        </div>
      </div>
    );
  }
}

Scroller.propTypes = {
  children: React.PropTypes.node.isRequired,
  items: React.PropTypes.instanceOf(List).isRequired,
  dispatch: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: state.work.items,
});

export default connect(
  mapStateToProps,
)(Scroller);
