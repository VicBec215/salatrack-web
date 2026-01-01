import PageShell from "@/src/components/PageShell";

export default function DemoEN() {
  return (
    <PageShell locale="en">
      <section className="mx-auto max-w-3xl px-4 py-14">
        <h1 className="text-3xl font-semibold tracking-tight">Request a demo</h1>
        <p className="mt-3 text-zinc-700">Email us and we’ll schedule a live demo.</p>

        <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <a
            className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700"
            href="mailto:demo@salatrack.app?subject=Demo%20request%20-%20SalaTrack%20Health"
          >
            Email to request a demo
          </a>
        </div>
      </section>
    </PageShell>
  );
}