import { Helmet } from 'react-helmet-async';

interface LocalBusinessData {
  name: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  image: string;
  priceRange: string;
  openingHours: string[];
}

interface AccommodationData {
  name: string;
  description: string;
  image: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  telephone: string;
  email: string;
  amenityFeature: string[];
  url: string;
  priceRange: string;
}

interface StructuredDataProps {
  type: 'LocalBusiness' | 'Accommodation';
  data: LocalBusinessData | AccommodationData;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const generateLocalBusinessSchema = (businessData: LocalBusinessData) => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessData.name,
    "description": businessData.description,
    "url": businessData.url,
    "telephone": businessData.telephone,
    "email": businessData.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessData.address.streetAddress,
      "addressLocality": businessData.address.addressLocality,
      "addressRegion": businessData.address.addressRegion,
      "postalCode": businessData.address.postalCode,
      "addressCountry": businessData.address.addressCountry
    },
    "image": businessData.image,
    "priceRange": businessData.priceRange,
    "openingHours": businessData.openingHours,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "50"
    }
  });

  const generateAccommodationSchema = (accommodationData: AccommodationData) => ({
    "@context": "https://schema.org",
    "@type": "Accommodation",
    "name": accommodationData.name,
    "description": accommodationData.description,
    "image": accommodationData.image,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": accommodationData.address.streetAddress,
      "addressLocality": accommodationData.address.addressLocality,
      "addressRegion": accommodationData.address.addressRegion,
      "postalCode": accommodationData.address.postalCode,
      "addressCountry": accommodationData.address.addressCountry
    },
    "telephone": accommodationData.telephone,
    "email": accommodationData.email,
    "amenityFeature": accommodationData.amenityFeature.map(feature => ({
      "@type": "LocationFeatureSpecification",
      "name": feature
    })),
    "url": accommodationData.url,
    "priceRange": accommodationData.priceRange,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "25"
    }
  });

  const schema = type === 'LocalBusiness' 
    ? generateLocalBusinessSchema(data as LocalBusinessData)
    : generateAccommodationSchema(data as AccommodationData);

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};