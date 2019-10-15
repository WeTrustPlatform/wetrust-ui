import { Box, Dialog, Icon, DialogProps } from 'paramount-ui';
import React from 'react';
import { TouchableOpacity } from 'react-native';

export const CustomDialog = (props: DialogProps): JSX.Element => {
  const { children, onRequestClose } = props;

  return (
    <Dialog isVisible onRequestClose={onRequestClose}>
      <Box marginTop={-60} alignItems="flex-end">
        <TouchableOpacity onPress={onRequestClose}>
          <Icon name="x" size={60} color="#fff" />
        </TouchableOpacity>
      </Box>
      {children}
    </Dialog>
  );
};
