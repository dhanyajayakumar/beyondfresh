import React, { useState } from "react";

interface ImageComponentProps {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
}
const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  alt = "Image",
  className = "",
  width = "",
  height = "",
}) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const isAbsoluteUrl =
    src?.startsWith("http://") || src?.startsWith("https://");
  const finalSrc = isAbsoluteUrl ? src : `${baseUrl}${src}`;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={finalSrc}
      alt={alt}
      className={className}
      crossOrigin="anonymous"
      width={width}
      height={height}
    />
  );
};

export default ImageComponent;
