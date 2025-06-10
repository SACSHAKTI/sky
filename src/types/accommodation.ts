export interface Accommodation {
  id: string;
  name: string;
  code: string;
  slug: string;
  description: string;
  address: string;
  contact: string;
  email: string;
  features: string[];
  main_image: string;
  maps_link?: string;
  created_at: string;
  updated_at: string;
  pg_category?: 'boys' | 'girls' | 'mixed' | null;
}

export interface AccommodationImage {
  id: string;
  accommodation_id: string;
  image_url: string;
  alt_text: string;
  sort_order: number;
  created_at: string;
}

export interface RoomType {
  id: string;
  accommodation_id: string;
  type: string;
  price: number;
  availability: string;
  created_at: string;
  updated_at: string;
}
