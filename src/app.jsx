import React from 'react';
import ReactDOM from 'react-dom';
import Work from './components/work';
import AboutSlide from './components/slides/aboutSlide';
import EndSlide from './components/slides/endSlide';
import './app.scss';

function App() {
  return (
    <div>
      <AboutSlide />
      <Work />
      <EndSlide />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
