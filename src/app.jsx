import React from 'react';
import ReactDOM from 'react-dom';

import Work from './components/work';
// import styles from './app.scss';

function App() {
  return (
    <div>
      <Work client="The Guardian" title="Maggiemite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
