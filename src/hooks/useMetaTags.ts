import { useEffect } from 'react';

interface MetaTagsProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

export const useMetaTags = ({ title, description, image, url }: MetaTagsProps) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update meta tags
    const metaTags = {
      'description': description,
      'og:title': title,
      'og:description': description,
      'og:image': image,
      'og:url': url,
      'og:type': 'website',
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': image,
    };

    // Update existing meta tags or create new ones
    Object.entries(metaTags).forEach(([name, content]) => {
      // Try to find existing meta tag
      let metaTag = document.querySelector(`meta[property="${name}"]`) ||
                    document.querySelector(`meta[name="${name}"]`);
      
      if (!metaTag) {
        // Create new meta tag if it doesn't exist
        metaTag = document.createElement('meta');
        if (name.startsWith('og:')) {
          metaTag.setAttribute('property', name);
        } else {
          metaTag.setAttribute('name', name);
        }
        document.head.appendChild(metaTag);
      }
      
      // Update content
      metaTag.setAttribute('content', content);
    });

    // Cleanup function to restore original meta tags
    return () => {
      Object.keys(metaTags).forEach((name) => {
        const metaTag = document.querySelector(`meta[property="${name}"]`) ||
                       document.querySelector(`meta[name="${name}"]`);
        if (metaTag) {
          metaTag.remove();
        }
      });
    };
  }, [title, description, image, url]);
}; 