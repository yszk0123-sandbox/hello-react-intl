import * as React from 'react';
import { render } from 'react-dom';
import { IntlProvider } from 'react-intl';
import App from './components/App';
import configureI18next from './configureI18next';
import { I18nProvider } from 'lingui-react';

configureI18next();

render(
  <I18nProvider>
    <IntlProvider locale="en">
      <App />
    </IntlProvider>
  </I18nProvider>,
  document.getElementById('app'),
);
