import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'Neon Commerce',
    description: 'Headless e-commerce storefront with edge-rendered product pages and delightful micro-interactions.',
    tags: ['Next.js', 'Tailwind', 'Stripe'],
    link: '#',
  },
  {
    title: 'Realtime Collab',
    description: 'Multiplayer whiteboard and notes with CRDT syncing and presence indicators — smooth and resilient.',
    tags: ['React', 'WebSockets', 'CRDT'],
    link: '#',
  },
  {
    title: '3D Motion Lab',
    description: 'Explorations in 3D UI, motion design, and physics-based interactions using Spline and Three.js.',
    tags: ['Spline', 'Three.js', 'Framer Motion'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 -z-[1] bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.12),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.12),transparent_50%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Selected Projects</h2>
            <p className="mt-2 text-black/60 dark:text-white/60 max-w-2xl">
              A mix of production work and experiments focused on performance, accessibility, and joy.
            </p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10 transition">
            <Code size={16} />
            Start a project
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              className="group relative rounded-2xl border bg-white/60 dark:bg-white/5 backdrop-blur p-6 hover:border-black/20 dark:hover:border-white/20 hover:shadow-lg transition"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/0 transition pointer-events-none" />
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-medium">{p.title}</h3>
                <ExternalLink size={18} className="opacity-60 group-hover:opacity-100 transition" />
              </div>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full border px-2 py-1 text-black/70 dark:text-white/70">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
