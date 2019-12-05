import { storiesOf } from '@storybook/react';
import React from 'react';
import { Button } from 'paramount-ui';

import { ImageUpload } from './ImageUpload';

const Example = () => {
  const [url, setUrl] = React.useState<string | null>(null);

  return (
    <ImageUpload onUpload={setUrl}>
      {url ? (
        <img src={url} />
      ) : (
        <Button isDisabled title="Click to upload image" />
      )}
    </ImageUpload>
  );
};

storiesOf('Alert', module).add('Intents', () => <Example />);
