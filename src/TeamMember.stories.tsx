import { storiesOf } from '@storybook/react';
import React from 'react';

import { TeamMember } from './TeamMember';

storiesOf('TeamMember', module).add('Default', () => (
  <TeamMember
    avatarUrl="https://picsum.photos/200/200"
    fullName="Full Name"
    linkedInUrl="https://www.linkedin.com/in/abc/"
    twitterUrl="https://twitter.com/abc"
    bio="Bio put whatever you want here"
  />
));
