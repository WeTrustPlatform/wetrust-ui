import { storiesOf } from '@storybook/react';
import React from 'react';

import { NavigationBar } from './NavigationBar';

storiesOf('NavigationBar', module).add('Default', () => (
  <NavigationBar
    desktopLogoSrc="https://res.cloudinary.com/wetrust-cryptounlocked/image/upload/v1573701464/wetrust-identity-desktop-logo.svg"
    mobileLogoSrc="https://res.cloudinary.com/wetrust-cryptounlocked/image/upload/v1573701366/wetrust-identity-mobile-logo.svg"
    links={[
      { to: '/', title: 'Home' },
      { to: '/ask-question', title: 'Ask a question' },
      {
        to: 'https://blog.wetrust.io/how-trusted-oracle-works-621546b587ad',
        title: 'How it works',
        isExternal: true,
      },
      {
        to:
          'https://blog.wetrust.io/how-to-use-uniswap-to-get-trustcoins-trst-93c639f4078e',
        title: 'Get TRST',
        isExternal: true,
      },
      {
        to: 'https://blog.wetrust.io/',
        title: 'Our Blog',
        isExternal: true,
      },
    ]}
  />
));
