import * as React from 'react';
import { render } from 'react-dom';
import { IntlProvider } from 'react-intl';
import App from './components/App';
import configureI18next from './configureI18next';

configureI18next();

render(
  <IntlProvider locale="en">
    <App />
  </IntlProvider>,
  document.getElementById('app'),
);
