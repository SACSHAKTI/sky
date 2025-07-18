import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, GraduationCap } from 'lucide-react';

interface RelatedPage {
  title: string;
  description: string;
  link: string;
  type: 'location' | 'university';
  subtitle?: string;
}

interface RelatedPagesProps {
  title?: string;
  pages: RelatedPage[];
  className?: string;
}

export const RelatedPages: React.FC<RelatedPagesProps> = ({ 
  title = "Related Accommodations", 
  pages, 
  className = "" 
}) => {
  if (pages.length === 0) return null;

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-skyliving-700">
            {title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pages.map((page, index) => (
              <Link 
                key={index}
                to={page.link} 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {page.type === 'location' ? (
                    <MapPin className="h-7 w-7 text-skyliving-600 mr-3" />
                  ) : (
                    <GraduationCap className="h-7 w-7 text-skyliving-600 mr-3" />
                  )}
                  <div>
                    <h3 className="text-lg font-semibold text-skyliving-700 group-hover:text-skyliving-600">
                      {page.title}
                    </h3>
                    {page.subtitle && (
                      <p className="text-gray-600 text-sm">{page.subtitle}</p>
                    )}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  {page.description}
                </p>
                <div className="flex items-center text-skyliving-600 group-hover:text-skyliving-700">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};