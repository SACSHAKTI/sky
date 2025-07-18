import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, ArrowRight, CheckCircle, TreePine, Building2, Users } from 'lucide-react';
import { useMetaTags } from '@/hooks/useMetaTags';
import { StructuredData } from '@/components/seo/StructuredData';
import { FAQSection } from '@/components/seo/FAQSection';
import { RelatedPages } from '@/components/seo/RelatedPages';
import { getAllAccommodations } from '@/services/accommodationService';
import { Accommodation } from '@/types/accommodation';

const UvarsadPG = () => {
  const [boysPGAccommodations, setBoysPGAccommodations] = useState<Accommodation[]>([]);
  const [loading, setLoading] = useState(true);

  useMetaTags({
    title: 'Best PG in Uvarsad Gandhinagar | Student Accommodation near Karnavati University',
    description: 'Premium PG in Uvarsad, Gandhinagar. Perfect for students near Karnavati University, Gift City, and Gandhinagar. Peaceful environment, modern amenities, AC rooms, food, Wi-Fi. Book your PG in Uvarsad today!',
    image: 'https://lovable.dev/opengraph-image-p98pqg.png',
    url: 'https://theskyliving.co.in/uvarsad-pg-accommodation',
    canonical: 'https://theskyliving.co.in/uvarsad-pg-accommodation'
  });

  const businessData = {
    name: 'The Sky Living Uvarsad',
    description: 'Premium PG accommodation in Uvarsad, Gandhinagar. Perfect for students and professionals near Karnavati University, Gift City, and Gandhinagar with modern amenities and peaceful environment.',
    url: 'https://theskyliving.co.in/uvarsad-pg-accommodation',
    telephone: '+91-9876543210',
    email: 'info@theskyliving.co.in',
    address: {
      streetAddress: 'Uvarsad Village, Near Karnavati University',
      addressLocality: 'Gandhinagar',
      addressRegion: 'Gujarat',
      postalCode: '382422',
      addressCountry: 'IN'
    },
    image: 'https://lovable.dev/opengraph-image-p98pqg.png',
    priceRange: '₹₹',
    openingHours: ['Mo-Su 00:00-23:59']
  };

  useEffect(() => {
    const fetchUvarsadAccommodations = async () => {
      try {
        const allAccommodations = await getAllAccommodations();
        console.log('All accommodations fetched:', allAccommodations);
        console.log('Total accommodations:', allAccommodations.length);
        
        // Filter for Boys PG (TSL 6) - Uvarsad properties
        const boysPGProperties = allAccommodations.filter(acc => {
          console.log('Checking accommodation for Boys PG:', acc.name, 'Code:', acc.code);
          if (!acc.code) return false;
          
          const codeNormalized = acc.code.replace(/\s+/g, '').toUpperCase();
          const isMatch = codeNormalized === 'TSL6' || acc.code.includes('TSL 6');
          console.log('Boys PG match:', isMatch, 'for code:', acc.code);
          return isMatch;
        });
        
        console.log('Boys PG properties (TSL 6):', boysPGProperties);
        console.log('Boys PG count:', boysPGProperties.length);
        
        setBoysPGAccommodations(boysPGProperties);
      } catch (error) {
        console.error('Error fetching Uvarsad accommodations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUvarsadAccommodations();
  }, []);

  const uvarsadAdvantages = [
    {
      title: "Peaceful Environment",
      description: "Quiet village setting perfect for studies",
      icon: "🌿"
    },
    {
      title: "Modern Infrastructure",
      description: "Well-planned development with modern amenities",
      icon: "🏢"
    },
    {
      title: "University Proximity",
      description: "Close to Karnavati University campus",
      icon: "🎓"
    },
    {
      title: "Green Surroundings",
      description: "Eco-friendly environment with clean air",
      icon: "🌳"
    }
  ];

  const nearbyAttractions = [
    {
      name: "Karnavati University",
      distance: "2 km",
      description: "Premier university with modern facilities",
      icon: "🎓"
    },
    {
      name: "Gift City",
      distance: "15 km",
      description: "Gujarat's financial and IT hub",
      icon: "🏢"
    },
    {
      name: "Gandhinagar Capital",
      distance: "25 km",
      description: "Gujarat's capital city",
      icon: "🏛️"
    },
    {
      name: "Ahmedabad Airport",
      distance: "35 km",
      description: "International airport connectivity",
      icon: "✈️"
    }
  ];

  const uvarsadFeatures = [
    "Peaceful village environment",
    "Modern PG facilities",
    "Close to Karnavati University",
    "Green and eco-friendly surroundings",
    "Well-connected to Gandhinagar",
    "Clean and pollution-free air",
    "Safe and secure area",
    "Affordable living costs"
  ];

  const locationBenefits = [
    "Away from city noise and pollution",
    "Ideal for focused studies",
    "Strong community feeling",
    "Close to nature and open spaces",
    "Good connectivity to major cities",
    "Modern infrastructure development",
    "Safe neighborhood",
    "Cost-effective living"
  ];

  const uniqueFeatures = [
    {
      title: "Village Life",
      description: "Experience peaceful village living",
      icon: "🏡"
    },
    {
      title: "Modern Amenities",
      description: "All modern facilities in rural setting",
      icon: "🔧"
    },
    {
      title: "Educational Hub",
      description: "Growing educational center",
      icon: "📚"
    },
    {
      title: "Future Growth",
      description: "Rapid development and growth potential",
      icon: "📈"
    }
  ];

  const testimonials = [
    {
      name: "Ravi Patel",
      course: "Engineering Student",
      text: "Living in Uvarsad has been amazing! The peaceful environment is perfect for studies, and The Sky Living provides all modern amenities in this beautiful village setting.",
      rating: 5
    },
    {
      name: "Sneha Sharma",
      course: "MBA Student",
      text: "The Sky Living in Uvarsad offers the perfect balance of modern facilities and peaceful village life. Great for students who want to focus on their studies.",
      rating: 5
    },
    {
      name: "Karan Modi",
      course: "Design Student",
      text: "The green surroundings and clean air in Uvarsad provide great inspiration for my design work. Highly recommend The Sky Living for creative students.",
      rating: 5
    }
  ];

  return (
    <div className="pt-20">
      <StructuredData type="LocalBusiness" data={businessData} />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-green-800 to-emerald-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-heading">
              Best PG in <span className="text-yellow-400">Uvarsad, Gandhinagar</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Peaceful village living • Near Karnavati University • Modern amenities
            </p>
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="flex items-center">
                <TreePine className="h-6 w-6 text-yellow-400 mr-2" />
                <span className="text-lg">Eco-friendly</span>
              </div>
              <div className="flex items-center">
                <Building2 className="h-6 w-6 text-yellow-400 mr-2" />
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

      {/* Uvarsad Advantages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-skyliving-700">
              Why Choose Uvarsad for Your PG Stay?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {uvarsadAdvantages.map((advantage, index) => (
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

      {/* Nearby Attractions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-skyliving-700">
              Key Locations Near Uvarsad
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {nearbyAttractions.map((attraction, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="text-4xl mb-4">{attraction.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-skyliving-700">{attraction.name}</h3>
                  <p className="text-green-600 font-semibold mb-2">{attraction.distance}</p>
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
              Unique Features of Uvarsad Living
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

      {/* Boys PG Properties Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-blue-700">
                Boys PG Properties in Uvarsad
              </h2>
              <p className="text-lg text-gray-600">TSL 6 - Premium accommodations for male students in peaceful Uvarsad</p>
            </div>
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
                <p className="text-gray-600 mt-4">Loading boys PG properties...</p>
              </div>
            ) : boysPGAccommodations.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No Boys PG properties (TSL 6) found in Uvarsad.</p>
                <p className="text-gray-500 mt-2">Please check back later or contact us for more information.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {boysPGAccommodations.map((accommodation) => (
                  <div key={accommodation.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-l-4 border-blue-500">
                    <img 
                      src={accommodation.main_image} 
                      alt={`${accommodation.name} - Boys PG in Uvarsad`}
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
                        <span className="text-sm text-gray-600">Uvarsad, Gandhinagar</span>
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

      {/* Location Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-skyliving-700">
              Benefits of Living in Uvarsad
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-skyliving-700">Uvarsad Features</h3>
                <ul className="space-y-3">
                  {uvarsadFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-skyliving-700">Living Benefits</h3>
                <ul className="space-y-3">
                  {locationBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
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
              What Our Uvarsad Residents Say
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

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions about PG in Uvarsad"
        faqs={[
          {
            question: "What is the best PG in Uvarsad, Gandhinagar?",
            answer: "The Sky Living offers the best PG accommodation in Uvarsad with premium facilities including AC rooms, food service, Wi-Fi, and modern amenities. Our peaceful village location is perfect for students and professionals seeking a quiet environment."
          },
          {
            question: "How far is Uvarsad from Karnavati University?",
            answer: "Uvarsad is located very close to Karnavati University campus, approximately 2 km away. This makes it extremely convenient for students to attend classes and access university facilities."
          },
          {
            question: "What facilities are available in Uvarsad PG?",
            answer: "Our Uvarsad PG offers AC rooms, nutritious meals, high-speed Wi-Fi, study areas, laundry service, 24/7 security, and recreational facilities. The peaceful village environment is perfect for focused studies."
          },
          {
            question: "Is Uvarsad well-connected to other areas?",
            answer: "Yes, Uvarsad has good connectivity to Gandhinagar (25 km), Gift City (15 km), and Ahmedabad (40 km). Regular bus services and private transport options are available."
          },
          {
            question: "What are the charges for PG in Uvarsad?",
            answer: "Our PG charges in Uvarsad are very competitive and include accommodation, meals, Wi-Fi, and all amenities. The village location offers more affordable rates compared to city centers. Contact us for detailed pricing."
          },
          {
            question: "Is Uvarsad safe for students?",
            answer: "Yes, Uvarsad is a very safe village area with a strong community feeling. The area is well-lit, has good security, and maintains a peaceful environment ideal for students."
          }
        ]}
        className="bg-white"
      />

      {/* Related Pages Section */}
      <RelatedPages
        title="Explore Other Universities & Locations"
        pages={[
          {
            title: "Karnavati University PG",
            subtitle: "Design & Architecture",
            description: "Specialized accommodation for Karnavati University students in Uvarsad.",
            link: "/pg-near-karnavati-university",
            type: "university"
          },
          {
            title: "Adani University PG",
            subtitle: "Engineering & Tech",
            description: "Modern facilities for Adani University students in Ahmedabad.",
            link: "/pg-near-adani-university",
            type: "university"
          },
          {
            title: "Vaishnodevi Circle PG",
            subtitle: "SG Highway area",
            description: "Premium student housing near Vaishnodevi Circle with excellent connectivity.",
            link: "/vaishnodevi-circle-student-housing",
            type: "location"
          },
          {
            title: "Navrangpura PG",
            subtitle: "Educational hub",
            description: "Central location in Navrangpura with access to multiple universities.",
            link: "/navrangpura-pg-accommodation",
            type: "location"
          }
        ]}
        className="bg-gray-50"
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-emerald-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience Peaceful Village Living in Uvarsad?
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Join students and professionals enjoying modern amenities in serene Uvarsad village
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

export default UvarsadPG;