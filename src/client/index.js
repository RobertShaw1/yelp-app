'use strict';

/** NODE MODULES */
import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';

/** LOCAL MODULES */
import App from './components/App';

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
