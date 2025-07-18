import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, ArrowRight, CheckCircle, BookOpen } from 'lucide-react';
import { useMetaTags } from '@/hooks/useMetaTags';
import { StructuredData } from '@/components/seo/StructuredData';
import { RelatedPages } from '@/components/seo/RelatedPages';
import { getAllAccommodations } from '@/services/accommodationService';
import { Accommodation } from '@/types/accommodation';

const StXaviersCollegePG = () => {
  const [boysPGAccommodations, setBoysPGAccommodations] = useState<Accommodation[]>([]);
  const [girlsPGAccommodations, setGirlsPGAccommodations] = useState<Accommodation[]>([]);
  const [loading, setLoading] = useState(true);

  useMetaTags({
    title: 'Best PG near St. Xavier\'s College Ahmedabad | Walking Distance Student Accommodation',
    description: 'Premium PG near St. Xavier\'s College, Navrangpura, Ahmedabad. Just 2 minutes walk to campus. Ideal for Commerce, Arts, and Science students. AC rooms, food, Wi-Fi, and study facilities. Book your PG near St. Xavier\'s College today!',
    image: 'https://lovable.dev/opengraph-image-p98pqg.png',
    url: 'https://theskyliving.co.in/pg-near-st-xaviers-college',
    canonical: 'https://theskyliving.co.in/pg-near-st-xaviers-college'
  });

  const businessData = {
    name: 'The Sky Living near St. Xavier\'s College',
    description: 'Premium student accommodation just 2 minutes walk from St. Xavier\'s College, Navrangpura. Perfect for Commerce, Arts, and Science students with modern amenities and study-friendly environment.',
    url: 'https://theskyliving.co.in/pg-near-st-xaviers-college',
    telephone: '+91-9876543210',
    email: 'info@theskyliving.co.in',
    address: {
      streetAddress: 'Near HDFC Bank, Opp. Wagh Bakri Tea Lounge, St. Xavier\'s College Road',
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
    const fetchNearbyAccommodations = async () => {
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
        console.error('Error fetching accommodations near St. Xavier\'s College:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNearbyAccommodations();
  }, []);

  const collegeFeatures = [
    "Just 2 minutes walk to St. Xavier's College",
    "Ideal for Commerce, Arts, and Science students",
    "Walking distance to college library",
    "Close to college canteen and facilities",
    "Easy access to college events and activities",
    "Near college bus stops and transport",
    "Walking distance to college hostels",
    "Close to college sports facilities"
  ];

  const studyAdvantages = [
    {
      title: "Study-Friendly Environment",
      description: "Quiet spaces and dedicated study areas for academic excellence",
      icon: "📚"
    },
    {
      title: "Walking Distance",
      description: "Just 2 minutes walk to St. Xavier's College campus",
      icon: "🚶"
    },
    {
      title: "Academic Community",
      description: "Live with fellow St. Xavier's College students",
      icon: "👥"
    },
    {
      title: "Library Access",
      description: "Easy access to college library and academic resources",
      icon: "📖"
    }
  ];

  const collegePrograms = [
    { course: "Bachelor of Commerce (B.Com)", duration: "3 Years", streams: "General, Computer Applications, Accounting & Finance" },
    { course: "Bachelor of Arts (B.A.)", duration: "3 Years", streams: "English, History, Psychology, Economics" },
    { course: "Bachelor of Science (B.Sc.)", duration: "3 Years", streams: "Physics, Chemistry, Mathematics, Biology" },
    { course: "Master of Commerce (M.Com)", duration: "2 Years", streams: "Accounting, Finance, Marketing" },
    { course: "Master of Arts (M.A.)", duration: "2 Years", streams: "English, History, Psychology" },
    { course: "Master of Science (M.Sc.)", duration: "2 Years", streams: "Physics, Chemistry, Mathematics" }
  ];

  const nearbyFacilities = [
    "St. Xavier's College Library",
    "College Sports Complex",
    "Student Activity Center",
    "College Canteen",
    "Medical Center",
    "Computer Lab",
    "Auditorium",
    "Parking Area"
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      course: "B.Com Final Year",
      text: "Living at The Sky Living has been amazing! Just 2 minutes walk to college, and the study environment is perfect for my Commerce studies.",
      rating: 5
    },
    {
      name: "Rohit Patel",
      course: "B.A. English",
      text: "The location is unbeatable. I can easily access the college library and participate in all college activities. Highly recommend!",
      rating: 5
    },
    {
      name: "Kavya Joshi",
      course: "B.Sc. Physics",
      text: "Perfect for science students! The peaceful environment helps me focus on my studies, and the college is just a short walk away.",
      rating: 5
    }
  ];

  return (
    <div className="pt-20">
      <StructuredData type="LocalBusiness" data={businessData} />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-red-900 to-orange-900 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-heading">
              Best PG near <span className="text-yellow-400">St. Xavier's College</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Just 2 minutes walk to campus • Perfect for Commerce, Arts & Science students
            </p>
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-yellow-400 mr-2" />
                <span className="text-lg">2 min walk</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="h-6 w-6 text-yellow-400 mr-2" />
                <span className="text-lg">Study-friendly</span>
              </div>
              <div className="flex items-center">
                <Star className="h-6 w-6 text-yellow-400 mr-2" />
                <span className="text-lg">4.9 rating</span>
              </div>
            </div>
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

      {/* Study Advantages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-skyliving-700">
              Why Choose Our PG for St. Xavier's College?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {studyAdvantages.map((advantage, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-4xl mb-4">{advantage.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-skyliving-700">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* College Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-skyliving-700">
              St. Xavier's College Programs
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {collegePrograms.map((program, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <BookOpen className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-skyliving-700">{program.course}</h3>
                      <p className="text-sm text-gray-600">{program.duration}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{program.streams}</p>
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
                Boys PG Properties near St. Xavier's College
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
                <p className="text-gray-600 text-lg">No Boys PG properties (TSL 1, 2, 3) found near St. Xavier's College.</p>
                <p className="text-gray-500 mt-2">Please check back later or contact us for more information.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {boysPGAccommodations.map((accommodation) => (
                  <div key={accommodation.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-l-4 border-blue-500">
                    <img 
                      src={accommodation.main_image} 
                      alt={`${accommodation.name} - Boys PG near St. Xavier's College`}
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
                      <div className="flex items-center mb-4">
                        <MapPin className="h-4 w-4 text-blue-500 mr-2" />
                        <span className="text-sm text-gray-600">2 min walk to St. Xavier's College</span>
                      </div>
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
                Girls PG Properties near St. Xavier's College
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
                <p className="text-gray-600 text-lg">No Girls PG properties (TSL 4, 5) found near St. Xavier's College.</p>
                <p className="text-gray-500 mt-2">Please check back later or contact us for more information.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {girlsPGAccommodations.map((accommodation) => (
                  <div key={accommodation.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-l-4 border-pink-500">
                    <img 
                      src={accommodation.main_image} 
                      alt={`${accommodation.name} - Girls PG near St. Xavier's College`}
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
                      <div className="flex items-center mb-4">
                        <MapPin className="h-4 w-4 text-pink-500 mr-2" />
                        <span className="text-sm text-gray-600">2 min walk to St. Xavier's College</span>
                      </div>
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

      {/* College Facilities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-skyliving-700">
              College Facilities & Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-skyliving-700">Location Benefits</h3>
                <ul className="space-y-3">
                  {collegeFeatures.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-red-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-skyliving-700">Campus Access</h3>
                <ul className="space-y-3">
                  {collegeFeatures.slice(4).map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-red-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-skyliving-700">
              What St. Xavier's College Students Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-skyliving-700">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.course}</div>
                  </div>
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
            title: "GLS University PG",
            subtitle: "Law & Management",
            description: "Premium accommodation for GLS University students just 5 minutes walk away.",
            link: "/student-accommodation-gls-university",
            type: "university"
          },
          {
            title: "Navrangpura PG",
            subtitle: "Educational hub",
            description: "Central location in Navrangpura with access to multiple colleges.",
            link: "/navrangpura-pg-accommodation",
            type: "location"
          },
          {
            title: "Nirma University PG",
            subtitle: "Engineering & Tech",
            description: "Modern accommodation for Nirma University students with tech facilities.",
            link: "/pg-near-nirma-university",
            type: "university"
          },
          {
            title: "Vaishnodevi Circle PG",
            subtitle: "SG Highway area",
            description: "Premium student housing near Vaishnodevi Circle.",
            link: "/vaishnodevi-circle-student-housing",
            type: "location"
          }
        ]}
        className="bg-white"
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-800 to-orange-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Live Just 2 Minutes from St. Xavier's College?
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Join hundreds of St. Xavier's College students who call The Sky Living home
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                <Link to="/contact">Contact Us Today</Link>
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

export default StXaviersCollegePG;