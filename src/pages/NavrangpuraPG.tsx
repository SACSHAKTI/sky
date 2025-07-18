import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Star, ArrowRight, CheckCircle } from 'lucide-react';
import { useMetaTags } from '@/hooks/useMetaTags';
import { StructuredData } from '@/components/seo/StructuredData';
import { FAQSection } from '@/components/seo/FAQSection';
import { RelatedPages } from '@/components/seo/RelatedPages';
import { getAllAccommodations } from '@/services/accommodationService';
import { Accommodation } from '@/types/accommodation';

const NavrangpuraPG = () => {
  const [boysPGAccommodations, setBoysPGAccommodations] = useState<Accommodation[]>([]);
  const [girlsPGAccommodations, setGirlsPGAccommodations] = useState<Accommodation[]>([]);
  const [loading, setLoading] = useState(true);

  useMetaTags({
    title: 'Best PG in Navrangpura Ahmedabad | The Sky Living - Premium Student Accommodation',
    description: 'Find the best PG in Navrangpura, Ahmedabad near St. Xavier\'s College, GLS University, and CG Road. Premium student accommodation with AC rooms, food, Wi-Fi, and modern amenities. Book your PG in Navrangpura today!',
    image: 'https://lovable.dev/opengraph-image-p98pqg.png',
    url: 'https://theskyliving.co.in/navrangpura-pg-accommodation',
    canonical: 'https://theskyliving.co.in/navrangpura-pg-accommodation'
  });

  const businessData = {
    name: 'The Sky Living Navrangpura',
    description: 'Premium PG accommodation in Navrangpura, Ahmedabad. Located near St. Xavier\'s College, GLS University, and CG Road with modern amenities and comfortable living spaces for students.',
    url: 'https://theskyliving.co.in/navrangpura-pg-accommodation',
    telephone: '+91-9876543210',
    email: 'info@theskyliving.co.in',
    address: {
      streetAddress: 'Near HDFC Bank, Opp. Wagh Bakri Tea Lounge',
      addressLocality: 'Navrangpura',
      addressRegion: 'Gujarat',
      postalCode: '380009',
      addressCountry: 'IN'
    },
    image: 'https://lovable.dev/opengraph-image-p98pqg.png',
    priceRange: '₹₹',
    openingHours: ['Mo-Su 00:00-23:59']
  };

  useEffect(() => {
    const fetchNavrangpuraAccommodations = async () => {
      try {
        const allAccommodations = await getAllAccommodations();
        console.log('All accommodations fetched:', allAccommodations);
        console.log('Total accommodations:', allAccommodations.length);
        
        // Filter for Boys PG (TSL 1, TSL 2, TSL 3)
        const boysPGProperties = allAccommodations.filter(acc => {
          console.log('Checking accommodation for Boys PG:', acc.name, 'Code:', acc.code);
          if (!acc.code) return false;
          
          const codeNormalized = acc.code.replace(/\s+/g, '').toUpperCase();
          const isMatch = codeNormalized === 'TSL1' || 
                         codeNormalized === 'TSL2' || 
                         codeNormalized === 'TSL3' ||
                         acc.code.includes('TSL 1') || 
                         acc.code.includes('TSL 2') || 
                         acc.code.includes('TSL 3');
          console.log('Boys PG match:', isMatch, 'for code:', acc.code);
          return isMatch;
        });
        
        // Filter for Girls PG (TSL 4, TSL 5)
        const girlsPGProperties = allAccommodations.filter(acc => {
          console.log('Checking accommodation for Girls PG:', acc.name, 'Code:', acc.code);
          if (!acc.code) return false;
          
          const codeNormalized = acc.code.replace(/\s+/g, '').toUpperCase();
          const isMatch = codeNormalized === 'TSL4' || 
                         codeNormalized === 'TSL5' ||
                         acc.code.includes('TSL 4') || 
                         acc.code.includes('TSL 5');
          console.log('Girls PG match:', isMatch, 'for code:', acc.code);
          return isMatch;
        });
        
        console.log('Boys PG properties:', boysPGProperties);
        console.log('Boys PG count:', boysPGProperties.length);
        console.log('Girls PG properties:', girlsPGProperties);
        console.log('Girls PG count:', girlsPGProperties.length);
        
        setBoysPGAccommodations(boysPGProperties);
        setGirlsPGAccommodations(girlsPGProperties);
      } catch (error) {
        console.error('Error fetching Navrangpura accommodations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNavrangpuraAccommodations();
  }, []);

  const navrangpuraFeatures = [
    "Walking distance to St. Xavier's College",
    "Close to GLS University",
    "Near CG Road commercial area",
    "Excellent connectivity to Gujarat University",
    "Close to Ahmedabad University",
    "Near HL College",
    "Walking distance to major banks",
    "Close to shopping and dining"
  ];

  const whyChooseNavrangpura = [
    {
      title: "Educational Hub",
      description: "Located in the heart of Ahmedabad's educational district with multiple colleges nearby",
      icon: "🎓"
    },
    {
      title: "Excellent Connectivity",
      description: "Well-connected to all parts of Ahmedabad with frequent public transport",
      icon: "🚌"
    },
    {
      title: "Safe Environment",
      description: "Well-lit streets and safe neighborhood with 24/7 security",
      icon: "🔒"
    },
    {
      title: "Commercial Proximity",
      description: "Close to CG Road with restaurants, cafes, and shopping centers",
      icon: "🏪"
    }
  ];

  const nearbyColleges = [
    { name: "St. Xavier's College", distance: "2 min walk", courses: "Commerce, Arts, Science" },
    { name: "GLS University", distance: "5 min walk", courses: "Law, Management, Engineering" },
    { name: "HL College", distance: "3 min walk", courses: "Commerce, Arts" },
    { name: "Gujarat University", distance: "10 min bus", courses: "Various Departments" },
    { name: "Ahmedabad University", distance: "15 min auto", courses: "Engineering, Management" }
  ];

  return (
    <div className="pt-20">
      <StructuredData type="LocalBusiness" data={businessData} />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-skyliving-800 to-skyliving-900 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-heading">
              Best PG in <span className="text-yellow-400">Navrangpura</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Premium student accommodation near St. Xavier's College, GLS University & CG Road
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                <Link to="/contact">Book Your PG Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
                <Link to="/accommodations">View Properties</Link>
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
              Why Choose PG in Navrangpura?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseNavrangpura.map((feature, index) => (
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

      {/* Nearby Colleges Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-skyliving-700">
              Top Colleges Near Our Navrangpura PG
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nearbyColleges.map((college, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-skyliving-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-skyliving-600 font-bold">{college.distance.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-skyliving-700">{college.name}</h3>
                      <p className="text-sm text-gray-600">{college.distance}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{college.courses}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Boys PG Properties Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-blue-700">
                Boys PG Properties in Navrangpura
              </h2>
              <p className="text-lg text-gray-600">TSL 1, TSL 2, TSL 3 - Premium accommodations for male students</p>
            </div>
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
                <p className="text-gray-600 mt-4">Loading boys PG properties...</p>
              </div>
            ) : boysPGAccommodations.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No Boys PG properties (TSL 1, 2, 3) found in Navrangpura.</p>
                <p className="text-gray-500 mt-2">Please check back later or contact us for more information.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {boysPGAccommodations.map((accommodation) => (
                  <div key={accommodation.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-l-4 border-blue-500">
                    <img 
                      src={accommodation.main_image} 
                      alt={`${accommodation.name} - Boys PG in Navrangpura`}
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
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Girls PG Properties Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-pink-700">
                Girls PG Properties in Navrangpura
              </h2>
              <p className="text-lg text-gray-600">TSL 4, TSL 5 - Premium accommodations for female students</p>
            </div>
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-pink-600 mx-auto"></div>
                <p className="text-gray-600 mt-4">Loading girls PG properties...</p>
              </div>
            ) : girlsPGAccommodations.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No Girls PG properties (TSL 4, 5) found in Navrangpura.</p>
                <p className="text-gray-500 mt-2">Please check back later or contact us for more information.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {girlsPGAccommodations.map((accommodation) => (
                  <div key={accommodation.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-l-4 border-pink-500">
                    <img 
                      src={accommodation.main_image} 
                      alt={`${accommodation.name} - Girls PG in Navrangpura`}
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

      {/* Location Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-skyliving-700">
              Location Benefits of Navrangpura PG
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-skyliving-700">Educational Advantages</h3>
                <ul className="space-y-3">
                  {navrangpuraFeatures.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-skyliving-700">Lifestyle Benefits</h3>
                <ul className="space-y-3">
                  {navrangpuraFeatures.slice(4).map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages Section */}
      <RelatedPages
        title="Explore Other Locations & Universities"
        pages={[
          {
            title: "St. Xavier's College PG",
            subtitle: "2-minute walk",
            description: "Premium PG accommodation just 2 minutes walk from St. Xavier's College campus in Navrangpura.",
            link: "/pg-near-st-xaviers-college",
            type: "university"
          },
          {
            title: "GLS University PG",
            subtitle: "Law & Management",
            description: "Perfect for GLS University students pursuing Law, Management, and Commerce programs.",
            link: "/student-accommodation-gls-university",
            type: "university"
          },
          {
            title: "Vaishnodevi Circle PG",
            subtitle: "SG Highway area",
            description: "Modern student housing near Vaishnodevi Circle with excellent connectivity.",
            link: "/vaishnodevi-circle-student-housing",
            type: "location"
          },
          {
            title: "Nirma University PG",
            subtitle: "Tech-friendly",
            description: "Ideal accommodation for Nirma University students with modern tech facilities.",
            link: "/pg-near-nirma-university",
            type: "university"
          }
        ]}
        className="bg-white"
      />

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions about PG in Navrangpura"
        faqs={[
          {
            question: "What is the best PG in Navrangpura for students?",
            answer: "The Sky Living offers the best PG accommodation in Navrangpura with premium facilities including AC rooms, food service, Wi-Fi, and modern amenities. We are located just 2 minutes walk from St. Xavier's College and 5 minutes from GLS University."
          },
          {
            question: "How far is The Sky Living from St. Xavier's College?",
            answer: "The Sky Living properties in Navrangpura are just 2 minutes walking distance from St. Xavier's College, making it extremely convenient for Commerce, Arts, and Science students."
          },
          {
            question: "What facilities are available in Navrangpura PG?",
            answer: "Our Navrangpura PG offers AC rooms, nutritious meals, high-speed Wi-Fi, study areas, laundry service, 24/7 security, housekeeping, and recreational facilities. All properties are fully furnished with modern amenities."
          },
          {
            question: "Is The Sky Living suitable for girls in Navrangpura?",
            answer: "Yes, we have dedicated girls PG properties in Navrangpura with enhanced security features, safe environment, and women-friendly policies. The area is well-lit and secure with easy access to colleges."
          },
          {
            question: "What are the charges for PG in Navrangpura?",
            answer: "Our PG charges in Navrangpura are competitive and include accommodation, meals, Wi-Fi, and all amenities. Contact us for detailed pricing and availability of different room types."
          },
          {
            question: "How is the connectivity from Navrangpura to other parts of Ahmedabad?",
            answer: "Navrangpura has excellent connectivity with frequent bus services, auto-rickshaws, and cab services. It's centrally located with easy access to all major areas of Ahmedabad including railway station and airport."
          }
        ]}
        className="bg-gray-50"
      />

      {/* CTA Section */}
      <section className="py-20 bg-skyliving-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience Premium PG Life in Navrangpura?
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Join hundreds of students who have made The Sky Living their home away from home
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                <Link to="/contact">Contact Us Today</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
                <Link to="/accommodations">Explore All Properties</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NavrangpuraPG;