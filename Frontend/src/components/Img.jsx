import { Image } from '@imagekit/react';

export default function Img({src,width,height,className,alt}) {
  return (
    <Image
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      src={src}
      height={height}
      width={width}
      folder="/PlainType"
      loading="lazy"
      alt={alt}
      className={className}
      transformation={
        [
          {
            width:width,
            height:height
          }
        ]
      }
    />
  )
}