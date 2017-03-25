import React from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import _debounce from 'lodash/debounce';
import { Link, animateScroll } from 'react-scroll';
import styles from './scroller.scss';
import { updateCurrentSlide } from '../../../actions/work';

class Scroller extends React.Component {
  static getCurSlide() {
    const doc = document.documentElement;
    const scrollTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

    return Math.round(scrollTop / window.innerHeight);
  }

  static keydownHandler(e) {
    if (e.keyCode !== 38 && e.keyCode !== 40) { return; }
    e.preventDefault();
  }

  componentDidMount() {
    window.addEventListener('scroll', _debounce(() => this.scrollHandler(), 200), false);
    window.addEventListener('keyup', _debounce(e => this.keyupHandler(e), 100), false);
    window.addEventListener('keydown', this.constructor.keydownHandler, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', _debounce(() => this.scrollHandler(), 200), false);
    window.removeEventListener('keyup', _debounce(e => this.keyupHandler(e), 100), false);
    window.removeEventListener('keydown', this.constructor.keydownHandler, false);
  }

  scrollHandler() {
    this.gotoSlide(this.constructor.getCurSlide());
  }

  keyupHandler(e) {
    const { items } = this.props;
    if (e.keyCode !== 38 && e.keyCode !== 40) { return; }
    e.preventDefault();

    const modifier = e.keyCode === 38 ? -1 : 1;
    const nextSlide = (this.constructor.getCurSlide() + modifier) % (items.size + 2);
    this.gotoSlide(nextSlide);
  }

  gotoSlide(slide) {
    const { dispatch } = this.props;
    animateScroll.scrollTo(slide * window.innerHeight, { duration: 300 });
    dispatch(updateCurrentSlide(slide));
    console.log('go to slide', slide);
  }

  render() {
    const { children, items } = this.props;
    const opts = {
      duration: 1000,
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
