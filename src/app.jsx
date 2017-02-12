import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import Work from './components/work';
import AboutSlide from './components/slides/aboutSlide';
import EndSlide from './components/slides/endSlide';
import store from './store/store';
import data from './data/projects.json';
import { addWorkItems } from './actions/work';
import './app.scss';

function App() {
  return (
    <Provider store={store}>
      <div>
        <AboutSlide />
        <Work />
        <EndSlide />
      </div>
    </Provider>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

store.dispatch(addWorkItems(fromJS(data.work)));
