import PageShell from "@/src/components/PageShell";

export default function DemoES() {
  return (
    <PageShell locale="es">
      <section className="mx-auto max-w-3xl px-4 py-14">
        <h1 className="text-3xl font-semibold tracking-tight">Solicitar demo</h1>
        <p className="mt-3 text-zinc-700">Escríbenos y coordinamos una demo.</p>

        <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <a
            className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700"
            href="mailto:demo@salatrack.app?subject=Solicitud%20de%20demo%20-%20SalaTrack%20Health"
          >
            Enviar email para solicitar demo
          </a>

          <p className="mt-4 text-xs text-zinc-500">
            (Cambia demo@salatrack.app por tu email real hasta que crees ese buzón.)
          </p>
        </div>
      </section>
    </PageShell>
  );
}