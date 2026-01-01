import PageShell from "@/src/components/PageShell";

export default function ContactoES() {
  return (
    <PageShell locale="es">
      <section className="mx-auto max-w-3xl px-4 py-14">
        <h1 className="text-3xl font-semibold tracking-tight">Contacto</h1>
        <p className="mt-3 text-zinc-700">Cuéntanos tu caso y te respondemos.</p>

        <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <a
            className="inline-flex items-center justify-center rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-800 hover:bg-zinc-100"
            href="mailto:contacto@salatrack.app?subject=Contacto%20-%20SalaTrack%20Health"
          >
            Escribir email
          </a>

          <p className="mt-4 text-xs text-zinc-500">
            (Cambia contacto@salatrack.app por tu email real si aún no tienes ese buzón.)
          </p>
        </div>
      </section>
    </PageShell>
  );
}