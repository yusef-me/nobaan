import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from "./layout/Layout";
import swDev from "./swDev";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Layout/>
    </React.StrictMode>
);

swDev();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.register();