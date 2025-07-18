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
import { ArrowRight } from 'lucide-react';
import { StructuredData } from '@/components/seo/StructuredData';

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
