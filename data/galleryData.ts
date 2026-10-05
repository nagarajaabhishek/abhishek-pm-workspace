export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  description: string;
  aspectRatio: "square" | "video" | "portrait" | "landscape";
}

export const galleryData: GalleryImage[] = [
  {
    id: "1",
    url: "/images/gallery/MavMarket_Fall2024_CETD-137.jpg",
    title: "MavMarket 2024",
    description: "Fall 2024 event at CETD.",
    aspectRatio: "landscape",
  },
  {
    id: "2",
    url: "/images/gallery/MavMarket_Fall2024_CETD-201.jpg",
    title: "Community Engagement",
    description: "Fall 2024 community event.",
    aspectRatio: "landscape",
  },
  {
    id: "3",
    url: "/images/gallery/e-DAM_FounderPhoto.JPG",
    title: "Founder Photo",
    description: "e-DAM founder collaboration session.",
    aspectRatio: "portrait",
  },
  {
    id: "4",
    url: "/images/gallery/IMG_3031.JPG",
    title: "Personal Photo",
    description: "Moment from recent event.",
    aspectRatio: "square",
  }
];
