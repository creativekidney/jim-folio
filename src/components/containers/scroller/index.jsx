import React from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import Scroll, { Link, animateScroll } from 'react-scroll';
import styles from './scroller.scss';
import _debounce from 'lodash/debounce';

class Scroller extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', _debounce(this.scrollHandler, 200));
  }

  componentWillUnmount() {}

  scrollHandler(e) {
    const doc = document.documentElement;
    const scrollTop = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    const curSlide = Math.round(scrollTop / window.innerHeight)
    
    animateScroll.scrollTo(curSlide * window.innerHeight, {duration: 300})
  }

  render () {
    const { children, items } = this.props;

    const opts = {
      duration: 1000,
      smooth: true,
      spy: true
    }

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
                to={"slide" + (key + 1)}
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
            to={"slide" + (items.size + 1)}
            spy={opts.spy}
            smooth={opts.smooth} 
            duration={opts.duration}
          />
        </div>
      </div>
    )
  }
};

Scroller.propTypes = {
  children: React.PropTypes.node.isRequired,
  items: React.PropTypes.instanceOf(List).isRequired,
};

const mapStateToProps = state => ({
  items: state.work.items,
});

export default connect(
  mapStateToProps,
)(Scroller);
