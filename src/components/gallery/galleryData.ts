export interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  category: "weddings" | "celebrations" | "garden" | "pool";
  categoryLabel: string;
  aspectRatio: "portrait" | "landscape" | "square" | "banner";
  alt: string;
  caption: string;
  featured?: boolean;
}

export const galleryCategories = [
  { id: "all", label: "All Moments" },
  { id: "weddings", label: "Weddings" },
  { id: "celebrations", label: "Celebrations" },
  { id: "garden", label: "Garden & Venue" },
  { id: "pool", label: "Poolside" },
] as const;

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: "photo-1",
    src: "/images/wedding.webp",
    title: "Starlit Mandap & Wedding Banquet",
    category: "weddings",
    categoryLabel: "Weddings",
    aspectRatio: "banner",
    alt: "Starlit night wedding mandap decor and lawn seating setup",
    caption: "Open-Air Wedding Ceremony Lawn",
    featured: true,
  },
  {
    id: "photo-2",
    src: "/assets/gallery_jaipur.webp",
    title: "Royal Heritage Entrance Setup",
    category: "weddings",
    categoryLabel: "Weddings",
    aspectRatio: "portrait",
    alt: "Traditional Rajasthani wedding entrance with floral arches",
    caption: "Floral Archway & Grand Entrance",
  },
  {
    id: "photo-3",
    src: "/images/birthday.webp",
    title: "Festive Outdoor Birthday Bash",
    category: "celebrations",
    categoryLabel: "Celebrations",
    aspectRatio: "landscape",
    alt: "Vibrant outdoor birthday party setup with balloon decorations",
    caption: "Theme Birthday Party Setup",
  },
  {
    id: "photo-4",
    src: "/images/garden.webp",
    title: "Manicured Main Celebration Lawn",
    category: "garden",
    categoryLabel: "Garden & Venue",
    aspectRatio: "landscape",
    alt: "Overview of 12,000 sq. ft. manicured lawn surrounded by greenery",
    caption: "Lush 12,000 Sq. Ft. Lawn",
    featured: true,
  },
  {
    id: "photo-5",
    src: "/images/pool.webp",
    title: "Azure Swimming Pool & Sunbed Lounge",
    category: "pool",
    categoryLabel: "Poolside",
    aspectRatio: "portrait",
    alt: "Sparkling crystal private swimming pool with sunbed loungers",
    caption: "Filtered Private Swimming Pool",
  },
  {
    id: "photo-6",
    src: "/images/anniversary.webp",
    title: "Candlelit Milestone Anniversary Dinner",
    category: "celebrations",
    categoryLabel: "Celebrations",
    aspectRatio: "landscape",
    alt: "Intimate candlelit gazebo dinner setup for anniversary celebration",
    caption: "Candlelit Romantic Gazebo",
  },
  {
    id: "photo-7",
    src: "/assets/welcome_palace.webp",
    title: "Royal Heritage Stage Decor",
    category: "weddings",
    categoryLabel: "Weddings",
    aspectRatio: "landscape",
    alt: "Ornate gold and floral wedding stage setup for reception",
    caption: "Bespoke Stage Lighting",
  },
  {
    id: "photo-8",
    src: "/assets/gallery_udaipur.webp",
    title: "Evening Starlit Dining Gazebos",
    category: "garden",
    categoryLabel: "Garden & Venue",
    aspectRatio: "square",
    alt: "Illuminated dining gazebos scattered across lawn for evening events",
    caption: "Starlit Night Dining",
  },
  {
    id: "photo-9",
    src: "/assets/gallery_kerala.webp",
    title: "Poolside Sundowner Cocktail Bar",
    category: "pool",
    categoryLabel: "Poolside",
    aspectRatio: "portrait",
    alt: "Poolside cocktail lounge bar setup with ambient evening lights",
    caption: "Sundowner Pool Bar Lounge",
  },
  {
    id: "photo-10",
    src: "/assets/pkg_family.webp",
    title: "Family Reunion Gathering Space",
    category: "celebrations",
    categoryLabel: "Celebrations",
    aspectRatio: "landscape",
    alt: "Spacious seating area for private family milestone celebrations",
    caption: "Family Milestone Soiree",
  },
  {
    id: "photo-11",
    src: "/assets/gallery_darjeeling.webp",
    title: "Floral Pathway & Evening Ambiance",
    category: "garden",
    categoryLabel: "Garden & Venue",
    aspectRatio: "landscape",
    alt: "Floral pathway with fairy lights leading to main lawn",
    caption: "Illuminated Garden Pathway",
  },
  {
    id: "photo-12",
    src: "/images/party.webp",
    title: "Ring Ceremony & Engagement Setup",
    category: "weddings",
    categoryLabel: "Weddings",
    aspectRatio: "square",
    alt: "Charming floral ring ceremony stage in garden setting",
    caption: "Engagement Ring Ceremony",
  },
];
