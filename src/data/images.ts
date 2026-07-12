function pexelsPhoto(id: number, w = 1200) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
}

export const STOCK_IMAGES = {
  team: {
    src: pexelsPhoto(3184465),
    alt: "Team collaborating in a modern office",
  },
  workspace: {
    src: pexelsPhoto(7688336),
    alt: "Professional working on a laptop",
  },
  planning: {
    src: pexelsPhoto(3861969),
    alt: "Business planning and strategy session",
  },
  consulting: {
    src: pexelsPhoto(6476589),
    alt: "Client consultation meeting",
  },
  learning: {
    src: pexelsPhoto(590022),
    alt: "Online learning and skill development",
  },
  caribbean: {
    src: pexelsPhoto(3184292, 1400),
    alt: "Caribbean business environment",
  },
} as const;
