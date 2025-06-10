import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Accommodation } from '@/types/accommodation';
import { getAccommodationsByGender } from '@/services/accommodationService';
import { useToast } from '@/components/ui/use-toast';

interface PgTypeSelectionProps {
  type: 'boys' | 'girls';
  triggerElement?: React.ReactNode;
}

const PgTypeSelection = ({ type, triggerElement }: PgTypeSelectionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [accommodations, setAccommodations] = useState<Accommodation[]>([]);
  const [loading, setLoading] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleSelection = (slug: string) => {
    navigate(`/accommodations/${slug}`);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  // Fetch accommodations when dropdown is opened
  useEffect(() => {
    const fetchAccommodations = async () => {
      if (!isOpen) return;
      
      try {
        setLoading(true);
        const data = await getAccommodationsByGender(type);
        setAccommodations(data);
      } catch (error) {
        console.error('Error fetching accommodations:', error);
        toast({
          title: "Error",
          description: "Failed to load accommodations. Please try again later.",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    fetchAccommodations();
  }, [isOpen, type, toast]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 font-medium transition-colors text-gray-700 hover:text-skyliving-600"
      >
        {type === 'boys' ? 'Boys PG' : 'Girls PG'}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
          {loading ? (
            <div className="px-4 py-3 text-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-skyliving-600 mx-auto"></div>
            </div>
          ) : accommodations.length > 0 ? (
            accommodations.map((accommodation) => (
            <div 
                key={accommodation.id}
                onClick={() => handleSelection(accommodation.slug)}
              className="px-4 py-3 hover:bg-gray-50 cursor-pointer"
            >
                <h3 className="font-medium text-skyliving-600"><span className="font-bold mr-2">{accommodation.code}</span>{accommodation.name}</h3>
                <p className="text-sm text-gray-500">{accommodation.address}</p>
              </div>
            ))
          ) : (
            <div className="px-4 py-3 text-center text-gray-500">
              No {type} PGs available
            </div>
          )}
          
          {/* View All Link */}
          <div className="border-t border-gray-100 mt-2 pt-2">
            <button
              onClick={() => {
                navigate(type === 'boys' ? '/boys-accommodations' : '/girls-accommodations');
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 text-left text-skyliving-600 hover:bg-gray-50 font-medium"
            >
              View All {type === 'boys' ? 'Boys' : 'Girls'} PGs
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PgTypeSelection;