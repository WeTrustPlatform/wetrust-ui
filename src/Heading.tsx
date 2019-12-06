import React from 'react';
import { Heading as OriginalHeading, HeadingProps } from 'paramount-ui';

export const Heading = (props: HeadingProps) => (
  <OriginalHeading color="dark" {...props} />
);
