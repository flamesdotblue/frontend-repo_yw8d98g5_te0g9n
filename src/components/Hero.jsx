import Spline from '@splinetool/react-spline';
import { ArrowRight, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white/80 dark:from-neutral-950/60 dark:via-neutral-950/30 dark:to-neutral-950/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none flex min-h-[88vh] flex-col justify-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3 py-1 text-xs backdrop-blur pointer-events-auto">
              <Rocket size={14} />
              <span className="uppercase tracking-wide">Tech • Portfolio • Modern</span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-6xl font-semibold leading-tight tracking-tight">
              Crafting delightful, modern experiences for the web
            </h1>
            <p className="mt-4 text-base sm:text-lg text-black/70 dark:text-white/70">
              I build interactive products with a playful edge — scalable frontends, fast backends, and thoughtful 3D touches.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 pointer-events-auto">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-black text-white px-5 py-3 text-sm shadow-sm hover:opacity-90 transition"
              >
                View Projects
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm hover:bg-black/5 dark:hover:bg-white/10 transition"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
