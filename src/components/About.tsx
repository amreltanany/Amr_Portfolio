import { Palette, Code2, Sparkles, Layers, Monitor, Zap } from 'lucide-react';

const SERVICES = [
  {
    icon: Palette,
    title: 'Creative Direction',
    description: 'Defining visual identity, brand language, and the overall aesthetic vision for products.',
  },
  {
    icon: Monitor,
    title: 'UI/UX Design',
    description: 'Designing intuitive, beautiful interfaces backed by user research and testing.',
  },
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Building performant, accessible web apps with React, TypeScript, and modern tooling.',
  },
  {
    icon: Layers,
    title: 'Backend Development',
    description: 'Powering applications with secure APIs, clean code, and database architecture.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing load times, Core Web Vitals, and runtime performance for smooth UX.',
  },
  {
    icon: Sparkles,
    title: 'Motion Design',
    description: 'Crafting cohesive brand systems that scale from landing pages to full products.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 font-inter text-sm font-medium uppercase tracking-widest text-accent">
            About
          </p>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Where design meets engineering
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-secondary">
            I'm a multidisciplinary creative who lives at the intersection of design and
            technology. For over five years I've helped startups and established brands
            ship products that feel as good as they look — from first wireframe to final
            production deploy.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl glass-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl accent-gradient text-white shadow-lg shadow-accent/20">
                <service.icon size={24} />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">{service.title}</h3>
              <p className="text-secondary leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
