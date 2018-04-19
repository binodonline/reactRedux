import React from 'react';
import ReactDOM from 'react-dom';
import WrapperComponent from './components/WrapperComponent';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <WrapperComponent />
    </Provider>,
    document.getElementById('app'));

