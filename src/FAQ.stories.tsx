import { storiesOf } from '@storybook/react';
import React from 'react';

import { FAQ } from './FAQ';

storiesOf('FAQ', module).add('Default', () => (
  <FAQ
    faqs={[
      { title: 'Title 1', content: 'random text 1' },
      { title: 'Title 2', content: 'lorem ipsio' },
      { title: 'Title 3', content: 'lorem ipsium' },
    ]}
  />
));
