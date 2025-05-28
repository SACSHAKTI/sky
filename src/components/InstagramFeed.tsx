import React, { useEffect } from 'react';

const InstagramFeed = () => {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-skyliving-700 mb-4 font-heading">Follow Us on Instagram</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest events, amenities, and community life at The Sky Living PG
          </p>
          <a 
            href="https://www.instagram.com/theskylivingpg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-skyliving-600 hover:text-skyliving-700 mt-4"
          >
            @theskylivingpg
            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto">
          {/* Post 1 - Reel */}
          <div className="instagram-post rounded-lg overflow-hidden shadow-lg flex justify-center w-full max-w-sm">
            <blockquote
              className="instagram-media w-full"
              data-instgrm-permalink="https://www.instagram.com/reel/DKLxOfQhreT/"
              data-instgrm-version="14"
              style={{ 
                background: '#FFF',
                borderRadius: '3px',
                border: '1px solid #ddd',
                margin: '1px',
                minWidth: '280px',
                padding: '0'
              }}
            >
            </blockquote>
          </div>

          {/* Post 2 */}
          <div className="instagram-post rounded-lg overflow-hidden shadow-lg flex justify-center w-full max-w-sm">
            <blockquote
              className="instagram-media w-full"
              data-instgrm-permalink="https://www.instagram.com/p/DKLxNqEM6DU/"
              data-instgrm-version="14"
              style={{ 
                background: '#FFF',
                borderRadius: '3px',
                border: '1px solid #ddd',
                margin: '1px',
                minWidth: '280px',
                padding: '0'
              }}
            >
            </blockquote>
          </div>

          {/* Post 3 */}
          <div className="instagram-post rounded-lg overflow-hidden shadow-lg flex justify-center w-full max-w-sm">
            <blockquote
              className="instagram-media w-full"
              data-instgrm-permalink="https://www.instagram.com/p/DKLxNLqMgSJ/"
              data-instgrm-version="14"
              style={{ 
                background: '#FFF',
                borderRadius: '3px',
                border: '1px solid #ddd',
                margin: '1px',
                minWidth: '280px',
                padding: '0'
              }}
            >
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed; 