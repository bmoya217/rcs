import "server-only";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export type CarouselImage = {
  publicId: string;
  width: number;
  height: number;
};

export const getCarouselImages = async (
  folder: string,
  maxResults = 12,
): Promise<CarouselImage[]> => {
  const result = await cloudinary.search
    .expression(`folder:${folder}`)
    .sort_by("created_at", "desc")
    .max_results(maxResults)
    .execute();

  return result.resources.map((image: any) => ({
    publicId: image.public_id,
    width: image.width,
    height: image.height,
  }));
};
