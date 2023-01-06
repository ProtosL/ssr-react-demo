import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

// 注水，让前端接管服务端返回的 SSR 页面
ReactDOM.hydrateRoot(
    document.querySelector('#root'),
    <BrowserRouter><Routes /></BrowserRouter>
)