import { Box, Text, ThemeContext } from 'paramount-ui';
import React from 'react';

export const FindMetamaskInstructions = (): JSX.Element => {
  const theme = React.useContext(ThemeContext);

  return (
    <Box
      marginTop={32}
      padding={32}
      backgroundColor={theme.colors.background.greyLight}
      shape="rounded"
      borderColor={theme.colors.border.default}
      borderWidth={1}
    >
      <Text>
        <Text weight="bold">Tip: </Text>
        {`If you can't find the MetaMask window,
        try clicking on its icon in your browser.`}
      </Text>
      <Box paddingTop={32} alignItems="center">
        <img
          alt="metamask prompt"
          src="/metamask-prompt.png"
          style={{ width: 200 }}
        />
      </Box>
    </Box>
  );
};
