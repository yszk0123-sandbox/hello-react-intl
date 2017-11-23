import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';

export default function configureI18next() {
  i18n.use(reactI18nextModule).init({
    fallbackLng: 'en',

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    react: {
      wait: true,
    },
  });

  return i18n;
}
