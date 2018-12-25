import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducers from './state/rootReducer';

const createStorewithMiddleware = applyMiddleware()(createStore);

render(
    <Provider store={createStorewithMiddleware(reducers)}>
        <AppContainer>
            <App />
        </AppContainer>
    </Provider>, document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        render(
            <Provider store={createStorewithMiddleware(reducers)}>
                <AppContainer>
                    <App />
                </AppContainer>
            </Provider>, document.getElementById('app')
        );
    });
}
