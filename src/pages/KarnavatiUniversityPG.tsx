import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, ArrowRight, CheckCircle, BookOpen, Users, TreePine } from 'lucide-react';
import { useMetaTags } from '@/hooks/useMetaTags';
import { StructuredData } from '@/components/seo/StructuredData';
import { FAQSection } from '@/components/seo/FAQSection';
import { RelatedPages } from '@/components/seo/RelatedPages';
import { getAllAccommodations } from '@/services/accommodationService';
import { Accommodation } from '@/types/accommodation';

const KarnavatiUniversityPG = () => {
  const [boysPGAccommodations, setBoysPGAccommodations] = useState<Accommodation[]>([]);
  const [girlsPGAccommodations, setGirlsPGAccommodations] = useState<Accommodation[]>([]);
  const [loading, setLoading] = useState(true);

  useMetaTags({
    title: 'Best PG near Karnavati University Uvarsad | Student Housing Gandhinagar',
    description: 'Premium PG near Karnavati University, Uvarsad, Gandhinagar. Perfect for Engineering, Management, and Design students. Modern amenities, AC rooms, food, Wi-Fi, and peaceful environment. Book your PG near Karnavati University today!',
    image: 'https://lovable.dev/opengraph-image-p98pqg.png',
    url: 'https://theskyliving.co.in/karnavati-university-student-housing',
    canonical: 'https://theskyliving.co.in/karnavati-university-student-housing'
  });

  const businessData = {
    name: 'The Sky Living near Karnavati University',
    description: 'Premium student accommodation near Karnavati University, Uvarsad, Gandhinagar. Perfect for Engineering, Management, and Design students with modern amenities and peaceful campus environment.',
    url: 'https://theskyliving.co.in/karnavati-university-student-housing',
    telephone: '+91-9876543210',
    email: 'info@theskyliving.co.in',
    address: {
      streetAddress: 'Uvarsad, Near Karnavati University',
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
    const fetchKarnavatiAccommodations = async () => {
      try {
        const allAccommodations = await getAllAccommodations();
        console.log('All accommodations fetched:', allAccommodations);
        console.log('Total accommodations:', allAccommodations.length);
        
        // Filter for Boys PG (TSL 6) - Karnavati University is in Uvarsad area
        const boysPGProperties = allAccommodations.filter(acc => {
          console.log('Checking accommodation for Boys PG:', acc.name, 'Code:', acc.code);
          if (!acc.code) return false;
          
          const codeNormalized = acc.code.replace(/\s+/g, '').toUpperCase();
          const isMatch = codeNormalized === 'TSL6' || acc.code.includes('TSL 6');
          console.log('Boys PG match:', isMatch, 'for code:', acc.code);
          return isMatch;
        });
        
        // For now, there are no dedicated Girls PG properties for Karnavati University
        // You can add TSL codes here when Girls PG properties are available
        const girlsPGProperties = allAccommodations.filter(acc => {
          console.log('Checking accommodation for Girls PG:', acc.name, 'Code:', acc.code);
          if (!acc.code) return false;
          
          // Currently no specific TSL codes for Girls PG near Karnavati University
          // This can be updated when girls PG properties are added
          return false;
        });
        
        console.log('Boys PG properties:', boysPGProperties);
        console.log('Boys PG count:', boysPGProperties.length);
        console.log('Girls PG properties:', girlsPGProperties);
        console.log('Girls PG count:', girlsPGProperties.length);
        
        setBoysPGAccommodations(boysPGProperties);
        setGirlsPGAccommodations(girlsPGProperties);
      } catch (error) {
        console.error('Error fetching accommodations near Karnavati University:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchKarnavatiAccommodations();
  }, []);

  const karnavatiAdvantages = [
    {
      title: "Engineering Excellence",
      description: "Perfect for Karnavati's innovative engineering programs",
      icon: "⚙️"
    },
    {
      title: "Design Focus",
      description: "Ideal for design and architecture students",
      icon: "🎨"
    },
    {
      title: "Management Studies",
      description: "Great for MBA and management students",
      icon: "📊"
    },
    {
      title: "Peaceful Environment",
      description: "Quiet Uvarsad location perfect for studies",
      icon: "🌿"
    }
  ];

  const karnavatiPrograms = [
    { 
      school: "School of Engineering", 
      programs: "B.Tech in Computer, Mechanical, Civil, Electronics, IT", 
      duration: "4 Years",
      specialty: "Engineering & Technology"
    },
    { 
      school: "School of Management", 
      programs: "MBA, BBA, Executive MBA", 
      duration: "2-3 Years",
      specialty: "Business & Management"
    },
    { 
      school: "School of Design", 
      programs: "B.Des, M.Des in various specializations", 
      duration: "4 Years",
      specialty: "Design & Architecture"
    },
    { 
      school: "School of Science", 
      programs: "M.Sc in Physics, Chemistry, Mathematics", 
      duration: "2 Years",
      specialty: "Pure Sciences"
    },
    { 
      school: "School of Liberal Arts", 
      programs: "BA, MA in English, Psychology, Economics", 
      duration: "3 Years",
      specialty: "Arts & Literature"
    },
    { 
      school: "School of Law", 
      programs: "BA LLB, BBA LLB, LLM", 
      duration: "5 Years",
      specialty: "Legal Studies"
    }
  ];

  const karnavatiFeatures = [
    "Close to Karnavati University campus",
    "Perfect for Engineering and Design students",
    "Near university's modern facilities",
    "Walking distance to campus libraries",
    "Close to sports and recreation centers",
    "Near student activity areas",
    "Easy access to university transport",
    "Peaceful Uvarsad environment"
  ];

  const locationBenefits = [
    "Quiet and peaceful study environment",
    "Green and eco-friendly surroundings",
    "Less crowded compared to city centers",
    "Clean and pollution-free air",
    "Safe and secure residential area",
    "Close to nature and open spaces",
    "Affordable living costs",
    "Good connectivity to Ahmedabad and Gandhinagar"
  ];

  const uniqueFeatures = [
    {
      title: "Modern Campus",
      description: "State-of-the-art facilities and infrastructure",
      icon: "🏢"
    },
    {
      title: "Industry Connect",
      description: "Strong industry partnerships and placements",
      icon: "🤝"
    },
    {
      title: "Innovation Hub",
      description: "Focus on research and innovation",
      icon: "💡"
    },
    {
      title: "Global Exposure",
      description: "International collaborations and exchanges",
      icon: "🌍"
    }
  ];

  const testimonials = [
    {
      name: "Raj Patel",
      course: "B.Tech Computer Engineering",
      text: "The Sky Living near Karnavati University is perfect for engineering students. The peaceful environment and modern facilities make it ideal for focused studies.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      course: "B.Des Product Design",
      text: "Great place for design students! The creative environment and proximity to university make it perfect for my design projects and studies.",
      rating: 5
    },
    {
      name: "Arjun Modi",
      course: "MBA Student",
      text: "Living at The Sky Living has been amazing. The quiet Uvarsad location is perfect for management studies and group projects.",
      rating: 5
    }
  ];

  return (
    <div className="pt-20">
      <StructuredData type="LocalBusiness" data={businessData} />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-green-900 to-teal-900 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-heading">
              Best PG near <span className="text-yellow-400">Karnavati University</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Peaceful Uvarsad location • Perfect for Engineering, Design & Management students
            </p>
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="flex items-center">
                <TreePine className="h-6 w-6 text-yellow-400 mr-2" />
                <span className="text-lg">Peaceful</span>
              </div>
              <div className="flex items-center">
                <Users className="h-6 w-6 text-yellow-400 mr-2" />
                <span className="text-lg">Modern campus</span>
              </div>
              <div className="flex items-center">
                <Star className="h-6 w-6 text-yellow-400 mr-2" />
                <span className="text-lg">4.8 rating</span>
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

      {/* University Advantages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-skyliving-700">
              Perfect for Karnavati University Students
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {karnavatiAdvantages.map((advantage, index) => (
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

      {/* University Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-skyliving-700">
              Why Choose Karnavati University?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {uniqueFeatures.map((feature, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-skyliving-700">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Karnavati Programs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-skyliving-700">
              Karnavati University Schools & Programs
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {karnavatiPrograms.map((program, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <BookOpen className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-skyliving-700 text-sm">{program.school}</h3>
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

      {/* Boys PG Properties Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-blue-700">
                Boys PG Properties near Karnavati University
              </h2>
              <p className="text-lg text-gray-600">TSL 6 - Premium accommodations for male students in Uvarsad</p>
            </div>
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
                <p className="text-gray-600 mt-4">Loading boys PG properties...</p>
              </div>
            ) : boysPGAccommodations.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No Boys PG properties (TSL 6) found near Karnavati University.</p>
                <p className="text-gray-500 mt-2">Please check back later or contact us for more information.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {boysPGAccommodations.map((accommodation) => (
                  <div key={accommodation.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-l-4 border-blue-500">
                    <img 
                      src={accommodation.main_image} 
                      alt={`${accommodation.name} - Boys PG near Karnavati University`}
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
                        <span className="text-sm text-gray-600">Near Karnavati University, Uvarsad</span>
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
                <h3 className="text-2xl font-semibold mb-6 text-skyliving-700">University Benefits</h3>
                <ul className="space-y-3">
                  {karnavatiFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-skyliving-700">Location Benefits</h3>
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
              What Karnavati University Students Say
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
            title: "Uvarsad PG",
            subtitle: "Peaceful environment",
            description: "Serene PG accommodation in Uvarsad village - perfect for students seeking peaceful study environment.",
            link: "/uvarsad-pg-accommodation",
            type: "location"
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
            title: "GLS University PG",
            subtitle: "Law & Management",
            description: "Perfect for GLS University students pursuing Law, Management, and Commerce programs.",
            link: "/student-accommodation-gls-university",
            type: "university"
          }
        ]}
        className="bg-white"
      />

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions about PG near Karnavati University"
        faqs={[
          {
            question: "What is the best PG near Karnavati University?",
            answer: "The Sky Living offers the best PG accommodation near Karnavati University in Uvarsad with premium facilities including AC rooms, food service, Wi-Fi, and modern amenities. Our peaceful location is perfect for engineering, design, and management students."
          },
          {
            question: "How far is The Sky Living from Karnavati University?",
            answer: "Our Uvarsad property is located very close to Karnavati University campus, making it extremely convenient for students to attend classes and access university facilities."
          },
          {
            question: "What facilities are available for Karnavati University students?",
            answer: "Our PG near Karnavati University offers AC rooms, nutritious meals, high-speed Wi-Fi, study areas, laundry service, 24/7 security, and recreational facilities. The peaceful Uvarsad environment is perfect for focused studies."
          },
          {
            question: "Is the location suitable for design and engineering students?",
            answer: "Yes, our location is perfect for both design and engineering students. The peaceful environment helps with creative work and technical studies, while modern amenities support project work and collaboration."
          },
          {
            question: "What are the charges for PG near Karnavati University?",
            answer: "Our PG charges near Karnavati University are competitive and include accommodation, meals, Wi-Fi, and all amenities. Contact us for detailed pricing and availability."
          },
          {
            question: "How is the connectivity from Uvarsad to other areas?",
            answer: "Uvarsad has good connectivity to Ahmedabad and Gandhinagar with regular bus services and private transport. The location offers a perfect balance of peaceful study environment and accessibility."
          }
        ]}
        className="bg-white"
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-teal-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience Peaceful Living near Karnavati University?
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Join Karnavati University students enjoying premium accommodation in serene Uvarsad
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

export default KarnavatiUniversityPG;