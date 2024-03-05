import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import ReactGA from 'react-ga4';
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById('root'));
ReactGA.initialize('G-V6EXKBL0XP');
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
ReactGA.pageview(window.location.pathname + window.location.search);

const SendAnalytics = () => {
    ReactGA.send({
        hitType: 'pageview',
        page: window.location.pathname,
    });
};
reportWebVitals(SendAnalytics);
