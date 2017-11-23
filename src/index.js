import * as React from 'react';
import { render } from 'react-dom';
import { IntlProvider } from 'react-intl';
import App from './components/App';
import configureI18next from './configureI18next';
import { I18nProvider } from 'lingui-react';
import Polyglot from 'node-polyglot';

configureI18next();
const polyglot = new Polyglot();
console.log(polyglot.t('a'));

render(
  <I18nProvider>
    <IntlProvider locale="en">
      <App />
    </IntlProvider>
  </I18nProvider>,
  document.getElementById('app'),
);
