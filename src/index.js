import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './containers/app/App';
import * as serviceWorker from './serviceWorker';

// const myElement = <div>Hola</div>;

const store = document.getElementById('root');
ReactDOM.render(
    <App />
, store);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
