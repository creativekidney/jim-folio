import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Work from './components/containers/work';
import AboutSlide from './components/containers/aboutSlide';
import EndSlide from './components/containers/endSlide';
import Scroller from './components/containers/scroller';
import store from './store/store';
// import data from './data/projects.json';
import './app.scss';

function App() {
  return (
    <Provider store={store}>
      <Scroller>
        <AboutSlide />
        <Work />
        <EndSlide />
      </Scroller>
    </Provider>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
