import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './App';
import reducers from './store/reducers';

const createStorewithMiddleware = applyMiddleware()(createStore);

render(
    <Provider store={createStorewithMiddleware(reducers)}>
        <App />
    </Provider>, document.getElementById('app')
);
