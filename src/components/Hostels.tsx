import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Accommodation } from '@/types/accommodation';
import { getAllAccommodations } from '@/services/accommodationService';
import { useToast } from '@/components/ui/use-toast';
import { MapPin } from 'lucide-react';

const Hostels = () => {
  const [hostels, setHostels] = useState<Accommodation[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchHostels = async () => {
      try {
        setLoading(true);
        const data = await getAllAccommodations();
        setHostels(data);
      } catch (error) {
        console.error('Error fetching hostels:', error);
        toast({
          title: "Error",
          description: "Failed to load accommodations. Please try again later.",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    fetchHostels();
  }, [toast]);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-skyliving-700 font-heading">Our Premium Accommodations</h2>
          <div className="w-24 h-1 bg-skyliving-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">Discover our range of luxurious PG and hostel accommodations designed for your comfort and convenience.</p>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-skyliving-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {hostels
              .slice() // create a shallow copy to avoid mutating state
              .sort((a, b) => {
                // Extract numeric part for correct sorting (e.g., TSL1, TSL2, TSL10)
                const getCodeNum = (code: string) => {
                  const match = code.match(/(\\d+)/);
                  return match ? parseInt(match[1], 10) : 0;
                };
                if (a.code && b.code) {
                  const prefixA = a.code.replace(/\\d+$/, '');
                  const prefixB = b.code.replace(/\\d+$/, '');
                  if (prefixA === prefixB) {
                    return getCodeNum(a.code) - getCodeNum(b.code);
                  }
                  return a.code.localeCompare(b.code);
                }
                return a.code ? -1 : 1;
              })
              .map((hostel) => (
                <Link 
                  to={`/accommodations/${hostel.slug}`} 
                  key={hostel.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <div className="aspect-[16/9]">
                      <img 
                        src={hostel.main_image} 
                        alt={hostel.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-skyliving-700 mb-2">{hostel.name}</h3>
                    <p className="text-skyliving-500 font-medium mb-3">({hostel.code})</p>
                    <div className="flex items-start gap-2 text-gray-600 mb-4">
                      <MapPin className="h-5 w-5 text-skyliving-600 shrink-0 mt-0.5" />
                      <span className="text-sm">{hostel.address}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {hostel.features.slice(0, 3).map((feature, index) => (
                        <span key={index} className="bg-skyliving-50 text-skyliving-700 px-3 py-1 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                      {hostel.features.length > 3 && (
                        <span className="bg-skyliving-50 text-skyliving-700 px-3 py-1 rounded-full text-sm">
                          +{hostel.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hostels;
