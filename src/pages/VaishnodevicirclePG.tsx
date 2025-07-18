import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Star, ArrowRight, CheckCircle } from 'lucide-react';
import { useMetaTags } from '@/hooks/useMetaTags';
import { StructuredData } from '@/components/seo/StructuredData';
import { RelatedPages } from '@/components/seo/RelatedPages';
import { getAllAccommodations } from '@/services/accommodationService';
import { Accommodation } from '@/types/accommodation';

const VaishnodevicirclePG = () => {
  const [girlsPGAccommodations, setGirlsPGAccommodations] = useState<Accommodation[]>([]);
  const [boysPGAccommodations, setBoysPGAccommodations] = useState<Accommodation[]>([]);
  const [loading, setLoading] = useState(true);

  useMetaTags({
    title: 'Best PG in Vaishnodevi Circle Ahmedabad | Student Accommodation near SG Highway',
    description: 'Premium PG in Vaishnodevi Circle, Ahmedabad near SG Highway, SP Ring Road, and Nirma University. Modern student accommodation with AC rooms, food, Wi-Fi, and world-class amenities. Book your PG in Vaishnodevi Circle today!',
    image: 'https://lovable.dev/opengraph-image-p98pqg.png',
    url: 'https://theskyliving.co.in/vaishnodevi-circle-student-housing',
    canonical: 'https://theskyliving.co.in/vaishnodevi-circle-student-housing'
  });

  const businessData = {
    name: 'The Sky Living Vaishnodevi Circle',
    description: 'Premium student accommodation in Vaishnodevi Circle, Ahmedabad. Strategically located near SG Highway, SP Ring Road, and Nirma University with modern amenities and luxury living spaces.',
    url: 'https://theskyliving.co.in/vaishnodevi-circle-student-housing',
    telephone: '+91-9876543210',
    email: 'info@theskyliving.co.in',
    address: {
      streetAddress: 'Vaishnodevi Circle, SG Highway',
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
      postalCode: '380009',
      addressCountry: 'IN'
    },
    image: 'https://lovable.dev/opengraph-image-p98pqg.png',
    priceRange: '₹₹',
    openingHours: ['Mo-Su 00:00-23:59']
  };

  useEffect(() => {
    const fetchVaishnodevicircleAccommodations = async () => {
      try {
        const allAccommodations = await getAllAccommodations();
        console.log('All accommodations fetched:', allAccommodations);
        console.log('Total accommodations:', allAccommodations.length);
        
        // Filter for Girls PG (TSL 7)
        const girlsPGProperties = allAccommodations.filter(acc => {
          console.log('Checking accommodation for Girls PG:', acc.name, 'Code:', acc.code);
          if (!acc.code) return false;
          
          const codeNormalized = acc.code.replace(/\s+/g, '').toUpperCase();
          const isMatch = codeNormalized === 'TSL7' || acc.code.includes('TSL 7');
          console.log('Girls PG match:', isMatch, 'for code:', acc.code);
          return isMatch;
        });
        
        // Filter for Boys PG (TSL 8 only - TSL 9 will be handled separately as coming soon)
        const boysPGProperties = allAccommodations.filter(acc => {
          console.log('Checking accommodation for Boys PG:', acc.name, 'Code:', acc.code);
          if (!acc.code) return false;
          
          const codeNormalized = acc.code.replace(/\s+/g, '').toUpperCase();
          const isMatch = codeNormalized === 'TSL8' || acc.code.includes('TSL 8');
          console.log('Boys PG match:', isMatch, 'for code:', acc.code);
          return isMatch;
        });
        
        console.log('Girls PG properties:', girlsPGProperties);
        console.log('Girls PG count:', girlsPGProperties.length);
        console.log('Boys PG properties:', boysPGProperties);
        console.log('Boys PG count:', boysPGProperties.length);
        
        setGirlsPGAccommodations(girlsPGProperties);
        setBoysPGAccommodations(boysPGProperties);
      } catch (error) {
        console.error('Error fetching Vaishnodevi Circle accommodations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVaishnodevicircleAccommodations();
  }, []);

  const vaishnodevicircleFeatures = [
    "9 minutes walk to Nirma University",
    "Located on SG Highway",
    "Near SP Ring Road intersection",
    "Close to Sabarmati University",
    "Near Adani Elysium premium project",
    "Access to SGVP School Campus",
    "Near Calorx Teacher's University",
    "Excellent connectivity to IT hubs"
  ];

  const whyChooseVaishnodevi = [
    {
      title: "Strategic Location",
      description: "Prime location at SG Highway and SP Ring Road intersection with excellent connectivity",
      icon: "📍"
    },
    {
      title: "University Access",
      description: "Walking distance to Nirma University and close to multiple educational institutions",
      icon: "🎓"
    },
    {
      title: "Modern Infrastructure",
      description: "Surrounded by premium residential projects and modern amenities",
      icon: "🏢"
    },
    {
      title: "IT Hub Proximity",
      description: "Easy access to major IT companies and corporate offices",
      icon: "💻"
    }
  ];

  const nearbyUniversities = [
    { name: "Nirma University", distance: "9 min walk", courses: "Engineering, Management, Law" },
    { name: "Sabarmati University", distance: "15 min drive", courses: "Multiple Disciplines" },
    { name: "Calorx Teacher's University", distance: "20 min drive", courses: "Teacher Training" },
    { name: "SGVP School Campus", distance: "0.6 km", courses: "School Education" },
    { name: "GEMS Genesis International", distance: "10 min drive", courses: "International Curriculum" }
  ];

  const locationAdvantages = [
    "Premium residential area with high-end projects",
    "Excellent public transport connectivity",
    "Near major shopping centers and malls",
    "Close to hospitals and healthcare facilities",
    "Safe and secure neighborhood",
    "24/7 water and power supply",
    "High-speed internet connectivity",
    "Easy access to Ahmedabad and Gandhinagar"
  ];

  return (
    <div className="pt-20">
      <StructuredData type="LocalBusiness" data={businessData} />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-heading">
              Premium PG in <span className="text-yellow-400">Vaishnodevi Circle</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Modern student accommodation near SG Highway, SP Ring Road & Nirma University
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                <Link to="/contact">Book Your Premium PG</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
                <Link to="/accommodations">Explore Properties</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-skyliving-700">
              Why Choose PG in Vaishnodevi Circle?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseVaishnodevi.map((feature, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-skyliving-700">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Universities Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-skyliving-700">
              Top Universities Near Vaishnodevi Circle
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nearbyUniversities.map((university, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">{university.distance.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-skyliving-700">{university.name}</h3>
                      <p className="text-sm text-gray-600">{university.distance}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{university.courses}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Girls PG Properties Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-pink-700">
                Girls PG Properties in Vaishnodevi Circle
              </h2>
              <p className="text-lg text-gray-600">TSL 7 - Premium accommodations for female students</p>
            </div>
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-pink-600 mx-auto"></div>
                <p className="text-gray-600 mt-4">Loading girls PG properties...</p>
              </div>
            ) : girlsPGAccommodations.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No Girls PG properties (TSL 7) found in Vaishnodevi Circle.</p>
                <p className="text-gray-500 mt-2">Please check back later or contact us for more information.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {girlsPGAccommodations.map((accommodation) => (
                  <div key={accommodation.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-l-4 border-pink-500">
                    <img 
                      src={accommodation.main_image} 
                      alt={`${accommodation.name} - Girls PG in Vaishnodevi Circle`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center mb-2">
                        <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-semibold mr-2">
                          Girls PG
                        </span>
                        <span className="text-pink-600 font-medium text-sm">{accommodation.code}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-skyliving-700">{accommodation.name}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {accommodation.features && accommodation.features.slice(0, 3).map((feature, index) => (
                          <span key={index} className="bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-sm">
                            {feature}
                          </span>
                        ))}
                      </div>
                      <Button asChild className="w-full bg-pink-600 hover:bg-pink-700">
                        <Link to={`/accommodations/${accommodation.slug}`}>
                          View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Boys PG Properties Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-blue-700">
                Boys PG Properties in Vaishnodevi Circle
              </h2>
              <p className="text-lg text-gray-600">TSL 8 & TSL 9 - Premium accommodations for male students</p>
            </div>
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
                <p className="text-gray-600 mt-4">Loading boys PG properties...</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* TSL 8 Properties */}
                {boysPGAccommodations.map((accommodation) => (
                  <div key={accommodation.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-l-4 border-blue-500">
                    <img 
                      src={accommodation.main_image} 
                      alt={`${accommodation.name} - Boys PG in Vaishnodevi Circle`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center mb-2">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mr-2">
                          Boys PG
                        </span>
                        <span className="text-blue-600 font-medium text-sm">{accommodation.code}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-skyliving-700">{accommodation.name}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {accommodation.features && accommodation.features.slice(0, 3).map((feature, index) => (
                          <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                            {feature}
                          </span>
                        ))}
                      </div>
                      <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                        <Link to={`/accommodations/${accommodation.slug}`}>
                          View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
                
                {/* TSL 9 Coming Soon Card */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-blue-500 relative">
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Coming Soon
                  </div>
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🏗️</div>
                      <p className="text-blue-700 font-semibold text-lg">TSL 9</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mr-2">
                        Boys PG
                      </span>
                      <span className="text-blue-600 font-medium text-sm">TSL 9</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-skyliving-700">Premium Boys PG - Coming Soon</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">Modern Design</span>
                      <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">Premium Facilities</span>
                      <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">AC Rooms</span>
                    </div>
                    <Button asChild className="w-full bg-orange-500 hover:bg-orange-600">
                      <Link to="/contact">
                        Pre-Book Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            )}
            
            {/* No Boys PG properties message if TSL 8 not found */}
            {!loading && boysPGAccommodations.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-600 text-lg mb-4">TSL 8 Boys PG properties are being prepared.</p>
                <p className="text-gray-500">Contact us for updates on availability.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Location Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-skyliving-700">
              Location Benefits of Vaishnodevi Circle
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-skyliving-700">Educational Excellence</h3>
                <ul className="space-y-3">
                  {vaishnodevicircleFeatures.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-skyliving-700">Modern Lifestyle</h3>
                <ul className="space-y-3">
                  {vaishnodevicircleFeatures.slice(4).map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-skyliving-700">
              Premium Infrastructure & Connectivity
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {locationAdvantages.map((advantage, index) => (
                <div key={index} className="text-center p-4 bg-blue-50 rounded-lg">
                  <CheckCircle className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <p className="text-gray-700 text-sm">{advantage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages Section */}
      <RelatedPages
        title="Explore Other Universities & Locations"
        pages={[
          {
            title: "Nirma University PG",
            subtitle: "Engineering & Tech",
            description: "Modern accommodation for Nirma University students just 9 minutes walk away.",
            link: "/pg-near-nirma-university",
            type: "university"
          },
          {
            title: "Adani University PG",
            subtitle: "Engineering & Tech",
            description: "Specialized accommodation for Adani University students in Ahmedabad.",
            link: "/pg-near-adani-university",
            type: "university"
          },
          {
            title: "Navrangpura PG",
            subtitle: "Educational hub",
            description: "Central location in Navrangpura with access to multiple universities.",
            link: "/navrangpura-pg-accommodation",
            type: "location"
          },
          {
            title: "Uvarsad PG",
            subtitle: "Peaceful village",
            description: "Quiet accommodation in Uvarsad village near Karnavati University.",
            link: "/uvarsad-pg-accommodation",
            type: "location"
          }
        ]}
        className="bg-gray-50"
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-purple-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Experience Premium Living in Vaishnodevi Circle
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Join students from top universities who have chosen our premium accommodations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
                <Link to="/accommodations">View All Properties</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VaishnodevicirclePG;