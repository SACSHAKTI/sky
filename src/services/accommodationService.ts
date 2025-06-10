import { supabase } from "@/integrations/supabase/client";
import { Accommodation, AccommodationImage, RoomType } from "@/types/accommodation";

// Helper function to generate slug from name
function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export async function getAllAccommodations(): Promise<Accommodation[]> {
  const { data, error } = await supabase
    .from('accommodations')
    .select('*')
    .order('code');
  
  if (error) {
    console.error('Error fetching accommodations:', error);
    return [];
  }
  
  // Add slugs to accommodations
  return (data || []).map(acc => ({
    ...acc,
    slug: generateSlug(acc.name)
  }));
}

export async function getAccommodationsByGender(gender: 'boys' | 'girls' | 'mixed'): Promise<Accommodation[]> {
  const { data, error } = await supabase
    .from('accommodations')
    .select('*')
    .eq('pg_category', gender)
    .order('code');
  
  if (error) {
    console.error('Error fetching accommodations by gender:', error);
    return [];
  }
  
  // Add slugs to accommodations
  return (data || []).map(acc => ({
    ...acc,
    slug: generateSlug(acc.name)
  }));
}

export async function getAccommodationBySlug(slug: string): Promise<Accommodation | null> {
  const { data, error } = await supabase
    .from('accommodations')
    .select('*');
  
  if (error) {
    console.error('Error fetching accommodation by slug:', error);
    return null;
  }

  // Find the accommodation with matching slug
  const accommodation = (data || []).find(acc => generateSlug(acc.name) === slug);
  
  if (!accommodation) {
    return null;
  }

  return {
    ...accommodation,
    slug: generateSlug(accommodation.name)
  };
}

export async function getAccommodationById(id: string): Promise<Accommodation | null> {
  const { data, error } = await supabase
    .from('accommodations')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) {
    console.error('Error fetching accommodation by ID:', error);
    return null;
  }
  
  if (!data) {
    return null;
  }

  return {
    ...data,
    slug: generateSlug(data.name)
  };
}

export async function getAccommodationImages(accommodationId: string): Promise<AccommodationImage[]> {
  const { data, error } = await supabase
    .from('accommodation_images')
    .select('*')
    .eq('accommodation_id', accommodationId)
    .order('sort_order');
  
  if (error) {
    console.error('Error fetching accommodation images:', error);
    return [];
  }
  
  return data || [];
}

export async function getRoomTypes(accommodationId: string): Promise<RoomType[]> {
  const { data, error } = await supabase
    .from('room_types')
    .select('*')
    .eq('accommodation_id', accommodationId);
  
  if (error) {
    console.error('Error fetching room types:', error);
    return [];
  }
  
  return data || [];
}

export async function getAllGalleryImages(): Promise<AccommodationImage[]> {
  const { data, error } = await supabase
    .from('accommodation_images')
    .select('*, accommodations(name)')
    .order('sort_order');
  
  if (error) {
    console.error('Error fetching gallery images:', error);
    return [];
  }
  
  return data || [];
}
