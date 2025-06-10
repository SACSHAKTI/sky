import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowLeft,
  ExternalLink,
  Download
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Accommodation, AccommodationImage, RoomType } from '@/types/accommodation';
import { getAccommodationBySlug, getAccommodationImages, getRoomTypes } from '@/services/accommodationService';
import { useToast } from '@/components/ui/use-toast';
import { useMetaTags } from '@/hooks/useMetaTags';

const roomAmenities = [
  { name: "Spacious Wardrobe & Extra Storage Space", icon: "📦" },
  { name: "AC Rooms", icon: "❄️" },
  { name: "Bed With Comfy Mattress", icon: "🛏️" },
  { name: "Hot & Cold Water Service", icon: "🚿" },
  { name: "Attached Washroom", icon: "🚽" }
];

const commonAmenities = [
  { name: "Hygienic & Delicious Food", icon: "🍽️" },
  { name: "Housekeeping", icon: "🧹" },
  { name: "24/7 Security", icon: "🛡️" },
  { name: "High Speed Internet", icon: "🌐" },
  { name: "Transport On Call", icon: "🚗" },
  { name: "Laundry Service", icon: "👕" },
  { name: "24X7 CCTV Surveillance", icon: "📹" },
  { name: "Parking", icon: "🅿️" }
];

// Default brochure URL if none is provided
const DEFAULT_BROCHURE_URL = 'https://theskyliving.co.in/brochures/skyliving-brochure.pdf';

const AccommodationDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [accommodation, setAccommodation] = useState<Accommodation | null>(null);
  const [images, setImages] = useState<AccommodationImage[]>([]);
  const [roomTypes, setRoomTypes] = useState<RoomType[]>([]);
  const [activeImage, setActiveImage] = useState('');
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  // Get the current full URL
  const currentUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}${location.pathname}`
    : '';

  // Use the meta tags hook when accommodation data is available
  useMetaTags({
    title: accommodation ? `${accommodation.name} | The Sky Living` : 'The Sky Living',
    description: accommodation?.description || 'Experience premium student living at The Sky Living PG and Hostel accommodations.',
    image: accommodation?.main_image || '',
    url: currentUrl
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const fetchAccommodationDetails = async () => {
      if (!slug) return;
      
      try {
        setLoading(true);
        
        // Fetch accommodation data
        const accommodationData = await getAccommodationBySlug(slug);
        if (!accommodationData) {
          toast({
            title: "Error",
            description: "Accommodation not found.",
            variant: "destructive"
          });
          navigate('/accommodations');
          return;
        }
        
        setAccommodation(accommodationData);
        setActiveImage(accommodationData.main_image);
        
        // Fetch accommodation images
        const [imagesData, roomTypesData] = await Promise.all([
          getAccommodationImages(accommodationData.id),
          getRoomTypes(accommodationData.id)
        ]);
        setImages(imagesData);
        setRoomTypes(roomTypesData);
      } catch (error) {
        console.error('Error fetching accommodation details:', error);
        toast({
          title: "Error",
          description: "Failed to load accommodation details. Please try again later.",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    fetchAccommodationDetails();
  }, [slug, toast, navigate]);

  if (loading) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-white">
        <div className="container mx-auto px-4 flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-skyliving-600"></div>
        </div>
      </div>
    );
  }

  if (!accommodation) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-skyliving-700">Accommodation not found</h1>
          <p className="mt-4 text-lg text-gray-600">The accommodation you're looking for doesn't exist or has been removed.</p>
          <Button asChild className="mt-8 bg-skyliving-600 hover:bg-skyliving-700">
            <Link to="/accommodations">Back to Accommodations</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Use main image if no gallery images are available
  const galleryImages = images.length > 0 ? images : [{ id: 'main', accommodation_id: accommodation.id || '', image_url: accommodation.main_image, alt_text: accommodation.name, sort_order: 0, created_at: '' }];

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-6">
          <Button asChild variant="outline" className="flex items-center gap-2 border-skyliving-200 hover:bg-skyliving-50 text-skyliving-700">
            <Link to="/accommodations">
              <ArrowLeft className="h-4 w-4" />
              Back to Accommodations
            </Link>
          </Button>
        </div>

        {/* Accommodation Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-skyliving-700 mb-2 font-heading">
            {accommodation.name}
          </h1>
          <p className="text-xl text-skyliving-500 font-medium mb-4">({accommodation.code})</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {accommodation.features.map((feature, index) => (
              <span key={index} className="bg-skyliving-50 text-skyliving-700 px-4 py-1.5 rounded-full text-sm font-medium">
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-12">
          <div className="lg:col-span-3">
            <div className="rounded-xl overflow-hidden bg-gray-100 aspect-[4/3]">
              <img 
                src={activeImage} 
                alt={accommodation.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="grid grid-cols-3 gap-3 h-full">
              {galleryImages.map((img) => (
                <div 
                  key={img.id} 
                  className={`rounded-lg overflow-hidden cursor-pointer border-2 ${activeImage === img.image_url ? 'border-skyliving-500' : 'border-transparent'}`}
                  onClick={() => setActiveImage(img.image_url)}
                >
                  <img 
                    src={img.image_url} 
                    alt={img.alt_text} 
                    className="w-full h-full object-cover aspect-square"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column - Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-skyliving-700 mb-4">About This Accommodation</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{accommodation.description}</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex flex-col">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 mr-3 text-skyliving-600 mt-0.5" />
                    <div className="flex-1">
                      <span className="text-gray-700 text-lg">{accommodation.address}</span>
                    </div>
                  </div>
                  <div className="mt-3 ml-9">
                    <Button
                      asChild
                      className="bg-skyliving-600 hover:bg-skyliving-700 text-white w-full sm:w-auto"
                    >
                      <a
                        href={accommodation.maps_link || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(accommodation.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <MapPin className="h-4 w-4" />
                        Open in Google Maps
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 mr-3 text-skyliving-600" />
                  <a 
                    href={`tel:${accommodation.contact}`}
                    className="text-gray-700 text-lg hover:text-skyliving-600 transition-colors"
                  >
                    {accommodation.contact}
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 mr-3 text-skyliving-600" />
                  <span className="text-gray-700 text-lg">{accommodation.email}</span>
                </div>
              </div>
            </div>

            {/* Room Types */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-skyliving-700 mb-6">Room Types & Pricing</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 bg-gray-50">Room Type</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 bg-gray-50">Monthly Rent</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 bg-gray-50">Availability</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {roomTypes.map((room, index) => (
                      <tr key={room.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-4 py-4 text-sm text-gray-900">{room.type}</td>
                        <td className="px-4 py-4 text-sm text-gray-900 font-medium">₹{room.price.toLocaleString()}/month</td>
                        <td className="px-4 py-4 text-sm">
                          <span 
                            className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                              room.availability === 'Available' 
                                ? 'bg-green-50 text-green-700' 
                                : room.availability === 'Limited' 
                                  ? 'bg-yellow-50 text-yellow-700'
                                  : 'bg-red-50 text-red-700'
                            }`}
                          >
                            {room.availability}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-skyliving-700 mb-6">Amenities</h2>
              
              <h3 className="text-xl font-semibold text-skyliving-600 mb-4">Room Amenities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {roomAmenities.map((amenity, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-xl mr-3">{amenity.icon}</span>
                    <span className="text-gray-700">{amenity.name}</span>
                  </div>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold text-skyliving-600 mb-4">Common Amenities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {commonAmenities.map((amenity, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-xl mr-3">{amenity.icon}</span>
                    <span className="text-gray-700">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Contact Card & CTA */}
          <div className="lg:col-span-1">
            <Card className="sticky top-28 shadow-md border-gray-100">
              <CardContent className="p-0">
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-xl font-bold text-skyliving-700 mb-2">Interested in this accommodation?</h3>
                  <p className="text-gray-600 mb-4">Contact us to schedule a visit or book your spot.</p>
                  <div className="space-y-3">
                    <Button className="w-full bg-skyliving-600 hover:bg-skyliving-700 text-white" size="lg" asChild>
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                    <Button 
                      className="w-full bg-white border-2 border-skyliving-600 text-skyliving-700 hover:bg-skyliving-50" 
                      size="lg" 
                      asChild
                    >
                      <a 
                        href={accommodation.brochure_link || DEFAULT_BROCHURE_URL} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Download Brochure
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-medium text-gray-900 mb-3">Quick Contact</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-skyliving-600" />
                      <a 
                        href={`tel:${accommodation.contact}`}
                        className="text-gray-700 text-sm hover:text-skyliving-600 transition-colors"
                      >
                        {accommodation.contact}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-skyliving-600" />
                      <span className="text-gray-700 text-sm">{accommodation.email}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationDetail;
