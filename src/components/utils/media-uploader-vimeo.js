import axios from 'axios';
import * as tus from 'tus-js-client';

export class MediaUploaderVimeo {

  async upload(file, onProgress) {
    const presignedLinkResponse = await axios.post('/api/vimeo', {
      size: file.size,
    });

    const uploadURI = presignedLinkResponse.data.upload.upload_link;
    const vimeoVideoLink = presignedLinkResponse.data.uri;
    const vimeoId = vimeoVideoLink.split('/').slice(-1)[0];

    return new Promise((resolve, reject) => {
      const uploader = new tus.Upload(file, {
        uploadUrl: uploadURI,
        endpoint: uploadURI,
        onError: (error) => {
          reject(error);
        },
        onProgress: (bytesUploaded, bytesTotal) => {
          onProgress?.(bytesUploaded, bytesTotal);
        },
        onSuccess: () => {
          resolve({
            provider: "Vimeo",
            id: vimeoId,
          });
        },
      });
      uploader.start();
    });
  }
}

// module.exports = MediaUploaderVimeo;
