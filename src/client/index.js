'use strict';

/** NODE MODULES */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'; //---> Note that AppContainer must only wrap a single React Component

/** LOCAL MODULES */
import App from './components/App';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app'),
  );
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
module.hot.accept('./components/App', () => { render(App) })
}
