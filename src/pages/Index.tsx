import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import LiveInStyle from '../components/LiveInStyle';
import Hostels from '../components/Hostels';
import Services from '../components/Services';
import NearbyPlaces from '../components/NearbyPlaces';
import Testimonials from '../components/Testimonials';
import InstagramFeed from '../components/InstagramFeed';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, GraduationCap } from 'lucide-react';
import { StructuredData } from '@/components/seo/StructuredData';
import { Link } from 'react-router-dom';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'The Sky Living | Premium PG & Hostel Accommodations';
  }, []);

  const businessData = {
    name: 'The Sky Living',
    description: 'Premium PG and hostel accommodation in Ahmedabad. The Sky Living offers fully furnished, affordable PG in Ahmedabad, Boys PG, Girls PG near Navrangpura, Ahmedabad University, and CG Road with modern amenities and community living.',
    url: 'https://theskyliving.co.in',
    telephone: '+91-9876543210',
    email: 'info@theskyliving.co.in',
    address: {
      streetAddress: 'Navrangpura',
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
      postalCode: '380009',
      addressCountry: 'IN'
    },
    image: 'https://lovable.dev/opengraph-image-p98pqg.png',
    priceRange: '₹₹',
    openingHours: ['Mo-Su 00:00-23:59']
  };

  return (
    <div className="bg-white">
      <StructuredData type="LocalBusiness" data={businessData} />
      <Hero />
      <Stats />
      <LiveInStyle />
      <Hostels />
      <Services />
      <NearbyPlaces />
      <Testimonials />
      <InstagramFeed />
      
      {/* Location-Specific Accommodations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-skyliving-700">
                Find Your Perfect PG by Location
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover premium PG accommodations in Ahmedabad's prime locations, perfectly located near top universities and colleges.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Link 
                to="/navrangpura-pg-accommodation" 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="flex items-center mb-4">
                  <MapPin className="h-8 w-8 text-skyliving-600 mr-3" />
                  <div>
                    <h3 className="text-xl font-semibold text-skyliving-700 group-hover:text-skyliving-600">
                      Navrangpura PG
                    </h3>
                    <p className="text-gray-600 text-sm">Premium location</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Premium PG accommodation in Navrangpura, Ahmedabad's most sought-after area for students and professionals.
                </p>
                <div className="flex items-center text-skyliving-600 group-hover:text-skyliving-700">
                  <span className="text-sm font-medium">Explore Navrangpura PG</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </Link>

              <Link 
                to="/vaishnodevi-circle-student-housing" 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="flex items-center mb-4">
                  <MapPin className="h-8 w-8 text-skyliving-600 mr-3" />
                  <div>
                    <h3 className="text-xl font-semibold text-skyliving-700 group-hover:text-skyliving-600">
                      Vaishnodevi Circle PG
                    </h3>
                    <p className="text-gray-600 text-sm">SG Highway proximity</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Modern student housing near Vaishnodevi Circle with excellent connectivity to major areas in Ahmedabad.
                </p>
                <div className="flex items-center text-skyliving-600 group-hover:text-skyliving-700">
                  <span className="text-sm font-medium">Explore Vaishnodevi Circle PG</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </Link>

              <Link 
                to="/uvarsad-pg-accommodation" 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="flex items-center mb-4">
                  <MapPin className="h-8 w-8 text-skyliving-600 mr-3" />
                  <div>
                    <h3 className="text-xl font-semibold text-skyliving-700 group-hover:text-skyliving-600">
                      Uvarsad PG
                    </h3>
                    <p className="text-gray-600 text-sm">Peaceful environment</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Serene PG accommodation in Uvarsad, Gandhinagar - perfect for students seeking peaceful study environment.
                </p>
                <div className="flex items-center text-skyliving-600 group-hover:text-skyliving-700">
                  <span className="text-sm font-medium">Explore Uvarsad PG</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </Link>
            </div>

            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 text-skyliving-700">
                University-Specific Accommodations
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Specialized PG accommodations tailored for students from Ahmedabad's top universities and colleges.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              <Link 
                to="/pg-near-st-xaviers-college" 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-8 w-8 text-skyliving-600 mr-3" />
                  <div>
                    <h4 className="text-lg font-semibold text-skyliving-700 group-hover:text-skyliving-600">
                      St. Xavier's College
                    </h4>
                    <p className="text-gray-600 text-sm">2-min walk</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Premium PG just 2 minutes walk from St. Xavier's College campus.
                </p>
                <div className="flex items-center text-skyliving-600 group-hover:text-skyliving-700">
                  <span className="text-sm font-medium">View Details</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </Link>

              <Link 
                to="/student-accommodation-gls-university" 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-8 w-8 text-skyliving-600 mr-3" />
                  <div>
                    <h4 className="text-lg font-semibold text-skyliving-700 group-hover:text-skyliving-600">
                      GLS University
                    </h4>
                    <p className="text-gray-600 text-sm">Law & Management</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Ideal for GLS University students pursuing Law, Management, and Commerce.
                </p>
                <div className="flex items-center text-skyliving-600 group-hover:text-skyliving-700">
                  <span className="text-sm font-medium">View Details</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </Link>

              <Link 
                to="/pg-near-nirma-university" 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-8 w-8 text-skyliving-600 mr-3" />
                  <div>
                    <h4 className="text-lg font-semibold text-skyliving-700 group-hover:text-skyliving-600">
                      Nirma University
                    </h4>
                    <p className="text-gray-600 text-sm">Tech hub</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Perfect for Nirma University students with tech-friendly environment.
                </p>
                <div className="flex items-center text-skyliving-600 group-hover:text-skyliving-700">
                  <span className="text-sm font-medium">View Details</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </Link>

              <Link 
                to="/karnavati-university-student-housing" 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-8 w-8 text-skyliving-600 mr-3" />
                  <div>
                    <h4 className="text-lg font-semibold text-skyliving-700 group-hover:text-skyliving-600">
                      Karnavati University
                    </h4>
                    <p className="text-gray-600 text-sm">Design & Engineering</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Peaceful accommodation for Karnavati University students in Uvarsad.
                </p>
                <div className="flex items-center text-skyliving-600 group-hover:text-skyliving-700">
                  <span className="text-sm font-medium">View Details</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </Link>

              <Link 
                to="/adani-university-student-accommodation" 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-8 w-8 text-skyliving-600 mr-3" />
                  <div>
                    <h4 className="text-lg font-semibold text-skyliving-700 group-hover:text-skyliving-600">
                      Adani University
                    </h4>
                    <p className="text-gray-600 text-sm">Business & Engineering</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Modern accommodation for Adani University students with premium facilities.
                </p>
                <div className="flex items-center text-skyliving-600 group-hover:text-skyliving-700">
                  <span className="text-sm font-medium">View Details</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-heading">
              Ready to Experience 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-skyliving-600 to-skyliving-500"> Premium Living</span>?
            </h2>
            <p className="text-xl mb-10 text-gray-600 max-w-2xl mx-auto">
              Join our community of students enjoying the best accommodation experience. Contact us today to book your visit!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button asChild size="lg" className="bg-skyliving-600 hover:bg-skyliving-700 text-white rounded-full py-6 px-8 font-medium">
                <a href="/contact">
                  Contact Us
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-skyliving-600 text-skyliving-600 hover:bg-skyliving-50 rounded-full py-6 px-8 font-medium">
                <a href="/accommodations" className="flex items-center gap-2">
                  View Accommodations
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
