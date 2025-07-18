import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, ArrowRight, CheckCircle, BookOpen, Users, Building } from 'lucide-react';
import { useMetaTags } from '@/hooks/useMetaTags';
import { StructuredData } from '@/components/seo/StructuredData';
import { FAQSection } from '@/components/seo/FAQSection';
import { RelatedPages } from '@/components/seo/RelatedPages';
import { getAllAccommodations } from '@/services/accommodationService';
import { Accommodation } from '@/types/accommodation';

const AdaniUniversityPG = () => {
  const [girlsPGAccommodations, setGirlsPGAccommodations] = useState<Accommodation[]>([]);
  const [boysPGAccommodations, setBoysPGAccommodations] = useState<Accommodation[]>([]);
  const [loading, setLoading] = useState(true);

  useMetaTags({
    title: 'Best PG near Adani University | Student Accommodation in Ahmedabad',
    description: 'Premium PG accommodation near Adani University, Ahmedabad. Perfect for engineering, business, and design students. Modern amenities, AC rooms, food, Wi-Fi, and excellent connectivity. Book your PG near Adani University today!',
    image: 'https://lovable.dev/opengraph-image-p98pqg.png',
    url: 'https://theskyliving.co.in/adani-university-student-accommodation',
    canonical: 'https://theskyliving.co.in/adani-university-student-accommodation'
  });

  const businessData = {
    name: 'The Sky Living near Adani University',
    description: 'Premium PG accommodation near Adani University, Ahmedabad. Perfect for engineering, business, and design students with modern amenities and excellent connectivity.',
    url: 'https://theskyliving.co.in/adani-university-student-accommodation',
    telephone: '+91-9876543210',
    email: 'info@theskyliving.co.in',
    address: {
      streetAddress: 'Near Adani University Campus',
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
      postalCode: '382421',
      addressCountry: 'IN'
    },
    image: 'https://lovable.dev/opengraph-image-p98pqg.png',
    priceRange: '₹₹',
    openingHours: ['Mo-Su 00:00-23:59']
  };

  useEffect(() => {
    const fetchAdaniUniversityAccommodations = async () => {
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
        console.error('Error fetching Adani University accommodations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAdaniUniversityAccommodations();
  }, []);

  const adaniUniversityPrograms = [
    {
      title: "Engineering Programs",
      description: "Computer Science, Mechanical, Civil, Electrical Engineering",
      icon: "⚙️"
    },
    {
      title: "Business Programs",
      description: "MBA, BBA, Commerce, and Management courses",
      icon: "💼"
    },
    {
      title: "Design Programs",
      description: "Fashion Design, Interior Design, Architecture",
      icon: "🎨"
    },
    {
      title: "Science Programs",
      description: "Applied Sciences, Research, and Innovation",
      icon: "🔬"
    }
  ];

  const nearbyAttractions = [
    {
      name: "Adani University Campus",
      distance: "5 km",
      description: "Modern campus with state-of-the-art facilities",
      icon: "🎓"
    },
    {
      name: "Shantigram",
      distance: "8 km",
      description: "Peaceful residential area",
      icon: "🏘️"
    },
    {
      name: "Gandhinagar",
      distance: "15 km",
      description: "Gujarat's capital city",
      icon: "🏛️"
    },
    {
      name: "Ahmedabad Airport",
      distance: "45 km",
      description: "International airport connectivity",
      icon: "✈️"
    }
  ];

  const adaniUniversityFeatures = [
    "Close to Adani University campus",
    "Modern infrastructure and facilities",
    "Excellent academic environment",
    "Industry-connected programs",
    "Research and innovation focus",
    "International collaborations",
    "State-of-the-art laboratories",
    "Professional development opportunities"
  ];

  const accommodationBenefits = [
    "Quick access to university campus",
    "Study-friendly environment",
    "High-speed internet for research",
    "Quiet surroundings for concentration",
    "Modern amenities and facilities",
    "Safe and secure accommodation",
    "Nutritious meals for students",
    "24/7 support and assistance"
  ];

  const uniqueFeatures = [
    {
      title: "Academic Excellence",
      description: "Environment conducive to academic success",
      icon: "📚"
    },
    {
      title: "Industry Connect",
      description: "Close to business and industrial areas",
      icon: "🏭"
    },
    {
      title: "Modern Living",
      description: "Contemporary amenities for comfort",
      icon: "🏠"
    },
    {
      title: "Career Growth",
      description: "Proximity to internship and job opportunities",
      icon: "📈"
    }
  ];

  const testimonials = [
    {
      name: "Arjun Patel",
      course: "Computer Science Engineering",
      text: "Living at The Sky Living near Adani University has been amazing! The modern facilities and study environment are perfect for my engineering studies. Great connectivity to campus too.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      course: "MBA Student",
      text: "The professional environment at The Sky Living is ideal for MBA students. The facilities support both academic work and networking with fellow business students.",
      rating: 5
    },
    {
      name: "Karan Modi",
      course: "Design Student",
      text: "As a design student, I appreciate the creative environment and modern amenities. The Sky Living provides the perfect balance of comfort and inspiration.",
      rating: 5
    }
  ];

  return (
    <div className="pt-20">
      <StructuredData type="LocalBusiness" data={businessData} />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-800 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-heading">
              Best PG near <span className="text-yellow-400">Adani University</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Premium student accommodation • Modern facilities • Academic excellence
            </p>
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-yellow-400 mr-2" />
                <span className="text-lg">5 km from campus</span>
              </div>
              <div className="flex items-center">
                <Building className="h-6 w-6 text-yellow-400 mr-2" />
                <span className="text-lg">Modern facilities</span>
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

      {/* Adani University Programs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-skyliving-700">
              Perfect for Adani University Students
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {adaniUniversityPrograms.map((program, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-4xl mb-4">{program.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-skyliving-700">{program.title}</h3>
                  <p className="text-gray-600">{program.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-skyliving-700">
              Key Locations near Adani University
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {nearbyAttractions.map((attraction, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="text-4xl mb-4">{attraction.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-skyliving-700">{attraction.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{attraction.distance}</p>
                  <p className="text-gray-600 text-sm">{attraction.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Unique Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-skyliving-700">
              Why Choose Us for Adani University Students?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {uniqueFeatures.map((feature, index) => (
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

      {/* Girls PG Properties Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-pink-700">
                Girls PG Properties near Adani University
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
                <p className="text-gray-600 text-lg">No Girls PG properties (TSL 7) found near Adani University.</p>
                <p className="text-gray-500 mt-2">Please check back later or contact us for more information.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {girlsPGAccommodations.map((accommodation) => (
                  <div key={accommodation.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-l-4 border-pink-500">
                    <img 
                      src={accommodation.main_image} 
                      alt={`${accommodation.name} - Girls PG near Adani University`}
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
                        <span className="text-sm text-gray-600">Perfect for Adani University</span>
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

      {/* Boys PG Properties Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-blue-700">
                Boys PG Properties near Adani University
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
                      alt={`${accommodation.name} - Boys PG near Adani University`}
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
                        <span className="text-sm text-gray-600">Perfect for Adani University</span>
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
                    <div className="flex items-center mb-4">
                      <MapPin className="h-4 w-4 text-blue-500 mr-2" />
                      <span className="text-sm text-gray-600">Perfect for Adani University</span>
                    </div>
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-skyliving-700">
              Benefits for Adani University Students
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-skyliving-700">University Features</h3>
                <ul className="space-y-3">
                  {adaniUniversityFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-skyliving-700">Accommodation Benefits</h3>
                <ul className="space-y-3">
                  {accommodationBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-skyliving-700">
              What Adani University Students Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
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
            title: "Karnavati University PG",
            subtitle: "Design & Engineering",
            description: "Peaceful accommodation for Karnavati University students in Uvarsad.",
            link: "/karnavati-university-student-housing",
            type: "university"
          },
          {
            title: "Nirma University PG",
            subtitle: "Tech-friendly",
            description: "Modern accommodation for Nirma University students with tech-friendly amenities.",
            link: "/pg-near-nirma-university",
            type: "university"
          },
          {
            title: "St. Xavier's College PG",
            subtitle: "2-minute walk",
            description: "Premium PG accommodation just 2 minutes walk from St. Xavier's College campus.",
            link: "/pg-near-st-xaviers-college",
            type: "university"
          },
          {
            title: "Navrangpura PG",
            subtitle: "Premium location",
            description: "Premium PG accommodation in Navrangpura, Ahmedabad's most sought-after area.",
            link: "/navrangpura-pg-accommodation",
            type: "location"
          }
        ]}
        className="bg-white"
      />

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions about PG near Adani University"
        faqs={[
          {
            question: "What is the best PG near Adani University?",
            answer: "The Sky Living offers the best PG accommodation near Adani University with premium facilities including AC rooms, food service, Wi-Fi, and modern amenities. Our properties are strategically located with excellent connectivity to the campus."
          },
          {
            question: "How far is The Sky Living from Adani University?",
            answer: "Our properties are located within 5-10 km of Adani University campus, ensuring convenient access for students. We provide transportation facilities and the area has good connectivity options."
          },
          {
            question: "What facilities are available for Adani University students?",
            answer: "Our PG offers AC rooms, nutritious meals, high-speed Wi-Fi, study areas, laundry service, 24/7 security, and recreational facilities. The environment is designed to support academic excellence and personal growth."
          },
          {
            question: "Are there study spaces available?",
            answer: "Yes, we provide dedicated study areas, high-speed internet, and a quiet environment conducive to learning. Our facilities are designed to support the academic needs of university students."
          },
          {
            question: "What are the charges for PG near Adani University?",
            answer: "Our PG charges are competitive and include accommodation, meals, Wi-Fi, and all amenities. We offer different room types to suit various budgets. Contact us for detailed pricing and availability."
          },
          {
            question: "Is the area safe for students?",
            answer: "Yes, the area is very safe with 24/7 security, CCTV surveillance, and well-lit surroundings. We maintain strict safety protocols and have a secure environment for all students."
          }
        ]}
        className="bg-gray-50"
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-indigo-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Excel at Adani University?
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Join Adani University students who have chosen The Sky Living for their academic journey
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

export default AdaniUniversityPG;