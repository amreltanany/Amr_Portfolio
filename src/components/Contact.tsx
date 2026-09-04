import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="relative px-6 py-24 lg:px-16 lg:py-32">
      {/* Accent glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(138,99,248,0.1), transparent 50%)',
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <div className="text-center">
          <p className="mb-3 font-inter text-sm font-medium uppercase tracking-widest text-accent">
            Get in Touch
          </p>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let's create something<br />
            <span className="text-gradient">extraordinary</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-secondary">
            Have a project in mind or just want to say hello? I'd love to hear from you.
            Drop a message and I'll get back within 24 hours.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-5">
         
          <div className="flex flex-col gap-5 lg:col-span-2">
            <a
              href="mailto:hello@example.com"
              className="group flex items-center gap-4 rounded-2xl glass-card p-5 transition-all hover:border-white/20"
            >
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl accent-gradient text-white shadow-lg shadow-accent/20">
                <Mail size={22} />
              </div>
              <div>
                <p className="font-inter text-xs uppercase tracking-wider text-secondary">Email</p>
                <p className="text-white transition-colors group-hover:text-accent">amr_eltanany@outlook.com</p>
              </div>  
            </a>

            <div className="flex items-center gap-4 rounded-2xl glass-card p-5">
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl glass glass-border text-white">
                <MapPin size={22} />
              </div>
              <div>
                <p className="font-inter text-xs uppercase tracking-wider text-secondary">Location</p>
                <p className="text-white">Remote · Worldwide</p>
              </div>
            </div>

            <a
              href="https://wa.me/201119708154"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl glass-card p-5 transition-all hover:border-white/20"
            >
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl glass glass-border text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <div>
                <p className="font-inter text-xs uppercase tracking-wider text-secondary">WhatsApp</p>
                <p className="text-white transition-colors group-hover:text-accent">01119708154</p>
              </div>
            </a>

            <div className="rounded-2xl glass-card p-5">
              <div className="mb-3 flex items-center gap-3">
                <span className="relative block h-2.5 w-2.5 rounded-full bg-success shadow-[0_0_12px_rgba(0,255,136,0.8)]">
                  <span className="absolute inset-0 rounded-full bg-success animate-statusPulse" />
                </span>
                <p className="font-inter text-sm font-semibold uppercase tracking-wide text-white">
                  Currently Available
                </p>
              </div>
              <p className="text-secondary text-sm leading-relaxed">
                Accepting new freelance projects full-time projects management.
              </p>
            </div>
          </div>

          {/* Contact form */}
        
        </div>
      </div>
    </section>
  );
}
