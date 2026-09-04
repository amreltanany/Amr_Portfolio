import { useRef } from 'react';
import { ArrowRight, Download, Sparkles } from 'lucide-react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleDownloadCv = () => {
    const cvText = [
      'CREATIVE DESIGNER & DEVELOPER',
      '',
      'PROFILE',
      'I build immersive digital experiences through thoughtful design and creative technology.',
      '',
      'EXPERTISE',
      'Creative Direction, UI/UX Design, Frontend Development, Motion Design',
      '',
      'CONTACT',
      'hello@example.com',
    ].join('\n');

    const file = new Blob([cvText], { type: 'text/plain' });
    const downloadUrl = URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'creative-designer-cv.txt';
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(downloadUrl);
  };

  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full flex-col overflow-hidden px-6 py-24 lg:px-16"
    >
      {/* Video background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover opacity-72"
        >
          <source
            src="https://strvid.nyc3.cdn.digitaloceanspaces.com/cloudinary/portfolio_hero_bg_zuhahj.webm"
            type="video/webm"
          />
        </video>
      </div>

      {/* Video overlay gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(5,5,8,0.95) 0%, rgba(29,29,53,0.182) 40%, rgba(5,5,8,0.4) 100%)',
        }}
      />

      {/* Accent glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 78% 20%, rgba(138,99,248,0.13), transparent 28%)',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-1 items-center py-8">
        <div className="max-w-3xl">
          <p className="mb-4 font-inter text-lg font-medium tracking-widest text-accent animate-fadeUp animate-delay-1 opacity-0-init">
            <span className="inline-flex items-center gap-2">
              <Sparkles size={16} />
              Hello, I'm Amr ElTanany — Full-Stack Developer
            </span>
          </p>

          <h1 className="mb-4 text-5xl font-bold leading-[1.1] tracking-tight text-white animate-fadeUp animate-delay-2 opacity-0-init sm:text-6xl lg:text-7xl">
           Turning Ideas Into <br />
            <span className="text-gradient">Software</span>
          </h1>

          <p className="mb-8 text-2xl font-medium leading-snug text-secondary animate-fadeUp animate-delay-3 opacity-0-init sm:text-3xl">
            Design & Development
          </p>

          <div className="flex flex-wrap gap-4 animate-fadeUp animate-delay-5 opacity-0-init">
            <a
              href="https://linktr.ee/Amr_ElTanany?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAadijl42YlwyWtuFUmV-0feKI_EM9feLsSQYfsJA6CT3VWPG1IcbSUjHitEmeQ_aem_MZNxS1ONivN3v3KIkJMFVw" target="_blank"
              className="inline-flex items-center gap-2 rounded-lg accent-gradient px-8 py-4 font-inter text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5 hover:accent-gradient-hover hover:shadow-xl hover:shadow-accent/40"
            >
              View My Profil
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer area */}
      <div className="relative z-10 flex flex-col items-start justify-between gap-8 pt-8 lg:flex-row lg:items-end">
        {/* Availability + socials */}
        <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-center lg:gap-9">
          <div className="w-full max-w-sm rounded-2xl glass-card p-6 shadow-2xl shadow-black/40">
            <div className="flex items-center gap-3">
              <span className="relative block h-2.5 w-2.5 shrink-0 rounded-full bg-success shadow-[0_0_12px_rgba(0,255,136,0.8)]">
                <span className="absolute inset-0 rounded-full bg-success animate-statusPulse" />
              </span>
              <p className="font-inter text-sm font-semibold uppercase tracking-wide text-white">
                Available for Work
              </p>
            </div>
            <p className="ml-5 mt-2 text-secondary">
              Helping businesses transform ideas into production-ready software
            </p>
          </div>

          <div className="flex gap-3">
            {[
              { label: 'WhatsApp', href: 'https://wa.me/201119708154' },
              { label: 'Facebook', href: 'https://www.facebook.com/amr_eltanany' },
              { label: 'Instagram', href: 'https://www.instagram.com/amr_eltanany_' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full glass glass-border text-white transition-all hover:-translate-y-1 hover:bg-white hover:text-bg"
              >
                <span className="text-sm font-semibold">{social.label[0]}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-5">
          <div>
            <span className="block font-inter text-xl font-semibold text-white">5+</span>
            <span className="mt-1 block font-inter text-xs uppercase tracking-wider text-secondary">
              Years
            </span>
          </div>
          <span className="h-9 w-px bg-white/10" />
          <div>
            <span className="block font-inter text-xl font-semibold text-white">40+</span>
            <span className="mt-1 block font-inter text-xs uppercase tracking-wider text-secondary">
              Projects
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
     
      </div>
    </section>
  );
}
