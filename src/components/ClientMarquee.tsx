'use client';

// Company logos for clients/partners
const companies = [
  { name: 'Stripe', logo: 'https://cdn.simpleicons.org/stripe/white' },
  { name: 'Vercel', logo: 'https://cdn.simpleicons.org/vercel/white' },
  { name: 'Netflix', logo: 'https://cdn.simpleicons.org/netflix/white' },
  { name: 'Shopify', logo: 'https://cdn.simpleicons.org/shopify/white' },
  { name: 'Spotify', logo: 'https://cdn.simpleicons.org/spotify/white' },
  { name: 'Adobe', logo: 'https://cdn.simpleicons.org/adobe/white' },
  { name: 'Airbnb', logo: 'https://cdn.simpleicons.org/airbnb/white' },
  { name: 'Uber', logo: 'https://cdn.simpleicons.org/uber/white' },
  { name: 'Microsoft', logo: 'https://cdn.simpleicons.org/microsoft/white' },
  { name: 'Amazon', logo: 'https://cdn.simpleicons.org/amazon/white' },

  { name: 'Apple', logo: 'https://cdn.simpleicons.org/apple/white' },
  { name: 'Google', logo: 'https://cdn.simpleicons.org/google/white' },
  { name: 'Meta', logo: 'https://cdn.simpleicons.org/meta/white' },
  { name: 'Twitter', logo: 'https://cdn.simpleicons.org/x/white' },
  { name: 'GitHub', logo: 'https://cdn.simpleicons.org/github/white' },
  { name: 'Figma', logo: 'https://cdn.simpleicons.org/figma/white' },
  { name: 'Notion', logo: 'https://cdn.simpleicons.org/notion/white' },
];

export default function ClientMarquee() {
  return (
    <div className="w-full bg-transparent overflow-hidden">
      <div className="py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="relative">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />
          
          <div className="marquee">
            {/* First list */}
            <div className="marquee__content">
              {companies.map((company, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center gap-3 group cursor-pointer"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="text-white/50 text-sm sm:text-base font-light tracking-wide group-hover:text-white/80 transition-colors duration-300 whitespace-nowrap">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
            {/* Duplicate list for seamless loop */}
            <div className="marquee__content" aria-hidden="true">
              {companies.map((company, index) => (
                <div
                  key={`dup-${index}`}
                  className="flex-shrink-0 flex items-center gap-3 group cursor-pointer"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="text-white/50 text-sm sm:text-base font-light tracking-wide group-hover:text-white/80 transition-colors duration-300 whitespace-nowrap">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
