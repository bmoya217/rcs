export type GalleryItem = {
  id: string;
  title: string;
  service: string;
  beforePublicId: string;
  afterPublicId: string;
};

// For MVP: manually list the best jobs after your dad uploads them to Cloudinary.
// Suggested Cloudinary folder: /gallery/before-after
// Later you can replace this with Admin API listing by folder/tag.
export const featuredGallery: GalleryItem[] = [
  {
    id: "living-room-traffic-lanes",
    title: "Living Room Traffic Lanes",
    service: "Carpet Cleaning",
    beforePublicId: "gallery/carpet_before",
    afterPublicId: "gallery/carpet_after",
  },
  {
    id: "tile-grout-refresh",
    title: "Kitchen Tile & Grout Refresh",
    service: "Tile Cleaning",
    beforePublicId: "gallery/tile_before",
    afterPublicId: "gallery/tile_after",
  },
  {
    id: "sofa-upholstery-cleaning",
    title: "Upholstery Cleaning",
    service: "Upholstery Cleaning",
    beforePublicId: "gallery/stretch_before",
    afterPublicId: "gallery/stretch_after",
  },
];
