"use client";

import { CldImage } from "next-cloudinary";

type CloudinaryImageProps = {
  publicId: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  gravity?: string;
};

export const CloudinaryImage = ({
  publicId,
  alt,
  width = 1200,
  height = 800,
  className,
  priority = false,
  gravity = "auto",
}: CloudinaryImageProps) => {
  return (
    <CldImage
      src={publicId}
      alt={alt}
      width={width}
      height={height}
      crop="fill"
      quality="auto"
      format="auto"
      preload={priority}
      className={className}
      gravity={gravity}
    />
  );
};
