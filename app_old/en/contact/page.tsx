import PageShell from "@/src/components/PageShell";

export default function ContactEN() {
  return (
    <PageShell locale="en">
      <section className="mx-auto max-w-3xl px-4 py-14">
        <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-3 text-zinc-700">Reach out and we’ll get back to you.</p>

        <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <a
            className="inline-flex items-center justify-center rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-800 hover:bg-zinc-100"
            href="mailto:contact@salatrack.app?subject=Contact%20-%20SalaTrack%20Health"
          >
            Email us
          </a>
        </div>
      </section>
    </PageShell>
  );
}