import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { getAccommodationsByGender } from '@/services/accommodationService';
import { Accommodation } from '@/types/accommodation';

const Footer = () => {
  const [boysPGs, setBoysPGs] = useState<Accommodation[]>([]);
  const [girlsPGs, setGirlsPGs] = useState<Accommodation[]>([]);

  useEffect(() => {
    getAccommodationsByGender('boys').then(setBoysPGs);
    getAccommodationsByGender('girls').then(setGirlsPGs);
  }, []);

  return (
    <footer className="bg-[#283B91] text-white border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {/* About */}
          <div>
            <img 
              src="https://i.ibb.co/zHTnrDWf/the-skyliving-final-logo-white-Text-1.png" 
              alt="The Sky Living" 
              className="h-16 w-auto mb-6"
            />
            <p className="text-white/90 mb-6 leading-relaxed">
              Experience a new level of convenience with our premium PG and hostel accommodations for students.
              We provide a safe, comfortable, and enriching living environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/90 hover:text-white transition-colors hover:translate-x-1 transform duration-200 flex items-center">
                  <span className="inline-block w-1 h-1 rounded-full bg-white/50 mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/90 hover:text-white transition-colors hover:translate-x-1 transform duration-200 flex items-center">
                  <span className="inline-block w-1 h-1 rounded-full bg-white/50 mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/accommodations" className="text-white/90 hover:text-white transition-colors hover:translate-x-1 transform duration-200 flex items-center">
                  <span className="inline-block w-1 h-1 rounded-full bg-white/50 mr-2"></span>
                  PG/Hostel
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-white/90 hover:text-white transition-colors hover:translate-x-1 transform duration-200 flex items-center">
                  <span className="inline-block w-1 h-1 rounded-full bg-white/50 mr-2"></span>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/90 hover:text-white transition-colors hover:translate-x-1 transform duration-200 flex items-center">
                  <span className="inline-block w-1 h-1 rounded-full bg-white/50 mr-2"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Boys PGs & Girls PGs Horizontal */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1 mb-4 md:mb-0">
              <h4 className="text-base font-semibold mb-2 uppercase tracking-wider text-white">Boys PGs</h4>
              <ul className="space-y-1">
                {boysPGs.map(pg => (
                  <li key={pg.id} className="flex items-center">
                    <span className="font-bold mr-2 text-xs text-white/80 min-w-[40px]">{pg.code}</span>
                    <Link to={`/accommodations/${pg.slug}`} className="text-white/90 hover:text-white font-medium transition-colors">
                      {pg.name}
                    </Link>
                  </li>
                ))}
                {boysPGs.length === 0 && <li className="text-white/60 text-sm">No Boys PGs</li>}
              </ul>
            </div>
            <div className="flex-1">
              <h4 className="text-base font-semibold mb-2 uppercase tracking-wider text-white">Girls PGs</h4>
              <ul className="space-y-1">
                {girlsPGs.map(pg => (
                  <li key={pg.id} className="flex items-center">
                    <span className="font-bold mr-2 text-xs text-white/80 min-w-[40px]">{pg.code}</span>
                    <Link to={`/accommodations/${pg.slug}`} className="text-white/90 hover:text-white font-medium transition-colors">
                      {pg.name}
                    </Link>
                  </li>
                ))}
                {girlsPGs.length === 0 && <li className="text-white/60 text-sm">No Girls PGs</li>}
              </ul>
            </div>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider text-white">Contact Information</h4>
            <div className="space-y-5">
              <div className="flex items-start">
                <div className="bg-white/10 p-2 rounded-lg mr-3">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-white/90 text-sm">Head Office: Near HDFC Bank, Opp. Wagh bakri tea lounge, St. Xaviers College, HL College Road Navrangpura.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white/10 p-2 rounded-lg mr-3">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-white/90 text-sm">+91 88661 17703</p>
                  <p className="text-white/90 text-sm">+91 87358 61665</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white/10 p-2 rounded-lg mr-3">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-white/90 text-sm">info@skyliving.co.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 mb-4 md:mb-0 text-sm">© {new Date().getFullYear()} The Sky Living. All rights reserved.</p>
            <ul className="flex space-x-8">
              <li><a href="#" className="text-white/80 hover:text-white text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-white/80 hover:text-white text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-white/80 hover:text-white text-sm">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

