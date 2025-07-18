
import React, { useEffect, useState } from 'react';
import { toast } from '@/components/ui/use-toast';
import { MapPin, Phone, Mail, Clock, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useMetaTags } from '@/hooks/useMetaTags';

const ContactUs = () => {
  useMetaTags({
    title: 'Contact Us | The Sky Living - PG & Hostels in Ahmedabad',
    description: 'Get in touch with The Sky Living for premium PG and hostel accommodations in Ahmedabad. Located near Navrangpura, Ahmedabad University, and CG Road. Call us for bookings and inquiries.',
    image: 'https://lovable.dev/opengraph-image-p98pqg.png',
    url: 'https://theskyliving.co.in/contact'
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Message Sent!",
      description: "We've received your message and will get back to you soon.",
      variant: "default",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-skyliving-800">
        <div className="page-hero-overlay"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center mix-blend-overlay z-[-1]"></div>
        <div className="container mx-auto px-4 z-10 text-center page-hero-content">
          <h1 className="page-hero-title">CONTACT US</h1>
          <p className="page-hero-subtitle">
            Have questions or want to book a room? Reach out to us, and we'll be happy to assist you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold mb-6 text-skyliving-700 font-heading">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skyliving-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skyliving-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skyliving-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 mb-2 font-medium">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skyliving-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skyliving-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-skyliving-600 hover:bg-skyliving-700 text-white font-medium py-6 px-8 rounded-lg"
                >
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-skyliving-700 font-heading">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="bg-skyliving-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-skyliving-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-skyliving-700">Head Office</h3>
                    <p className="text-gray-600">
                      Near HDFC Bank, Opp. Wagh bakri tea lounge, St. Xaviers College,<br />
                      HL College Road Navrangpura, Ahmedabad
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="bg-skyliving-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-skyliving-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-skyliving-700">Phone Numbers</h3>
                    <p className="text-gray-600">+91 88661 17703</p>
                    <p className="text-gray-600">+91 87358 61665</p>
                  </div>
                </div>
                
                <div className="flex items-start p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="bg-skyliving-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-skyliving-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-skyliving-700">Email</h3>
                    <p className="text-gray-600">info@skyliving.co.in</p>
                  </div>
                </div>
                
                <div className="flex items-start p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="bg-skyliving-100 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-skyliving-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-skyliving-700">Business Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-600">Sunday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="bg-skyliving-100 p-3 rounded-full mr-4">
                    <Share2 className="h-6 w-6 text-skyliving-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-skyliving-700">Connect With Us</h3>
                    <div className="flex space-x-4 mt-4">
                      <a href="#" className="bg-white p-2 rounded-full text-skyliving-700 hover:bg-skyliving-100 transition-colors shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                      </a>
                      <a href="#" className="bg-white p-2 rounded-full text-skyliving-700 hover:bg-skyliving-100 transition-colors shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                      </a>
                      <a href="#" className="bg-white p-2 rounded-full text-skyliving-700 hover:bg-skyliving-100 transition-colors shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                      </a>
                      <a href="#" className="bg-white p-2 rounded-full text-skyliving-700 hover:bg-skyliving-100 transition-colors shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-skyliving-700 text-center font-heading">Find Us on the Map</h2>
          <div className="rounded-xl overflow-hidden shadow-xl h-[500px]">
            {/* Replace with actual Google Maps embed or map component */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-600">Map will be displayed here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
