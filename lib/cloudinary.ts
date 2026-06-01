export type CloudinaryImageOptions = {
  publicId: string;
  width?: number;
  height?: number;
  crop?: "fill" | "fit" | "limit";
};

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

export const getCloudinaryUrl = ({
  publicId,
  width = 1200,
  height,
  crop = "fill",
}: CloudinaryImageOptions) => {
  if (!cloudName) {
    return "/images/placeholder.svg";
  }

  const transforms = ["f_auto", "q_auto", `c_${crop}`, `w_${width}`];

  if (height) {
    transforms.push(`h_${height}`);
  }

  return `https://res.cloudinary.com/${cloudName}/image/upload/${transforms.join(",")}/${publicId}`;
};
