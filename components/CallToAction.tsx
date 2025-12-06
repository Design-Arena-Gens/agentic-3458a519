import Link from "next/link";

export function CallToAction() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 pb-24">
      <div className="glass relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-primary-500/20 via-purple-500/20 to-slate-900/80 p-10 text-center">
        <div className="absolute -bottom-24 right-10 h-56 w-56 rounded-full bg-primary-500/30 blur-3xl" />
        <div className="relative space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-200">
            Join the atlas
          </span>
          <h2 className="text-balance text-3xl font-semibold text-white md:text-4xl">
            Spin up your prompt command center in less than a week
          </h2>
          <p className="mx-auto max-w-2xl text-base text-slate-200">
            Access private playbooks, instrumentation templates, and governance
            accelerators. Pair them with your telemetry stack to orchestrate AI
            programs at enterprise scale.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link
              href="mailto:hello@chatptatlas.ai"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-soft"
            >
              Request access
            </Link>
            <Link
              href="https://www.notion.so"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-slate-200"
            >
              Download starter kit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
