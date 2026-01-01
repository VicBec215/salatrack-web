import PageShell from "@/src/components/PageShell";

export default function AvisoLegal() {
  return (
    <PageShell locale="es">
      <section className="mx-auto max-w-3xl px-4 py-14">
        <h1 className="text-3xl font-semibold tracking-tight">Aviso legal</h1>

        <div className="mt-6 space-y-4 text-sm text-zinc-700">
          <p>
            En cumplimiento con lo dispuesto en la Ley 34/2002, de 11 de julio, de
            servicios de la sociedad de la información y de comercio electrónico
            (LSSI-CE), se informa a los usuarios de los siguientes datos:
          </p>

          <p>
            <strong>Titular del sitio web:</strong> SalaTrack Health<br />
            <strong>Actividad:</strong> Plataforma de gestión de agendas y flujos clínicos<br />
            <strong>Correo electrónico de contacto:</strong> contacto@salatrack.app
          </p>

          <p>
            El acceso y uso del presente sitio web atribuye la condición de usuario
            e implica la aceptación de las condiciones aquí reflejadas.
          </p>

          <p>
            El titular se reserva el derecho a modificar, en cualquier momento y
            sin previo aviso, la presentación y configuración del sitio web, así
            como el presente aviso legal.
          </p>
        </div>
      </section>
    </PageShell>
  );
}