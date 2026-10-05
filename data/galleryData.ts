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
  },
  {
    id: "5",
    url: "/images/gallery/IMG_1776.jpg",
    title: "Event Moment",
    description: "Captured during a speaking engagement.",
    aspectRatio: "landscape",
  },
  {
    id: "6",
    url: "/images/gallery/IMG_6766.jpg",
    title: "Team Photo",
    description: "Working with the team on a project.",
    aspectRatio: "landscape",
  },
  {
    id: "7",
    url: "/images/gallery/IMG_6883.JPG",
    title: "Conference",
    description: "At a tech conference event.",
    aspectRatio: "portrait",
  },
  {
    id: "8",
    url: "/images/gallery/6D63639F-5F26-4BC2-ADBE-137B2D4609C8.jpg",
    title: "Event Photo",
    description: "Moment from a recent gathering.",
    aspectRatio: "landscape",
  },
  {
    id: "9",
    url: "/images/gallery/9ca7cdc4-2ab5-4b28-ad2b-8eeb9d058b0a.jpg",
    title: "Workshop",
    description: "Leading a workshop session.",
    aspectRatio: "landscape",
  },
  {
    id: "10",
    url: "/images/gallery/d601d65f-4b55-4117-a0f0-ad56c7da754b.jpg",
    title: "Collaboration",
    description: "Working with collaborators.",
    aspectRatio: "landscape",
  },
  {
    id: "11",
    url: "/images/gallery/icon.jpg",
    title: "Personal",
    description: "Personal moment.",
    aspectRatio: "square",
  }
];
