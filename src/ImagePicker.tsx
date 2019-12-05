import React from 'react';
import { TouchableOpacity } from 'react-native';

export type FormDataFile = any;

export interface ImagePickerProps {
  onSelect?(value: FormDataFile): void;

  children?: React.ReactNode;
}

export const ImagePicker = (props: ImagePickerProps): JSX.Element => {
  const {
    children,
    onSelect = () => {
      return;
    },
  } = props;

  const handleOnChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.currentTarget.files;

      if (files && files.length > 0) {
        onSelect(files.item(0));
      }
    },
    [onSelect],
  );

  return (
    <TouchableOpacity>
      {children}
      <input
        accept="image/png, image/jpg, image/jpeg"
        type="file"
        onChange={handleOnChange}
        multiple
        style={{
          bottom: 0,
          height: '100%',
          left: 0,
          opacity: 0,
          position: 'absolute',
          right: 0,
          top: 0,
          width: '100%',
          zIndex: 1,
        }}
      />
    </TouchableOpacity>
  );
};
