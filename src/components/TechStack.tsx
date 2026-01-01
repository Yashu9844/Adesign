'use client';

const techStack = [
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'TailwindCSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
  { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
];

const TechStack = () => {
  return (
    <div className="w-full bg-transparent overflow-hidden">
      <div className="py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="relative">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10" style={{ backgroundImage: 'linear-gradient(to right, var(--bg-primary), transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10" style={{ backgroundImage: 'linear-gradient(to left, var(--bg-primary), transparent)' }} />
          
          <div className="marquee">
            {/* First list */}
            <div className="marquee__content">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center gap-3 group cursor-pointer"
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain transition-opacity duration-300"
                    style={{ opacity: '0.7', filter: 'brightness(0) invert(var(--logo-invert, 1))' }}
                    onMouseEnter={(e: React.MouseEvent<HTMLImageElement>) => { (e.target as HTMLImageElement).style.opacity = '1'; }}
                    onMouseLeave={(e: React.MouseEvent<HTMLImageElement>) => { (e.target as HTMLImageElement).style.opacity = '0.7'; }}
                  />
                  <span className="text-sm sm:text-base font-light tracking-wide transition-colors duration-300 whitespace-nowrap" style={{ color: 'var(--text-subtle)' }} onMouseEnter={(e: React.MouseEvent<HTMLSpanElement>) => { (e.target as HTMLSpanElement).style.color = 'var(--text-secondary)'; }} onMouseLeave={(e: React.MouseEvent<HTMLSpanElement>) => { (e.target as HTMLSpanElement).style.color = 'var(--text-subtle)'; }}>
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
            {/* Duplicate list for seamless loop */}
            <div className="marquee__content" aria-hidden="true">
              {techStack.map((tech, index) => (
                <div
                  key={`dup-${index}`}
                  className="flex-shrink-0 flex items-center gap-3 group cursor-pointer"
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain transition-opacity duration-300"
                    style={{ opacity: '0.7', filter: 'brightness(0) invert(var(--logo-invert, 1))' }}
                    onMouseEnter={(e: React.MouseEvent<HTMLImageElement>) => { (e.target as HTMLImageElement).style.opacity = '1'; }}
                    onMouseLeave={(e: React.MouseEvent<HTMLImageElement>) => { (e.target as HTMLImageElement).style.opacity = '0.7'; }}
                  />
                  <span className="text-sm sm:text-base font-light tracking-wide transition-colors duration-300 whitespace-nowrap" style={{ color: 'var(--text-subtle)' }} onMouseEnter={(e: React.MouseEvent<HTMLSpanElement>) => { (e.target as HTMLSpanElement).style.color = 'var(--text-secondary)'; }} onMouseLeave={(e: React.MouseEvent<HTMLSpanElement>) => { (e.target as HTMLSpanElement).style.color = 'var(--text-subtle)'; }}>
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
