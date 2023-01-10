import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import createStoreInstance from './store';

const store = createStoreInstance(window?.__PRELOAD_STATE__);


// 注水，让前端接管服务端返回的 SSR 页面
ReactDOM.hydrateRoot(
    document.querySelector('#root'),
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>
)