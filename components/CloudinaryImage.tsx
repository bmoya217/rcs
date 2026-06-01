import Image from "next/image";
import { getCloudinaryUrl } from "@/lib/cloudinary";

type CloudinaryImageProps = {
  publicId: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
};

export const CloudinaryImage = ({
  publicId,
  alt,
  width = 1200,
  height = 800,
  className,
  priority = false,
}: CloudinaryImageProps) => {
  return (
    <Image
      src={getCloudinaryUrl({ publicId, width, height })}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
    />
  );
};
