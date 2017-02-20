import React from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import Scroll from 'react-scroll';
import styles from './scroller.scss';

const Scroller = function Scroller(props) {
  const { children, items } = props;

  const scroll = Scroll.animateScroll;

  const clickHandler = (key) => {
    scroll.scrollTo(key * window.innerHeight);
  };

  return (
    <div>
      {children}
      <div className={styles.nav}>
        <button
          key={0}
          className={styles.pageDot}
          onClick={() => clickHandler(0)}
        />
        {items.map((item, key) => {
          const id = item.get('id') + 1;

          return (
            <button
              key={id}
              className={styles.pageDot}
              onClick={() => clickHandler(key + 1)}
            />
          );
        })}
        <button
          key={items.size + 2}
          className={styles.pageDot}
          onClick={() => clickHandler(items.size + 1)}
        />
      </div>
    </div>
  );
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
