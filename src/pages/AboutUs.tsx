import React, { useEffect } from 'react';
import { useMetaTags } from '@/hooks/useMetaTags';

const AboutUs = () => {
  useMetaTags({
    title: 'About Us | The Sky Living - Premium PG & Hostels in Ahmedabad',
    description: 'Learn about The Sky Living - your trusted partner for premium PG and hostel accommodations in Ahmedabad. Discover our history, values, and commitment to providing exceptional student accommodation near Navrangpura and Ahmedabad University.',
    image: 'https://lovable.dev/opengraph-image-p98pqg.png',
    url: 'https://theskyliving.co.in/about'
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* About Hero Section */}
      <section className="relative py-24 bg-[#283B91] text-white">
        <div className="page-hero-overlay"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center mix-blend-overlay opacity-10 z-[-1]"></div>
        <div className="container mx-auto px-4 z-10 text-center page-hero-content">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-heading">ABOUT US</h1>
          <p className="text-xl text-white/90">
            Discover our story and what makes us different
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-2 rounded-full bg-skyliving-100 text-skyliving-700 text-sm font-medium mb-3">OUR STORY</span>
              <h2 className="text-4xl font-bold text-gradient font-heading">A BRIEF HISTORY OF SKYLIVING</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed">
                The concept of THE SKY LIVING was started by two young entrepreneurs since last 6 years. 
                In the beginning we have just started with 12 Students but now we are proudly manage over 
                900 students across our 6 PG/Hostels.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                As time passes we grown in business with an aim to give our residing client/students a feel
                of home away from home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is TSL Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gradient mb-8 font-heading">What is TSL?</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed">
                A LUXURY Living Experience Beyond The ordinary. TSL is a Once in a Lifetime living Experience For 
                Student and Working Professionals. A community for the Modern Age Designed for You to BE YOU. 
                From Unbeatable Interior and Top-Notch Locations.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our Co-Living and Hostels have a Culture so Strong. You'd Never want to Leave. Here's life is Vibrant 
                as people from different part of the state and country to live here. The Diverse ideologies and communal 
                Sense of being together make an individual Grow in all aspect of life. It Decent and Pocket Friendly PG 
                Rooms that Provide you with Both Basic and Luxurious Amenities.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The name The Sky Living Itself suggest comfort with quality Living. Your Comfort is our concern, hence 
                every Facility And amenities we provide, is to ensure that it feels like home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gradient mb-12 font-heading">WHY CHOOSE US</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="text-center card-hover p-6 rounded-xl bg-white shadow-sm">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-skyliving-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 2h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"/>
                  <path d="M3 10h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z"/>
                  <path d="M15 10h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-skyliving-700">Breakfast + Lunch + High Tea With Snakes + Dinner</h3>
              <p className="text-gray-600">
                From morning to night, savor a unique culinary journey, including high tea with snakes, 
                in an unforgettable dining experience.
              </p>
            </div>
            
            <div className="text-center card-hover p-6 rounded-xl bg-white shadow-sm">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-skyliving-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="m8 14 2-2 4-4"/>
                  <path d="m16 10-4 4-2-2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-skyliving-700">Entertainment Zone</h3>
              <p className="text-gray-600">
                From riveting movie discussions to captivating music discoveries, this is the place to 
                immerse yourself in the world of entertainment.
              </p>
            </div>
            
            <div className="text-center card-hover p-6 rounded-xl bg-white shadow-sm">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-skyliving-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"/>
                  <path d="M7 21h10"/>
                  <path d="M19 3v9"/>
                  <path d="M5 3v9"/>
                  <path d="M3 9h18"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-skyliving-700">High Speed Internet</h3>
              <p className="text-gray-600">
                Unlock the power of high-speed internet, where fast connections open the door to 
                endless possibilities and seamless online experiences.
              </p>
            </div>
            
            <div className="text-center card-hover p-6 rounded-xl bg-white shadow-sm">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-skyliving-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12h20"/>
                  <path d="M2 7h20"/>
                  <path d="M12 22V2"/>
                  <path d="m4.5 15 7 7 7-7"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-skyliving-700">Pantries With RO Water</h3>
              <p className="text-gray-600">
                Stay refreshed and hydrated with our pantries equipped with RO water, 
                providing clean and purified drinking water for your convenience.
              </p>
            </div>
            
            <div className="text-center card-hover p-6 rounded-xl bg-white shadow-sm">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-skyliving-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-skyliving-700">Fitness Square</h3>
              <p className="text-gray-600">
                Where we combine state-of-the-art equipment and expert guidance to help you achieve 
                your fitness goals and lead a healthier lifestyle.
              </p>
            </div>
            
            <div className="text-center card-hover p-6 rounded-xl bg-white shadow-sm">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-skyliving-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-skyliving-700">Standard Rooms</h3>
              <p className="text-gray-600">
                Enjoy a pleasant and budget-friendly accommodation option in our well-appointed standard rooms, 
                ensuring a restful night's sleep and a delightful stay.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
