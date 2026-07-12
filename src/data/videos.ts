export type StockVideo = {
  id?: number;
  src: string;
  label: string;
  attribution: string;
};

function pexelsHd(id: number) {
  return `https://videos.pexels.com/video-files/${id}/${id}-hd_1920_1080_25fps.mp4`;
}

export const STOCK_VIDEOS = {
  hero: {
    id: 3195394,
    src: pexelsHd(3195394),
    label: "Business planning on laptop",
    attribution: "Video by Pexels",
  },
  about: {
    src: "/videos/about.mp4",
    label: "Team collaboration",
    attribution: "Buzprout",
  },
  work: {
    src: "/videos/work.mp4",
    label: "Creative workspace",
    attribution: "Buzprout",
  },
  outcomes: {
    id: 3129957,
    src: pexelsHd(3129957),
    label: "Office workflow",
    attribution: "Video by Pexels",
  },
  contact: {
    id: 3255275,
    src: pexelsHd(3255275),
    label: "Business conversation",
    attribution: "Video by Pexels",
  },
} as const;
