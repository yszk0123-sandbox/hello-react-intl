const manageTranslations = require('react-intl-translations-manager').default;

manageTranslations({
  messagesDirectory: 'build/locales/extractedMessages',
  translationsDirectory: 'build/locales/translations',
  languages: ['en', 'ja'],
});
