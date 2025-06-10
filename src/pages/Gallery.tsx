import React, { useEffect, useState } from 'react';
import { getAllGalleryImages, getAllAccommodations } from '@/services/accommodationService';
import { AccommodationImage, Accommodation } from '@/types/accommodation';
import { useToast } from '@/components/ui/use-toast';

type GalleryImage = AccommodationImage & {
  accommodations: {
    name: string;
  }
};

const Gallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [accommodations, setAccommodations] = useState<Accommodation[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Gallery | The Sky Living';
    
    const fetchData = async () => {
      try {
        setLoading(true);
        const [galleryData, accommodationsData] = await Promise.all([
          getAllGalleryImages() as Promise<GalleryImage[]>,
          getAllAccommodations()
        ]);
        
        // Sort accommodations by code
        const sortedAccommodations = [...accommodationsData].sort((a, b) => {
          const aNum = parseInt(a.code.replace(/\D/g, ''));
          const bNum = parseInt(b.code.replace(/\D/g, ''));
          return aNum - bNum;
        });
        
        setImages(galleryData);
        setAccommodations(sortedAccommodations);
        // Set the first accommodation as active by default
        if (sortedAccommodations.length > 0) {
          setActiveCategory(sortedAccommodations[0].name);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        toast({
          title: "Error",
          description: "Failed to load gallery data. Please try again later.",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [toast]);

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(image => image.accommodations?.name === activeCategory);

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-white">
        <div className="page-hero-overlay"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-10 z-[-1]"></div>
        <div className="container mx-auto px-4 z-10 text-center page-hero-content">
          <h1 className="page-hero-title text-gradient">OUR PG/HOSTELS GALLERY</h1>
          <p className="page-hero-subtitle">
            Browse through our collection of PG accommodations and their facilities
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-skyliving-600"></div>
            </div>
          ) : (
            <>
              {/* PG Names Navigation */}
              <div className="mb-12">
                {/* Mobile Dropdown for PG Selection (for very small screens) */}
                <div className="block sm:hidden w-full">
                  <select
                    value={activeCategory}
                    onChange={(e) => setActiveCategory(e.target.value)}
                    className="w-full p-4 rounded-lg border border-gray-200 shadow-sm text-skyliving-600 font-medium focus:border-skyliving-500 focus:ring-2 focus:ring-skyliving-200"
                  >
                    {accommodations.map((accommodation) => (
                      <option key={accommodation.id} value={accommodation.name}>
                        {accommodation.code} - {accommodation.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Grid Layout for Tablet and Desktop */}
                <div className="hidden sm:block">
                  <div className="flex flex-col items-center">
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full max-w-6xl">
                      {accommodations.map((accommodation) => (
                        <button
                          key={accommodation.id}
                          type="button"
                          className={`
                            w-full px-4 py-3.5 text-base font-medium 
                            rounded-lg shadow-md transition-all
                            hover:transform hover:scale-105
                            flex flex-col items-center justify-center
                            min-h-[80px]
                            ${
                              activeCategory === accommodation.name
                                ? "bg-skyliving-600 text-white shadow-skyliving-200"
                                : "bg-white text-skyliving-600 hover:bg-skyliving-50 border border-skyliving-100"
                            }
                          `}
                          onClick={() => setActiveCategory(accommodation.name)}
                        >
                          <span className="font-bold text-lg mb-1">{accommodation.code}</span>
                          <span className="text-sm text-center">{accommodation.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Active PG Name Display */}
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-skyliving-700">
                  {accommodations.find(acc => acc.name === activeCategory)?.name}
                </h2>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                {filteredImages.map((image) => (
                  <div 
                    key={image.id} 
                    className="group overflow-hidden rounded-xl shadow-md cursor-pointer 
                             hover:shadow-xl transition-all duration-300 bg-white
                             transform hover:scale-105"
                    onClick={() => handleImageClick(image)}
                  >
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={image.image_url}
                        alt={image.alt_text}
                        className="w-full h-full object-cover transform transition-transform duration-700 
                                 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* No Images Message */}
              {filteredImages.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No images available for this accommodation.</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Image Modal - Made more responsive */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="max-w-4xl w-full bg-white rounded-xl overflow-hidden shadow-2xl relative">
            <div className="relative">
              <img 
                src={selectedImage.image_url} 
                alt={selectedImage.alt_text} 
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <button 
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg 
                         hover:bg-gray-100 transition transform hover:scale-110"
                onClick={closeModal}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {selectedImage.accommodations?.name && (
              <div className="p-4 text-center bg-white">
                <h3 className="text-xl font-semibold text-skyliving-600">
                  {selectedImage.accommodations.name}
                </h3>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
