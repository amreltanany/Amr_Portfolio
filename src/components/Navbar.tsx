import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '#top' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b glass-border py-3' : 'bg-transparent py-6'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-2 text-white" aria-label="Portfolio home">
          <span className="text-2xl text-accent">◆</span>
          <span className="font-inter text-lg font-bold tracking-wider">STUDIO</span>
        </a>

        <div className="hidden items-center gap-10 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative font-inter text-sm font-medium uppercase tracking-widest text-secondary/75 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-lg glass glass-border px-6 py-3 font-inter text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-white/10 hover:border-white/20 lg:inline-flex"
        >
          Let's Talk
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-12 w-12 items-center justify-center rounded-lg glass glass-border text-white lg:hidden"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="mx-4 mt-3 flex flex-col gap-4 rounded-xl glass-card p-5 lg:hidden">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-inter text-sm font-medium uppercase tracking-widest text-secondary/75 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg accent-gradient px-6 py-3 font-inter text-sm font-semibold uppercase tracking-wide text-white"
          >
            Let's Talk
          </a>
        </div>
      )}
    </header>
  );
}
