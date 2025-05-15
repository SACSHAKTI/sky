import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail } from 'lucide-react';

const accommodationsData = [
  {
    id: 1,
    name: "Dream House Boys PG/Hostel",
    code: "TSL-6",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Boys Accommodation", "Safe and Sanitized", "2, 3 and 4 Sharing"],
    address: "13 Falgun Society, Opp. Honest Restaurant, B/H. AG Teachers School, Nr. Hanumanji Mandir Commerce Six Road Navrangpura.",
    contact: "+91 9784034279",
    email: "info@skyliving.co.in"
  },
  {
    id: 2,
    name: "Sky Boys PG/Hostel",
    code: "TSL-4",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Boys Accommodation", "Safe and Sanitized", "2, 3 and 4 Sharing"],
    address: "Near St. Xavier's College, Navrangpura, Ahmedabad",
    contact: "+91 9784034279",
    email: "info@skyliving.co.in"
  },
  {
    id: 3,
    name: "Shiv Kedar Boys PG/Hostel",
    code: "TSL-2",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Boys Accommodation", "Safe and Sanitized", "2, 3 and 4 Sharing"],
    address: "Navrangpura, Ahmedabad",
    contact: "+91 9784034279",
    email: "info@skyliving.co.in"
  },
  {
    id: 4,
    name: "Shiv Shankar Boys PG/Hostel",
    code: "TSL-3",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Boys Accommodation", "Safe and Sanitized", "2, 3 and 4 Sharing"],
    address: "Navrangpura, Ahmedabad",
    contact: "+91 9784034279",
    email: "info@skyliving.co.in"
  },
  {
    id: 5,
    name: "Akaria House",
    code: "TSL-8",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Modern Accommodation", "Safe and Sanitized", "2, 3 and 4 Sharing"],
    address: "Navrangpura, Ahmedabad",
    contact: "+91 9784034279",
    email: "info@skyliving.co.in"
  },
  {
    id: 6,
    name: "Parvati House",
    code: "TSL-5",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Modern Accommodation", "Safe and Sanitized", "2, 3 and 4 Sharing"],
    address: "Navrangpura, Ahmedabad",
    contact: "+91 9784034279",
    email: "info@skyliving.co.in"
  }
];

const roomAmenities = [
  { name: "Spacious Wardrobe & Extra Storage Space", icon: "📦" },
  { name: "AC & NON AC Rooms", icon: "❄️" },
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

const Accommodations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Our Accommodations | The Sky Living';
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-skyliving-800">
        <div className="page-hero-overlay"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center mix-blend-overlay z-[-1]"></div>
        <div className="container mx-auto px-4 z-10 text-center page-hero-content">
          <h1 className="page-hero-title">OUR PG/HOSTELS</h1>
          <p className="page-hero-subtitle">
            Explore our range of premium hostels and PGs designed to provide you the ultimate comfort and convenience.
          </p>
        </div>
      </section>

      {/* Accommodations List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {accommodationsData.map((accommodation) => (
              <div key={accommodation.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <div className="h-full">
                      <img 
                        src={accommodation.image} 
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
                        <span className="text-gray-700">{accommodation.address}</span>
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
                      <Link to={`/accommodations/${accommodation.id}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
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

export default Accommodations;
