import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Nebula Analytics',
    category: 'Web App · UI/UX',
    description: 'A real-time data visualization platform for enterprise teams, featuring live dashboards and custom chart components.',
    image: 'https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['React', 'D3.js', 'TypeScript'],
  },
  {
    title: 'Waveform Studio',
    category: 'Creative · Motion',
    description: 'An interactive audio studio interface with waveform synthesis and real-time visual feedback for music producers.',
    image: 'https://images.pexels.com/photos/27141312/pexels-photo-27141312.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['WebGL', 'Web Audio', 'Motion'],
  },
  {
    title: 'CodeCanvas',
    category: 'Product · Frontend',
    description: 'A collaborative code editor with syntax highlighting, live preview, and a focus on developer ergonomics.',
    image: 'https://images.pexels.com/photos/9858906/pexels-photo-9858906.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['React', 'Monaco', 'WebSocket'],
  },
  {
    title: 'Pulse Dashboard',
    category: 'Dashboard · Design System',
    description: 'A comprehensive control panel with modular widgets, dark/light themes, and a fully documented component library.',
    image: 'https://images.pexels.com/photos/27141313/pexels-photo-27141313.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Design System', 'Tailwind', 'Storybook'],
  },
];

export default function Work() {
  return (
    <section id="work" className="relative px-6 py-24 lg:px-16 lg:py-32">
      {/* Subtle accent glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 20% 80%, rgba(138,99,248,0.08), transparent 40%)',
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
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-2xl glass-card transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden sm:h-72">
                <img
                  src={project.image}
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
