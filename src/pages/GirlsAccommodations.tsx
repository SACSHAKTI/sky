import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { Accommodation } from '@/types/accommodation';
import { getAccommodationsByGender } from '@/services/accommodationService';
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

const GirlsAccommodations = () => {
  const [accommodations, setAccommodations] = useState<Accommodation[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useMetaTags({
    title: 'Girls PG/Hostels in Ahmedabad | The Sky Living',
    description: 'Safe and secure Girls PG and hostels in Ahmedabad with AC rooms, 24/7 security, food service, and modern amenities. Located near Navrangpura, Ahmedabad University, and CG Road. Premium accommodation for female students.',
    image: 'https://lovable.dev/opengraph-image-p98pqg.png',
    url: 'https://theskyliving.co.in/girls-accommodations'
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const fetchAccommodations = async () => {
      try {
        setLoading(true);
        const data = await getAccommodationsByGender('girls');
        setAccommodations(data);
      } catch (error) {
        console.error('Error fetching accommodations:', error);
        toast({
          title: "Error",
          description: "Failed to load accommodations. Please try again later.",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    fetchAccommodations();
  }, [toast]);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-skyliving-800">
        <div className="page-hero-overlay"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center mix-blend-overlay z-[-1]"></div>
        <div className="container mx-auto px-4 z-10 text-center page-hero-content">
          <h1 className="page-hero-title">GIRLS PG/HOSTELS</h1>
          <p className="page-hero-subtitle">
            Explore our range of premium girls hostels and PGs designed to provide you the ultimate comfort and convenience.
          </p>
        </div>
      </section>

      {/* Accommodations List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-skyliving-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {accommodations.map((accommodation) => (
                <div key={accommodation.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <div className="h-full">
                        <img 
                          src={accommodation.main_image} 
                          alt={accommodation.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-3/5 p-6">
                      <h3 className="text-2xl font-bold mb-2 text-skyliving-700">{accommodation.name}</h3>
                      <p className="text-skyliving-500 font-medium mb-4">({accommodation.code})</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {accommodation.features.map((feature, index) => (
                          <span key={index} className="bg-skyliving-50 text-skyliving-700 px-3 py-1 rounded-full text-sm">
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-start">
                          <MapPin className="h-5 w-5 mr-2 text-skyliving-600 mt-0.5" />
                          <div className="flex-1">
                            <span className="text-gray-700">{accommodation.address}</span>
                            {accommodation.maps_link && (
                              <a
                                href={accommodation.maps_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 inline-flex items-center text-skyliving-600 hover:text-skyliving-700 text-sm font-medium"
                              >
                                Open Maps <ExternalLink className="h-4 w-4 ml-1" />
                              </a>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-5 w-5 mr-2 text-skyliving-600" />
                          <span className="text-gray-700">{accommodation.contact}</span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="h-5 w-5 mr-2 text-skyliving-600" />
                          <span className="text-gray-700">{accommodation.email}</span>
                        </div>
                      </div>
                      
                      <Button asChild className="bg-skyliving-600 hover:bg-skyliving-700">
                        <Link to={`/accommodations/${accommodation.slug}`}>View Details</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-skyliving-700 mb-6 text-center font-heading">ROOM AMENITIES</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {roomAmenities.map((amenity, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all">
                  <div className="text-3xl mb-4">{amenity.icon}</div>
                  <h3 className="font-medium text-skyliving-700">{amenity.name}</h3>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl font-bold text-skyliving-700 mb-6 text-center font-heading">COMMON AMENITIES</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {commonAmenities.map((amenity, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all">
                  <div className="text-3xl mb-4">{amenity.icon}</div>
                  <h3 className="font-medium text-skyliving-700">{amenity.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-skyliving-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-heading">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Experience the comfort, convenience, and community at The Sky Living. 
            Contact us today to secure your spot!
          </p>
          <Button asChild size="lg" className="bg-white text-skyliving-700 hover:bg-gray-100">
            <Link to="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default GirlsAccommodations;