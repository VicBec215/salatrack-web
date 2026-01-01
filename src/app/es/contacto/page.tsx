import PageShell from "@/src/components/PageShell";

const TALLY_CONTACTO_URL = "https://tally.so/r/obe2Db"; // <-- pega aquí tu enlace

export default function ContactoES() {
  return (
    <PageShell locale="es">
      <section className="mx-auto max-w-3xl px-4 py-14">
        <h1 className="text-3xl font-semibold tracking-tight">Contacto</h1>
        <p className="mt-3 text-zinc-700">
          Envíanos tu consulta y te respondemos lo antes posible.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
          <iframe
            title="Contacto - SalaTrack Health"
            src={TALLY_CONTACTO_URL}
            className="h-[760px] w-full"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          />
        </div>

        <p className="mt-4 text-xs text-zinc-500">
          También puedes escribirnos a contacto@salatrack.app
        </p>
      </section>
    </PageShell>
  );
}