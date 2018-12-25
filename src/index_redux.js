import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './App';
import reducers from './store/reducers';

const createStorewithMiddleware = applyMiddleware()(createStore);

render(
    <Provider store={createStorewithMiddleware(reducers)}>
        <AppContainer>
            <App />
        </AppContainer>
    </Provider>, document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./App', () => {
        render(
            <Provider store={createStorewithMiddleware(reducers)}>
                <AppContainer>
                    <App />
                </AppContainer>
            </Provider>, document.getElementById('app')
        );
    });
}
