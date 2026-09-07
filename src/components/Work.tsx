import { ArrowUpRight } from 'lucide-react';

const getImagePath = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

const PROJECTS = [
  {
    title: 'DISPLAY EGYPT',
    category: 'Business Website',
    description: 'Developed DisplayEgypt—a dynamic WordPress platform built for an outdoor advertising leader, highlighting street-level campaigns, digital billboards, and high-impact urban displays.',
    image: 'hero(2).png',
    tags: ['WordPress','PHP', 'SEO & Speed Optimization', 'Responsive Design'],
    link: 'https://displayegypt.com/',
  },
  {
    title: 'SAM CONSTRUCTIONS',
    category: ' Business Website ',
    description: 'Developed A web platform for a leading Egyptian construction and general investments firm. Built with a clean, modern wordpress layout highlighting architectural services, corporate portfolios, and project management.',
    image: '5.png',
    tags: ['WordPress','PHP', 'SEO & Speed Optimization', 'Responsive Design'],
    link: 'https://samconstructions-eg.com/',
  },
    {
    title: 'Furniture E-Commerce UI ',
    category: 'E-COMMERCE DESIGN',
    description: 'A sleek, responsive front-end e-commerce interface for a modern furniture brand, focused on minimalist aesthetics, smooth user interactions, and high-quality product displays.',
    image: '10.png',
    tags: ['TypeScript','React', 'Tailwind CSS','Responsive Design'],
    link: '#',
  },
  {
    title: 'Qaro2a',
    category: 'E-Commerce Platform ',
    description: 'Architecting complex digital ecosystems like Qaro2a, designed for author publishing, e-commerce, and proadcasting. I combine top-tier engineering with sleek UI design to deliver fast, conversion-driven platforms.',
    image: 'hero.png',
    tags: ['ASP.NET Core', 'SQL Server', 'Onion Architecture', 'JWT Auth'],
    link: 'http://qaro2a.com/',
  },
  {
    title: 'PERSONAL PORTFOLIO',
    category: 'Portfolio',
    description: 'Architected a Portfolio to serve as a high-speed central hub for cutting-edge web projects, combining slick motion design, interactive features.',
    image: 'hero(1).png',
    tags: ['TypeScript', 'Tailwind', 'React + Vite','GitHub Pages'],
    link: 'https://amreltanany.github.io/ElTanany/',
  },
  {
    title: 'PERSONAL PORTFOLIO',
    category: 'Portfolio',
    description: 'A responsive front-end showcase site highlighting developer projects, technical skills, and experience with a modern, tabbed interactive layout.',
    image: '8.png',
    tags: ['Html5', 'Tailwind', 'React','GitHub Pages'],
    link: 'https://amreltanany.github.io/portfolio-/',
  },
  {
    title: 'Interactive Masking Concept',
    category: ' UI/UX Desgin',
    description: 'Dynamic radial-gradient mask that moves with mouse/touch events to reveal an alternate image layer underneath.',
    image: 'ronin.jpg',
    tags: ['UI/UX', 'Motion'],
    link: 'https://amreltanany.github.io/ronin/',
  },
  {
    title: 'Interactive Motorsport Concept',
    category: 'EXPERIMENTAL UI',
    description: 'An immersive racing portfolio concept featuring high-contrast typography, custom sound toggles, and smooth motion interactions designed for high-impact visual storytelling.',
    image: '7.png',
    tags: ['UI/UX', 'Motion'],
    link: '#',
  },
  {
    title: 'Clinic Landing Page',
    category: 'HEALTHCARE WEBSITE',
    description: 'A clean healthcare landing page featuring doctor profiles, appointment booking layouts, medical news, and mobile app integration.',
    image: '6.png',
    tags: ['TypeScript', 'React','Tailwind'],
    link: 'https://amreltanany.github.io/Clinc/',
  },
];

export default function Work() {
  return (
    <section id="work" className="relative px-6 py-24 lg:px-16 lg:py-32">
      {/* Subtle accent glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 20% 80%, rgba(154,129,116,0.08), transparent 40%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 flex items-end justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 font-inter text-sm font-medium uppercase tracking-widest text-accent">
              Selected Work
            </p>
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Projects that push boundaries
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden shrink-0 items-center gap-2 font-inter text-sm font-medium uppercase tracking-wider text-secondary transition-colors hover:text-white sm:inline-flex"
          >
            Start a project
            <ArrowUpRight size={18} />
          </a>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl glass-card transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden sm:h-72">
                <img
                  src={getImagePath(project.image)}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
                <div className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full glass text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <p className="mb-2 font-inter text-xs font-medium uppercase tracking-wider text-accent">
                  {project.category}
                </p>
                <h3 className="mb-3 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mb-5 leading-relaxed text-secondary">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-inter text-xs font-medium text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}