import React from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import styles from './scrollContainer.scss';

const ScrollContainer = function ScrollContainer(props) {
  const { children, items } = props;

  return (
    <div>
      {children}
      <div className={styles.nav}>
        <div key={0} className={styles.pageDot} />
        {items.map(item => (
          <div key={item.get('id') + 1} className={styles.pageDot} />
        ))}
        <div key={items.size + 2} className={styles.pageDot} />
      </div>
    </div>
  );
};

ScrollContainer.propTypes = {
  children: React.PropTypes.node.isRequired,
  items: React.PropTypes.instanceOf(List).isRequired,
};

const mapStateToProps = state => ({
  items: state.work.items,
});

export default connect(
  mapStateToProps,
)(ScrollContainer);
