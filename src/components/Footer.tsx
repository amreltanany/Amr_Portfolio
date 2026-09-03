import { ArrowUp } from 'lucide-react';

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'Instagram', href: 'https://www.instagram.com' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/8 px-6 py-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2 text-white">
            <span className="text-2xl text-accent">◆</span>
            <span className="font-inter text-lg font-bold tracking-wider">STUDIO</span>
          </a>

          {/* Social links */}
          <div className="flex gap-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter text-sm font-medium uppercase tracking-wider text-secondary/75 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Back to top */}
          <a
            href="#top"
            className="inline-flex items-center gap-2 font-inter text-sm font-medium uppercase tracking-wider text-secondary/75 transition-colors hover:text-white"
          >
            Back to top
            <ArrowUp size={16} />
          </a>
        </div>

        <div className="mt-8 border-t border-white/8 pt-8 text-center">
          <p className="font-inter text-sm text-secondary/50">
            © {new Date().getFullYear()} Studio. Crafted with precision and care.
          </p>
        </div>
      </div>
    </footer>
  );
}
