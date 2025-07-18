import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, ArrowRight, CheckCircle, BookOpen, Zap } from 'lucide-react';
import { useMetaTags } from '@/hooks/useMetaTags';
import { StructuredData } from '@/components/seo/StructuredData';
import { RelatedPages } from '@/components/seo/RelatedPages';
import { getAllAccommodations } from '@/services/accommodationService';
import { Accommodation } from '@/types/accommodation';

const NirmaUniversityPG = () => {
  const [girlsPGAccommodations, setGirlsPGAccommodations] = useState<Accommodation[]>([]);
  const [boysPGAccommodations, setBoysPGAccommodations] = useState<Accommodation[]>([]);
  const [loading, setLoading] = useState(true);

  useMetaTags({
    title: 'Best PG near Nirma University Ahmedabad | Student Housing Vaishnodevi Circle',
    description: 'Premium PG near Nirma University, Vaishnodevi Circle, Ahmedabad. Just 9 minutes walk to campus. Perfect for Engineering, Management, and Law students. Modern amenities, AC rooms, food, Wi-Fi. Book your PG near Nirma University today!',
    image: 'https://lovable.dev/opengraph-image-p98pqg.png',
    url: 'https://theskyliving.co.in/pg-near-nirma-university',
    canonical: 'https://theskyliving.co.in/pg-near-nirma-university'
  });

  const businessData = {
    name: 'The Sky Living near Nirma University',
    description: 'Premium student accommodation just 9 minutes walk from Nirma University, Vaishnodevi Circle. Perfect for Engineering, Management, and Law students with modern amenities and tech-friendly environment.',
    url: 'https://theskyliving.co.in/pg-near-nirma-university',
    telephone: '+91-9876543210',
    email: 'info@theskyliving.co.in',
    address: {
      streetAddress: 'Vaishnodevi Circle, SG Highway, Near Nirma University',
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
      postalCode: '382481',
      addressCountry: 'IN'
    },
    image: 'https://lovable.dev/opengraph-image-p98pqg.png',
    priceRange: '₹₹',
    openingHours: ['Mo-Su 00:00-23:59']
  };

  useEffect(() => {
    const fetchNirmaAccommodations = async () => {
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
        console.error('Error fetching accommodations near Nirma University:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNirmaAccommodations();
  }, []);

  const nirmaAdvantages = [
    {
      title: "Engineering Excellence",
      description: "Perfect for Nirma's renowned engineering programs",
      icon: "⚙️"
    },
    {
      title: "Tech-Friendly Environment",
      description: "High-speed Wi-Fi and tech study spaces",
      icon: "💻"
    },
    {
      title: "Management Focus",
      description: "Ideal for MBA and management students",
      icon: "📈"
    },
    {
      title: "Walking Distance",
      description: "Just 9 minutes walk to Nirma University",
      icon: "🚶"
    }
  ];

  const nirmaPrograms = [
    { 
      institute: "Institute of Technology", 
      programs: "BE in Computer, Mechanical, Civil, Electrical, Electronics", 
      duration: "4 Years",
      specialty: "Engineering"
    },
    { 
      institute: "Institute of Management", 
      programs: "MBA, PGDM, Executive MBA", 
      duration: "2 Years",
      specialty: "Management"
    },
    { 
      institute: "Institute of Law", 
      programs: "BA LLB, BBA LLB, LLM", 
      duration: "5 Years",
      specialty: "Law"
    },
    { 
      institute: "Institute of Architecture", 
      programs: "B.Arch, M.Arch", 
      duration: "5 Years",
      specialty: "Architecture"
    },
    { 
      institute: "Institute of Pharmacy", 
      programs: "B.Pharm, M.Pharm, Pharm.D", 
      duration: "4 Years",
      specialty: "Pharmacy"
    },
    { 
      institute: "Institute of Science", 
      programs: "M.Sc in various disciplines", 
      duration: "2 Years",
      specialty: "Science"
    }
  ];

  const nirmaFeatures = [
    "9 minutes walk to Nirma University",
    "Perfect for Engineering and Management students",
    "Near Nirma's modern campus",
    "Close to university libraries and labs",
    "Walking distance to sports complex",
    "Near student activity centers",
    "Easy access to university transport",
    "Close to tech parks and industry"
  ];

  const techBenefits = [
    "High-speed fiber internet for engineering projects",
    "24/7 power backup for uninterrupted studies",
    "Tech discussion areas for group projects",
    "Printer and scanner facilities",
    "Conference rooms for presentations",
    "Study pods with power outlets",
    "Coding-friendly environment",
    "Industry professional networking opportunities"
  ];

  const locationBenefits = [
    "Located on SG Highway tech corridor",
    "Near major IT companies and startups",
    "Close to Adani Elysium premium project",
    "Excellent connectivity to Ahmedabad city",
    "Near shopping malls and restaurants",
    "Close to hospitals and healthcare",
    "Safe and secure gated community area",
    "Regular transport to university"
  ];

  const testimonials = [
    {
      name: "Karan Patel",
      course: "BE Computer Engineering",
      text: "The Sky Living is perfect for Nirma engineering students. The tech-friendly environment and proximity to campus make it ideal for my studies.",
      rating: 5
    },
    {
      name: "Sneha Joshi",
      course: "MBA Student",
      text: "Great place for management students! The modern amenities and business-friendly environment help me focus on my MBA studies.",
      rating: 5
    },
    {
      name: "Arjun Sharma",
      course: "BE Mechanical Engineering",
      text: "Living here has been amazing. The high-speed internet and study spaces are perfect for engineering projects and group work.",
      rating: 5
    }
  ];

  return (
    <div className="pt-20">
      <StructuredData type="LocalBusiness" data={businessData} />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-heading">
              Best PG near <span className="text-yellow-400">Nirma University</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Just 9 minutes walk to campus • Perfect for Engineering, Management & Law students
            </p>
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-yellow-400 mr-2" />
                <span className="text-lg">9 min walk</span>
              </div>
              <div className="flex items-center">
                <Zap className="h-6 w-6 text-yellow-400 mr-2" />
                <span className="text-lg">Tech-friendly</span>
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

      {/* Nirma Advantages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-skyliving-700">
              Perfect for Nirma University Students
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {nirmaAdvantages.map((advantage, index) => (
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

      {/* Nirma Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-skyliving-700">
              Nirma University Institutes & Programs
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nirmaPrograms.map((program, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <BookOpen className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-skyliving-700 text-sm">{program.institute}</h3>
                      <p className="text-xs text-gray-600">{program.duration} • {program.specialty}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{program.programs}</p>
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
                Girls PG Properties near Nirma University
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
                <p className="text-gray-600 text-lg">No Girls PG properties (TSL 7) found near Nirma University.</p>
                <p className="text-gray-500 mt-2">Please check back later or contact us for more information.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {girlsPGAccommodations.map((accommodation) => (
                  <div key={accommodation.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-l-4 border-pink-500">
                    <img 
                      src={accommodation.main_image} 
                      alt={`${accommodation.name} - Girls PG near Nirma University`}
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
                        <span className="text-sm text-gray-600">9 min walk to Nirma University</span>
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
                Boys PG Properties near Nirma University
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
                      alt={`${accommodation.name} - Boys PG near Nirma University`}
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
                        <span className="text-sm text-gray-600">9 min walk to Nirma University</span>
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
                      <span className="text-sm text-gray-600">9 min walk to Nirma University</span>
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

      {/* Tech Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-skyliving-700">
              Tech-Friendly Environment for Nirma Students
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-skyliving-700">University Benefits</h3>
                <ul className="space-y-3">
                  {nirmaFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-skyliving-700">Tech Facilities</h3>
                <ul className="space-y-3">
                  {techBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-skyliving-700">
              Premium Vaishnodevi Circle Location
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {locationBenefits.map((benefit, index) => (
                <div key={index} className="text-center p-4 bg-purple-50 rounded-lg">
                  <CheckCircle className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <p className="text-gray-700 text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-skyliving-700">
              What Nirma University Students Say
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
            title: "GLS University PG",
            subtitle: "Law & Management",
            description: "Premium accommodation for GLS University students in Navrangpura.",
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
            title: "Adani University PG",
            subtitle: "Engineering & Tech",
            description: "Specialized accommodation for Adani University students in Ahmedabad.",
            link: "/pg-near-adani-university",
            type: "university"
          },
          {
            title: "St. Xavier's College PG",
            subtitle: "Commerce & Arts",
            description: "Premium PG accommodation for St. Xavier's College students.",
            link: "/pg-near-st-xaviers-college",
            type: "university"
          }
        ]}
        className="bg-gray-50"
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-800 to-indigo-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Live 9 Minutes from Nirma University?
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Join Nirma University students enjoying premium tech-friendly accommodation
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

export default NirmaUniversityPG;