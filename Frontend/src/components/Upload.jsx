import React from 'react'
import { useRef } from 'react';
import { IKContext, IKUpload } from "imagekitio-react";
import { apiRequest } from '../utilities/apiRequest';

const Upload = ({children, setData, setProgress, type}) => {
    const authenticator = async () => {
        try {
            const response = await apiRequest.get("/posts/auth-upload");
            const { signature, expire, token, publicKey } = response.data;
            return { signature, expire, token, publicKey };
        } catch (error) {
            console.error("Authentication error:", error);
            throw new Error("Authentication request failed");
        }
    };

    const ref = useRef(null);

    const onError = (err) => {
        console.log(err);
    };
    const onSuccess = (res) => {
        setData(res);
    };
    const onUploadProgress = (progress) => {
        setProgress(Math.round((progress.loaded / progress.total) * 100));
    };
  return (
     <IKContext
      publicKey={import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY}
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      authenticator={authenticator}
    >
      <IKUpload
        useUniqueFileName
        folder='/PlainType'
        onError={onError}
        onSuccess={onSuccess}
        onUploadProgress={onUploadProgress}
        className="hidden"
        ref={ref}
        accept={`${type}/*`}
      />
      <div className="cursor-pointer" onClick={() => ref.current.click()}>
        {children}
      </div>
    </IKContext>
  )
}

export default Upload