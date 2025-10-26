import { useState, useEffect } from 'react';
import { Github, Mail, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur bg-white/60 dark:bg-neutral-900/60 border-b border-black/5 dark:border-white/5' : ''
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="font-semibold tracking-tight text-lg">Flames Portfolio</a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm hover:text-primary transition-colors">
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-transparent bg-black text-white px-4 py-2 text-sm hover:opacity-90 transition"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/5 transition"
              >
                <Mail size={16} />
                Contact
              </a>
            </div>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-black/5 dark:hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block rounded-md px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10">
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-transparent bg-black text-white px-4 py-2 text-sm hover:opacity-90 transition"
              >
                <Github size={16} />
                GitHub
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm">
                <Mail size={16} />
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
