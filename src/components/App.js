import * as React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';

const messages = defineMessages({
  greeting: {
    id: 'App.greeting',
    defaultMessage: 'Hello, {name}!',
    description: 'Greeting to welcome the user to the app',
  },
});

export default function App() {
  return (
    <div>
      <FormattedMessage {...messages.greeting} values={{ name: 'world' }} />
    </div>
  );
}
