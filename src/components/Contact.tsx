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
          {/* Contact info */}
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
                <p className="text-white transition-colors group-hover:text-accent">hello@example.com</p>
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
                Accepting new freelance projects and full-time opportunities for Q4 2026.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 rounded-2xl glass-card p-7 lg:col-span-3"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block font-inter text-sm font-medium text-secondary">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-secondary/50 outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block font-inter text-sm font-medium text-secondary">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-secondary/50 outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block font-inter text-sm font-medium text-secondary">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-secondary/50 outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent"
              />
            </div>

            <button
              type="submit"
              disabled={sent}
              className="inline-flex items-center justify-center gap-2 rounded-lg accent-gradient px-8 py-4 font-inter text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5 hover:accent-gradient-hover hover:shadow-xl hover:shadow-accent/40 disabled:opacity-70"
            >
              {sent ? 'Message Sent!' : 'Send Message'}
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
