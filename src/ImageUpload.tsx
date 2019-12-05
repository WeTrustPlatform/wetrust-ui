import React from 'react';

import { ImagePicker, FormDataFile } from './ImagePicker';

const cloudName = 'wetrust-cryptounlocked';
const unsignedUploadPreset = 'hmoekb4h';

export const useUploadImageMutation = () => {
  return React.useCallback(
    (file: FormDataFile): Promise<string> =>
      new Promise(resolve => {
        const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
        const xhr = new XMLHttpRequest();
        const formData = new FormData();

        xhr.open('POST', url, true);
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            const url = response.secure_url;

            resolve(url);
          }
        };

        formData.append('upload_preset', unsignedUploadPreset);
        formData.append('tags', 'browser_upload'); // Optional - add tag for image admin in Cloudinary
        formData.append('file', file);
        xhr.send(formData);
      }),
    [],
  );
};

export interface ImageUploadProps {
  onUpload?(url: string): void;

  children?: React.ReactNode;
}

export const ImageUpload = (props: ImageUploadProps): JSX.Element => {
  const {
    children,
    onUpload = () => {
      return;
    },
  } = props;
  const uploadImage = useUploadImageMutation();

  const handleSelect = React.useCallback(
    async (file: FormDataFile) => {
      const url = await uploadImage(file);

      onUpload(url);
    },
    [onUpload, uploadImage],
  );

  return <ImagePicker onSelect={handleSelect}>{children}</ImagePicker>;
};
