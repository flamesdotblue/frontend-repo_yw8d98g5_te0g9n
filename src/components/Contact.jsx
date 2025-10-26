import { Github, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border bg-white/60 dark:bg-white/5 backdrop-blur p-8 sm:p-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Let’s build something great</h2>
            <p className="mt-3 text-black/70 dark:text-white/70">
              I’m available for freelance, contract, and full‑time roles. Tell me about your idea and timelines — I’ll reply within a day.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="mailto:hello@example.com?subject=Let’s work together"
                className="inline-flex items-center gap-2 rounded-full bg-black text-white px-5 py-3 text-sm hover:opacity-90 transition"
              >
                <Mail size={16} />
                Email Me
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm hover:bg-black/5 dark:hover:bg-white/10 transition"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <p className="mt-8 text-xs text-center text-black/60 dark:text-white/60">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </section>
  );
}
