import PageShell from "@/src/components/PageShell";

export default function Privacidad() {
  return (
    <PageShell locale="es">
      <section className="mx-auto max-w-3xl px-4 py-14">
        <h1 className="text-3xl font-semibold tracking-tight">
          Política de privacidad
        </h1>

        <div className="mt-6 space-y-4 text-sm text-zinc-700">
          <p>
            SalaTrack Health se compromete a proteger la privacidad de los usuarios
            de este sitio web, de conformidad con lo dispuesto en el Reglamento
            (UE) 2016/679 (Reglamento General de Protección de Datos, RGPD) y la
            normativa española vigente.
          </p>

          <p>
            <strong>Responsable del tratamiento:</strong> SalaTrack Health<br />
            <strong>Correo electrónico de contacto:</strong> contacto@salatrack.app
          </p>

          <p>
            <strong>Datos recogidos:</strong><br />
            Este sitio web no recoge datos personales mediante formularios propios.
            Únicamente se recibirán los datos que el usuario decida comunicar de
            forma voluntaria a través del envío de correos electrónicos.
          </p>

          <p>
            <strong>Finalidad:</strong><br />
            Los datos facilitados se utilizarán exclusivamente para atender las
            consultas o solicitudes de información recibidas.
          </p>

          <p>
            <strong>Legitimación:</strong><br />
            Consentimiento del interesado.
          </p>

          <p>
            <strong>Conservación de los datos:</strong><br />
            Los datos se conservarán únicamente durante el tiempo necesario para
            atender la solicitud correspondiente.
          </p>

          <p>
            <strong>Derechos:</strong><br />
            El usuario puede ejercer los derechos de acceso, rectificación,
            supresión, limitación y oposición mediante solicitud al correo
            electrónico indicado.
          </p>

          <p>
            Este sitio web no utiliza cookies propias ni de terceros.
          </p>
        </div>
      </section>
    </PageShell>
  );
}